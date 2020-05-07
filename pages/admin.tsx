import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Admin, Resource } from 'react-admin'
import { AddressShow } from '../admin/resources/addresses'
import { DocumentShow } from '../admin/resources/documents'
import { JobIcon, JobList, JobShow } from '../admin/resources/jobs'
import { UserIcon, UserList, UserShow } from '../admin/resources/users'
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

  return (
    <Admin dataProvider={dataProvider} theme={theme}>
      <Resource name='users' list={UserList} icon={UserIcon} show={UserShow} />
      <Resource name='jobs' list={JobList} icon={JobIcon} show={JobShow} />
      <Resource name='addresses' show={AddressShow} />
      <Resource name='documents' show={DocumentShow} />
      <Resource name='messages' />
      <Resource name='ratings' />
      <Resource name='attempt' />
    </Admin>
  )
}
