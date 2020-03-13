import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from '@apollo/client'
import { ThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { AppContext as NextAppContext, AppProps } from 'next/app'
import Head from 'next/head'
import { useMemo } from 'react'
import { AuthClient } from '../lib/AuthClient'
import { config } from '../lib/config'
import { getApolloClient } from '../lib/getApolloClient'
import { getAuthClient } from '../lib/getAuthClient'
import { theme } from '../lib/theme'
import { AuthProvider } from '../lib/useAuth'

interface ServeHubAppProps extends AppProps {
  apolloClient?: ApolloClient<NormalizedCacheObject>
  authClient?: AuthClient
  apolloState?: NormalizedCacheObject
}

export default function ServeHubApp({
  authClient,
  apolloClient,
  apolloState,
  Component,
  pageProps,
}: ServeHubAppProps) {
  if (!authClient && typeof window !== 'undefined') {
    authClient = getAuthClient()
  } else if (!authClient) {
    throw new Error('AuthClient missing on SSR')
  }

  if (!apolloClient) {
    apolloClient = getApolloClient(authClient, apolloState)
  }

  const stripe = useMemo(() => loadStripe(config.stripePublishableKey), [])

  return (
    <AuthProvider client={authClient}>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Elements stripe={stripe}>
            <Component {...pageProps} />
          </Elements>
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  )
}

type ServeHubContext = NextAppContext & {
  ctx: {
    apolloClient?: ApolloClient<NormalizedCacheObject>
    authClient?: AuthClient
    apolloState?: NormalizedCacheObject
  }
}

// export async function getServerSideProps({ ctx, AppTree }: ServeHubContext) {
if (typeof window === 'undefined') {
  ServeHubApp.getInitialProps = async ({ ctx, AppTree }: ServeHubContext) => {
    console.log('ServeHubApp.getInitialProps')

    const authClient = getAuthClient(ctx)
    await authClient.refreshToken()

    const apolloClient = getApolloClient(authClient)
    // Ensure Next.js doesn't try to serlialize the ApolloClient
    // @ts-ignore - I know, but extending ApolloClient for toJSON is a PITA
    apolloClient.toJSON = () => null

    if (AppTree) {
      try {
        // We don't want to have this in our client bundle.
        const { getDataFromTree } = await import('@apollo/react-ssr')
        const props = { apolloClient, authClient }

        // Take the Next.js AppTree, determine which queries are needed to render,
        // and fetch them. This method can be pretty slow since it renders
        // your entire AppTree once for every query. Check out apollo fragments
        // if you want to reduce the number of rerenders.
        // https://www.apollographql.com/docs/react/data/fragments/
        await getDataFromTree(<AppTree {...(props as any)} />)
      } catch (error) {
        // Prevent Apollo Client GraphQL errors from crashing SSR.
        // Handle them in components via the data.error prop:
        // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
        console.error('Error while running `getDataFromTree`', error)
      }

      // getDataFromTree does not call componentWillUnmount
      // head side effect therefore need to be cleared manually
      Head.rewind()
    }

    return {
      apolloState: apolloClient.cache.extract(),
      authClient,
      apolloClient,
    }
  }
}
