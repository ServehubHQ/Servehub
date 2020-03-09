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
  auth?: AuthClient,
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
    const jwt = auth?.getToken()
    return {
      headers: {
        ...headers,
        ...(jwt ? { authorization: `Bearer ${jwt}` } : {}),
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
