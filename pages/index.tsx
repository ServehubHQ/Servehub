import { gql, useQuery } from '@apollo/client'
import { Typography } from '@material-ui/core'
import { Page } from '../components/Page'
import { withData } from '../lib/withData'

export default withData()(function HomePage() {
  const { data, loading } = useQuery(gql`
    {
      jobs {
        id
      }
    }
  `)
  console.log('query', { loading, data })

  return (
    <Page>
      <Typography variant='h1'>Home</Typography>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Page>
  )
})
