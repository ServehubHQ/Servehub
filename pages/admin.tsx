import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Admin, Resource, ShowGuesser } from 'react-admin'
import { JobIcon, JobList } from '../admin/resources/jobs'
import { TargetShow } from '../admin/resources/targets'
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
      <Resource name='targets' show={TargetShow} />
      <Resource name='users' list={UserList} icon={UserIcon} show={UserShow} />
      <Resource name='jobs' list={JobList} icon={JobIcon} show={ShowGuesser} />
    </Admin>
  )
}
