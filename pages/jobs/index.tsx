import {
  Box,
  Breadcrumbs,
  Paper,
  Typography,
  Grid,
  Button,
} from '@material-ui/core'
import JobCard from '../../components/JobCard'
import { Page } from '../../components/Page'
import { useJobsListQuery } from '../../graphql-codegen'
import { useAuth } from '../../lib/useAuth'
import { useAuthRequired } from '../../lib/useAuthRequired'
import { useMemo } from 'react'
import Link from 'next/link'

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
        <Paper elevation={2}>
          <Box p={2}>
            <Grid container justify='space-between'>
              <Grid item>
                <Breadcrumbs aria-label='breadcrumb'>
                  <Typography color='textPrimary'>Jobs</Typography>
                </Breadcrumbs>
              </Grid>
              <Grid item>
                {role === 'server' ? (
                  <Link href='/jobs/available' passHref>
                    <Button variant='contained' color='primary'>
                      Available Jobs
                    </Button>
                  </Link>
                ) : null}
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>

      {jobs?.map((job) => (
        <Box key={job.id} mb={2}>
          <JobCard job={job} />
        </Box>
      ))}
    </Page>
  )
}
