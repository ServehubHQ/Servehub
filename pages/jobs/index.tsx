import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
  Breadcrumbs,
} from '@material-ui/core'
import { CheckBox, CheckBoxOutlineBlank } from '@material-ui/icons'
import Link from 'next/link'
import { Page } from '../../components/Page'
import { useJobsListQuery } from '../../graphql-codegen'
import { useAuthRequired } from '../../lib/useAuthRequired'

export default function JobListPage() {
  useAuthRequired()
  const { data, loading } = useJobsListQuery()
  console.log('query', { loading, data })

  return (
    <Page>
      <Paper>
        <Box p={2}>
          <Box mb={4}>
            <Breadcrumbs aria-label='breadcrumb'>
              <Typography color='textPrimary'>Jobs</Typography>
            </Breadcrumbs>
          </Box>

          {data?.jobs.map((job) => (
            <Box key={job.id} mb={2}>
              <Grid container>
                <Grid item sm={4}>
                  <Typography variant='subtitle1' color='textSecondary'>
                    Target
                  </Typography>
                  <Typography variant='h6' component='h2'>
                    {job.target?.name}
                  </Typography>
                </Grid>
                <Grid item sm={2}>
                  <Typography variant='subtitle1' color='textSecondary'>
                    Paid
                  </Typography>
                  <Typography variant='h6' component='h2'>
                    {job.stripe_payment_intent_succeeded ? (
                      <CheckBox />
                    ) : (
                      <CheckBoxOutlineBlank />
                    )}
                  </Typography>
                </Grid>
                <Grid item sm={6}>
                  <Link href={`/jobs/${job.id}`} passHref>
                    <Button>View Details</Button>
                  </Link>
                </Grid>
              </Grid>
              <Divider />
            </Box>
          ))}
        </Box>
      </Paper>
    </Page>
  )
}
