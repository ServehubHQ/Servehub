import {
  ApolloClient,
  from,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { setContext } from '@apollo/link-context'
import { auth } from './auth'

let apolloClient: ApolloClient<NormalizedCacheObject>

export function getApolloClient() {
  if (apolloClient) {
    return apolloClient
  }

  const httpLink = new HttpLink({
    uri: 'https://hasura-rf2zfg3c.nhost.app/v1/graphql',
  })

  const authLink = setContext((a, { headers }) => {
    const jwt = auth?.getJWTToken()
    return {
      headers: {
        ...headers,
        ...(jwt ? { authorization: `Bearer ${jwt}` } : {}),
      },
    }
  })

  apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([authLink, httpLink]),
  })

  return apolloClient
}
