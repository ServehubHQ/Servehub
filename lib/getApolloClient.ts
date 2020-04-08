import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  split,
} from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { setContext } from '@apollo/link-context'
import { WebSocketLink } from '@apollo/link-ws'
import fetch from 'cross-fetch'
import { AuthClient } from './AuthClient'
import { config } from './config'

let apolloClient: ApolloClient<NormalizedCacheObject>

interface AdminAuth {
  isAdmin: boolean
}

export function getApolloClient(
  auth: AuthClient | AdminAuth,
  data?: NormalizedCacheObject,
) {
  const isBrowser = typeof window !== 'undefined'
  if (auth.isAdmin && isBrowser) {
    throw new Error('Attempted admin auth in browser')
  }
  const authClient = auth.isAdmin ? null : (auth as AuthClient)

  if (isBrowser && apolloClient) {
    return apolloClient
  }

  const httpLink = setContext(async (a, { headers }) => {
    if (auth.isAdmin) {
      if (!config.hasuraAdminSecret) {
        throw new Error(
          'Attempt to make admin GraphQL request without hasura admin secret.',
        )
      }
      return {
        headers: {
          ...headers,
          'x-hasura-admin-secret': config.hasuraAdminSecret,
          'x-hasura-role': 'admin',
        },
      }
    }

    if (!authClient) {
      throw new Error('Attempting GraphQL request without auth')
    }

    return {
      headers: {
        ...headers,
        ...(await authClient.getRequestHeaders()),
      },
    }
  }).concat(
    new HttpLink({
      uri: 'https://hasura-rf2zfg3c.nhost.app/v1/graphql',
      fetch,
    }),
  )

  const webSocketLink =
    isBrowser &&
    new WebSocketLink({
      uri: 'wss://hasura-rf2zfg3c.nhost.app/v1/graphql',
      options: {
        lazy: true,
        reconnect: true,
        connectionParams: async () => ({
          headers: await authClient?.getRequestHeaders(),
        }),
      },
    })

  const cache = new InMemoryCache()

  if (data) {
    cache.restore(data)
  }

  apolloClient = new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser,
    cache,
    link: webSocketLink
      ? split(
          ({ query }) => {
            const definition = getMainDefinition(query)
            return (
              definition.kind === 'OperationDefinition' &&
              definition.operation === 'subscription'
            )
          },
          webSocketLink,
          httpLink,
        )
      : httpLink,
  })

  return apolloClient
}
