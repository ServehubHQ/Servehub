import { NextPage } from 'next'
import buildHasuraProvider from 'ra-data-hasura-graphql'
import { useEffect, useState } from 'react'
import { Admin, Resource } from 'react-admin'
import { getApolloClient } from '../lib/getApolloClient'
import { useAuth } from '../lib/useAuth'
import { useAuthenticationRequired } from '../lib/useAuthenticationRequired'
import { JobCreate, JobEdit, JobIcon, JobList } from '../resources/jobs'

const AdminPage: NextPage = () => {
  useAuthenticationRequired()
  const [dataProvider, setDataProvider] = useState()
  const { isAuthenticated, authClient } = useAuth()

  useEffect(() => {
    ;(async () => {
      if (!dataProvider && isAuthenticated) {
        const client = getApolloClient(authClient)

        console.log('buildHasuraProvider')
        const hasuraProvider = await buildHasuraProvider({ client })
        console.log('hasuraProvider', hasuraProvider)
        setDataProvider(() => hasuraProvider)
      }
    })()
  }, [setDataProvider, dataProvider, isAuthenticated, authClient])

  if (!dataProvider) {
    return <div>Loading...</div>
  }

  return (
    <Admin dataProvider={dataProvider}>
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

export default AdminPage
