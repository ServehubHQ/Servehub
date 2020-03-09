import {
  ApolloClient,
  from,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { setContext } from '@apollo/link-context'
import fetch from 'cross-fetch'
import { Auth } from './auth/Auth'

let apolloClient: ApolloClient<NormalizedCacheObject>

export function getApolloClient(auth: Auth) {
  if (apolloClient) {
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

  apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([authLink, httpLink]),
  })

  return apolloClient
}
