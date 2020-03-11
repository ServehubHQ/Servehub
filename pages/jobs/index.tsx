import { gql, useQuery } from '@apollo/client'
import { Button, Typography } from '@material-ui/core'
import Link from 'next/link'
import { Page } from '../../components/Page'

export default function JobListPage() {
  // export default withData()(function JobListPage() {
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
      <Typography variant='h3'>Jobs</Typography>
      <Link href='/jobs/create' passHref>
        <Button>Create Job</Button>
      </Link>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Page>
  )
}
