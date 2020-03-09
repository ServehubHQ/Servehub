import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from '@apollo/client'
import { NextPage, NextPageContext } from 'next'
import App, { AppContext as NextAppContext } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { AuthClient } from './AuthClient'
import { getApolloClient } from './getApolloClient'
import { getAuthClient } from './getAuthClient'
import { AuthProvider } from './useAuth'

type DataContext = NextPageContext &
  NextAppContext & {
    apolloClient?: ApolloClient<NormalizedCacheObject>
    authClient?: AuthClient
    apolloState?: NormalizedCacheObject
    ctx: NextPageContext & {
      apolloClient?: ApolloClient<NormalizedCacheObject>
      authClient?: AuthClient
      apolloState?: NormalizedCacheObject
    }
  }

export const initContext = async (ctx: DataContext) => {
  const inAppContext = Boolean(ctx.ctx)

  // We consider installing `withData({ ssr: true })` on global App level
  // as antipattern since it disables project wide Automatic Static Optimization.
  if (process.env.NODE_ENV === 'development') {
    if (inAppContext) {
      console.warn(
        'Warning: You have opted-out of Automatic Static Optimization due to `withData` in `pages/_app`.\n' +
          'Read more: https://err.sh/next.js/opt-out-auto-static-optimization\n',
      )
    }
  }

  const authClient =
    ctx.authClient || getAuthClient(inAppContext ? ctx.ctx : ctx)

  // Initialize ApolloClient if not already done
  const apolloClient =
    ctx.apolloClient || getApolloClient(authClient, ctx.apolloState)

  // We send the Apollo Client as a prop to the component to avoid calling initApollo() twice in the server.
  // Otherwise, the component would have to call initApollo() again but this
  // time without the context. Once that happens, the following code will make sure we send
  // the prop as `null` to the browser.
  // @ts-ignore
  apolloClient.toJSON = () => null

  // Add apolloClient to NextPageContext & NextAppContext.
  // This allows us to consume the apolloClient inside our
  // custom `getInitialProps({ apolloClient })`.
  ctx.apolloClient = apolloClient
  ctx.authClient = authClient
  if (inAppContext) {
    ctx.ctx.apolloClient = apolloClient
    ctx.ctx.authClient = authClient
  }

  return ctx
}

/**
 * Creates a withData HOC
 * that provides the apolloContext
 * to a next.js Page or AppTree.
 * @param  {Object} withApolloOptions
 * @param  {Boolean} [withApolloOptions.ssr=false]
 * @returns {(PageComponent: ReactNode) => ReactNode}
 */
export const withData = ({ ssr = true } = {}) => (PageComponent: NextPage) => {
  const WithData = ({
    apolloClient,
    apolloState,
    authClient,
    ...pageProps
  }: DataContext) => {
    if (!authClient && typeof window !== 'undefined') {
      authClient = getAuthClient()
    }

    if (!apolloClient) {
      apolloClient = getApolloClient(authClient)
    }

    return (
      <AuthProvider client={authClient}>
        <ApolloProvider client={apolloClient}>
          <PageComponent {...(pageProps as any)} />
        </ApolloProvider>
      </AuthProvider>
    )
  }

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== 'production') {
    const displayName =
      PageComponent.displayName || PageComponent.name || 'Component'
    WithData.displayName = `withData(${displayName})`
  }

  if (ssr || PageComponent.getInitialProps) {
    WithData.getInitialProps = async (ctx: DataContext) => {
      const inAppContext = Boolean(ctx.ctx)
      const { apolloClient, authClient } = await initContext(ctx)

      // Run wrapped getInitialProps methods
      let pageProps = {}
      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx)
      } else if (inAppContext) {
        pageProps = await App.getInitialProps(ctx)
      }

      // Only on the server:
      if (typeof window === 'undefined') {
        const { AppTree } = ctx
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (ctx.res && ctx.res.finished) {
          return pageProps
        }

        // Only if dataFromTree is enabled
        if (ssr && AppTree) {
          try {
            // Import `@apollo/react-ssr` dynamically.
            // We don't want to have this in our client bundle.
            const { getDataFromTree } = await import('@apollo/react-ssr')

            // Since AppComponents and PageComponents have different context types
            // we need to modify their props a little.
            let props
            if (inAppContext) {
              props = { ...pageProps, apolloClient, authClient }
            } else {
              props = { pageProps: { ...pageProps, apolloClient, authClient } }
            }

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
      }

      return {
        ...pageProps,
        // Extract query data from the Apollo store
        apolloState: apolloClient!.cache.extract(),
        // Provide the client for ssr. As soon as this payload
        // gets JSON.stringified it will remove itself.
        apolloClient: ctx.apolloClient,
        authClient: ctx.authClient,
      }
    }
  }

  return WithData
}
