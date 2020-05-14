import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Admin } from '../admin'
import { getApolloClient } from '../lib/getApolloClient'
import { getAuthClient } from '../lib/getAuthClient'
import { theme } from '../theme'

export default function AdminPage() {
  const [dataProvider, setDataProvider] = useState()
  const router = useRouter()

  useEffect(() => {
    ;(async () => {
      if (!dataProvider) {
        const { default: buildHasuraProvider } = await import(
          // eslint-disable-next-line comma-dangle
          'ra-data-hasura-graphql'
        )
        const authClient = getAuthClient(undefined, true)
        const apolloClient = getApolloClient(authClient)

        if (!authClient.isAuthenticated()) {
          router.push(`/login?next=${router.pathname}`)
          return
        }

        const hasuraProvider = await buildHasuraProvider({
          client: apolloClient,
        })
        setDataProvider(() => hasuraProvider)
      }
    })()
  }, [setDataProvider, dataProvider, router])

  if (!dataProvider) {
    return <div>Loading...</div>
  }

  return <Admin dataProvider={dataProvider} theme={theme} />
}
