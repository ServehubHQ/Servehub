import { gql, useQuery } from '@apollo/client'
import { Typography } from '@material-ui/core'
import { Page } from '../components/Page'

export default function HomePage() {
  // const { isAuthenticated } = useAuth()

  const { data } = useQuery(gql`
    {
      jobs {
        id
      }
    }
  `)
  // useEffect(() => {
  //   if (!isAuthenticated) return

  //   const client = getApolloClient()

  //   client
  //     .query({
  //       query: gql`
  //         {
  //           jobs {
  //             id
  //           }
  //         }
  //       `,
  //     })
  //     .then(console.log)
  // }, [isAuthenticated])
  return (
    <Page>
      <Typography variant='h1'>Home</Typography>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Page>
  )
}
