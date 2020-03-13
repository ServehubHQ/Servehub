import {
  ApolloClient,
  from,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { setContext } from '@apollo/link-context'
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

  const httpLink = new HttpLink({
    uri: 'https://hasura-rf2zfg3c.nhost.app/v1/graphql',
    fetch,
  })

  const authLink = setContext(async (a, { headers }) => {
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

    await authClient.refreshToken()
    const jwt = authClient?.getToken()
    const roles = authClient?.getRoles() || []

    return {
      headers: {
        ...headers,
        ...(jwt
          ? {
              authorization: `Bearer ${jwt}`,
              'x-hasura-role':
                roles.indexOf('lawyer') !== -1
                  ? 'lawyer'
                  : roles.indexOf('server') !== -1
                  ? 'server'
                  : 'user',
            }
          : {}),
      },
    }
  })

  const cache = new InMemoryCache()

  if (data) {
    cache.restore(data)
  }

  apolloClient = new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser,
    cache,
    link: from([authLink, httpLink]),
  })

  return apolloClient
}
