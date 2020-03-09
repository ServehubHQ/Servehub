import { NextPage } from 'next'
import buildHasuraProvider from 'ra-data-hasura-graphql'
import { useEffect, useState } from 'react'
import { Admin, Resource } from 'react-admin'
import { getApolloClient } from '../lib/apollo'
import { useAuth } from '../lib/auth'
import { useAuthenticationRequired } from '../lib/useAuthenticationRequired'
import { JobCreate, JobEdit, JobIcon, JobList } from '../resources/jobs'

const AdminPage: NextPage = () => {
  useAuthenticationRequired()
  const [dataProvider, setDataProvider] = useState()
  const { isAuthenticated, auth } = useAuth()

  useEffect(() => {
    ;(async () => {
      if (!dataProvider && isAuthenticated) {
        const client = getApolloClient(auth)

        console.log('buildHasuraProvider')
        const hasuraProvider = await buildHasuraProvider({ client })
        console.log('hasuraProvider', hasuraProvider)
        setDataProvider(() => hasuraProvider)
      }
    })()
  }, [setDataProvider, dataProvider, isAuthenticated, auth])

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
