import { Box, Link as MuiLink } from '@material-ui/core'
import Link from 'next/link'
import { Heading } from '../../../components/Heading'
import JobCard from '../../../components/JobCard'
import { Page } from '../../../components/Page'
import { useJobsAvailableQuery } from '../../../graphql-codegen'
import { useAuth } from '../../../lib/useAuth'
import { useAuthRequired } from '../../../lib/useAuthRequired'

export default function JobsAvailablePage() {
  useAuthRequired()
  const { userId } = useAuth()
  const { data } = useJobsAvailableQuery({
    variables: { userId },
  })

  return (
    <Page currentUser={data?.users[0]}>
      <Box mb={4}>
        <Heading
          title='Available Jobs'
          breadcrumbs={[
            <Link href='/jobs' passHref key='jobs'>
              <MuiLink color='inherit'>Jobs</MuiLink>
            </Link>,
          ]}
        />
      </Box>

      {data?.jobs.map((job) => (
        <Box key={job.id} mb={2}>
          <JobCard job={job} />
        </Box>
      ))}
    </Page>
  )
}
