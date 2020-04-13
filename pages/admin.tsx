import { useRouter } from 'next/router'
import buildHasuraProvider from 'ra-data-hasura-graphql'
import { useEffect, useState } from 'react'
import { Admin, Resource } from 'react-admin'
import { getApolloClient } from '../lib/getApolloClient'
import { getAuthClient } from '../lib/getAuthClient'
import { JobCreate, JobEdit, JobIcon, JobList } from '../resources/jobs'
import { theme } from '../theme'

export default function AdminPage() {
  const [dataProvider, setDataProvider] = useState()
  const router = useRouter()

  useEffect(() => {
    ;(async () => {
      if (!dataProvider) {
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

  return (
    <Admin dataProvider={dataProvider} theme={theme}>
      <Resource
        name='jobs'
        list={JobList}
        edit={JobEdit}
        create={JobCreate}
        icon={JobIcon}
      />
    </Admin>
  )
}
