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

let apolloClient: ApolloClient<NormalizedCacheObject>

export function getApolloClient(
  authClient: AuthClient,
  data?: NormalizedCacheObject,
) {
  const isBrowser = typeof window !== 'undefined'

  if (isBrowser && apolloClient) {
    return apolloClient
  }

  const httpLink = new HttpLink({
    uri: 'https://hasura-rf2zfg3c.nhost.app/v1/graphql',
    fetch,
  })

  const authLink = setContext((a, { headers }) => {
    if (!authClient || !authClient.isAuthenticated()) {
      console.warn('attempted unauthorized GraphQL request')
    }
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
