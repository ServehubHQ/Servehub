import {
  Box,
  Breadcrumbs,
  Paper,
  Typography,
  Grid,
  Link as MuiLink,
} from '@material-ui/core'
import JobCard from '../../../components/JobCard'
import { Page } from '../../../components/Page'
import { useJobsAvailableQuery } from '../../../graphql-codegen'
import { useAuth } from '../../../lib/useAuth'
import { useAuthRequired } from '../../../lib/useAuthRequired'
import Link from 'next/link'

export default function JobsAvailablePage() {
  useAuthRequired()
  const { userId } = useAuth()
  const { data } = useJobsAvailableQuery({
    variables: { userId },
  })

  return (
    <Page currentUser={data?.users[0]}>
      <Box mb={4}>
        <Paper elevation={2}>
          <Box p={2}>
            <Breadcrumbs aria-label='breadcrumb'>
              <Link href='/jobs' passHref>
                <MuiLink color='inherit'>Jobs</MuiLink>
              </Link>
              <Typography color='textPrimary'>Available</Typography>
            </Breadcrumbs>
          </Box>
        </Paper>
      </Box>

      {data?.jobs.map((job) => (
        <Box key={job.id} mb={2}>
          <JobCard job={job} />
        </Box>
      ))}
    </Page>
  )
}
