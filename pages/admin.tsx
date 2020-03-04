import { createHttpLink } from 'apollo-link-http'
import { NextPage, NextPageContext } from 'next'
import buildHasuraProvider from 'ra-data-hasura-graphql'
import { useEffect, useState } from 'react'
import { Admin, Resource } from 'react-admin'
import Router from 'next/router'
import { nhost } from '../lib/nhost'
import { JobList, JobEdit, JobCreate, JobIcon } from '../resources/jobs'

interface AdminPageProps {}

const AdminPage: NextPage<AdminPageProps> = ({}: AdminPageProps) => {
  const [dataProvider, setDataProvider] = useState()

  useEffect(() => {
    ;(async () => {
      if (!dataProvider) {
        const jwt = nhost.auth().getJWTToken()
        if (!jwt) {
          Router.push(`/login?next=${Router.pathname}`)
          return
        }

        const hasuraProvider = await buildHasuraProvider({
          clientOptions: {
            link: createHttpLink({
              uri: 'https://hasura-rf2zfg3c.nhost.app/v1/graphql',
              headers: {
                authorization: jwt ? `Bearer ${jwt}` : '',
              },
            }),
          },
        })
        setDataProvider(() => hasuraProvider)
      }
    })()
  }, [setDataProvider, dataProvider])

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
