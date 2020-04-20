import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  split,
  ApolloLink,
} from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { setContext } from '@apollo/link-context'
import { WebSocketLink } from '@apollo/link-ws'

import { createNetworkStatusNotifier } from 'react-apollo-network-status'
import fetch from 'cross-fetch'
import { AuthClient } from './AuthClient'
import { config } from './config'
import { useMemo } from 'react'
import { useAuth } from './useAuth'

const {
  link: networkStatusLink,
  useApolloNetworkStatus,
} = createNetworkStatusNotifier()

let apolloClient: ApolloClient<NormalizedCacheObject>

export { useApolloNetworkStatus }

export function getApolloClient(
  authClient: AuthClient,
  data?: NormalizedCacheObject,
) {
  if (!config.hasuraHttpEndpoint || !config.hasuraWsEndpoint) {
    throw new Error('Hasura endpoint config values not set')
  }
  const isBrowser = typeof window !== 'undefined'

  if (isBrowser && apolloClient) {
    return apolloClient
  }

  const httpLink = setContext(async (a, { headers }) => {
    if (!authClient) {
      throw new Error('Attempting GraphQL request without auth')
    }

    return {
      headers: {
        ...headers,
        ...(await authClient.getRequestHeaders()),
      },
    }
  })
    .concat((networkStatusLink as unknown) as ApolloLink)
    .concat(
      new HttpLink({
        uri: config.hasuraHttpEndpoint,
        fetch,
      }),
    )

  const webSocketLink =
    isBrowser &&
    new WebSocketLink({
      uri: config.hasuraWsEndpoint,
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

export function useApolloClient() {
  const { authClient } = useAuth()
  const apolloClient = useMemo(() => getApolloClient(authClient!), [authClient])
  return apolloClient
}
