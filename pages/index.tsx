import { gql } from '@apollo/client'
import { useEffect } from 'react'
import { Page } from '../components/Page'
import { getApolloClient } from '../lib/apollo'
import { useAuth } from '../lib/auth'

export default function HomePage() {
  const { isAuthenticated } = useAuth()
  useEffect(() => {
    if (!isAuthenticated) return

    const client = getApolloClient()

    client
      .query({
        query: gql`
          {
            jobs {
              id
            }
          }
        `,
      })
      .then(console.log)
  }, [isAuthenticated])
  return <Page>Home</Page>
}
