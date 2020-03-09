import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import { NextPageContext } from 'next'
import { AppProps } from 'next/app'
import { useEffect } from 'react'
import { getApolloClient } from '../lib/apollo'
import { AuthProvider } from '../lib/auth'
import { Auth } from '../lib/auth/Auth'
import { theme } from '../lib/theme'

interface ServeHubProps extends AppProps {
  auth: Auth
}

export default function ServeHub({
  Component,
  pageProps,
  auth,
}: ServeHubProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }
  }, [])
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider auth={auth}>
          <ApolloProvider client={getApolloClient(auth)}>
            <Component {...pageProps} />
          </ApolloProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

ServeHub.getInitialProps = async ({ ctx }: { ctx: NextPageContext }) => {
  const auth = new Auth(ctx)
  await auth.refreshToken()

  return { auth }
}
