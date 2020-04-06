import { Box, Breadcrumbs, Paper, Typography } from '@material-ui/core'
import JobCard from '../../components/JobCard'
import { Page } from '../../components/Page'
import { useJobsListQuery } from '../../graphql-codegen'
import { useAuth } from '../../lib/useAuth'
import { useAuthRequired } from '../../lib/useAuthRequired'

export default function JobListPage() {
  useAuthRequired()
  const { userId } = useAuth()
  const { data } = useJobsListQuery({
    variables: { userId },
  })

  return (
    <Page currentUser={data?.users[0]}>
      <Box mb={4}>
        <Paper elevation={2}>
          <Box p={2}>
            <Breadcrumbs aria-label='breadcrumb'>
              <Typography color='textPrimary'>Jobs</Typography>
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
