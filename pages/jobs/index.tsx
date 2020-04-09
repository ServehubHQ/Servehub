import { Box, Button } from '@material-ui/core'
import Link from 'next/link'
import { useMemo } from 'react'
import { Heading } from '../../components/Heading'
import JobCard from '../../components/JobCard'
import { Page } from '../../components/Page'
import { useJobsListQuery } from '../../graphql-codegen'
import { useAuth } from '../../lib/useAuth'
import { useAuthRequired } from '../../lib/useAuthRequired'

export default function JobListPage() {
  useAuthRequired()
  const { userId, role } = useAuth()
  const { data } = useJobsListQuery({
    variables: { userId, isLawyer: role === 'lawyer' },
  })

  const jobs = useMemo(
    () => (role === 'lawyer' ? data?.lawyerJobs : data?.serverJobs),
    [data, role],
  )

  return (
    <Page currentUser={data?.users[0]}>
      <Box mb={4}>
        <Heading
          title='Jobs'
          action={
            role === 'server' ? (
              <Link href='/jobs/available' passHref>
                <Button variant='contained' color='primary'>
                  Available Jobs
                </Button>
              </Link>
            ) : null
          }
        />
      </Box>

      {jobs?.map((job) => (
        <Box key={job.id} mb={2}>
          <JobCard job={job} />
        </Box>
      ))}
    </Page>
  )
}
