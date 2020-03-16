import {
  Box,
  Breadcrumbs,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Link as MuiLink,
  Paper,
  Typography,
} from '@material-ui/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { JobMap } from '../../components/JobMap'
import { Page } from '../../components/Page'
import { useJobDetialsQuery } from '../../graphql-codegen'
import { useAuthRequired } from '../../lib/useAuthRequired'

export default function JobDetailsPage() {
  useAuthRequired()
  const router = useRouter()
  const { jobId } = router.query
  const { data, loading } = useJobDetialsQuery({ variables: { jobId } })
  console.log('query', { loading, data })

  return (
    <Page>
      <Box mb={4}>
        <Paper>
          <Box p={2}>
            <Breadcrumbs aria-label='breadcrumb'>
              <Link href='/jobs' passHref>
                <MuiLink color='inherit'>Jobs</MuiLink>
              </Link>
              <Typography color='textPrimary'>
                {data?.jobs_by_pk?.target?.name}
              </Typography>
            </Breadcrumbs>
          </Box>
        </Paper>
      </Box>
      <Grid container spacing={4}>
        <Grid item sm={8} lg={6}>
          <Card>
            <CardHeader title='Job Details' />
            <CardContent>
              <Typography variant='subtitle1' color='textSecondary'>
                Target
              </Typography>
              <Typography variant='h6' component='h2'>
                {data?.jobs_by_pk?.target?.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={4} lg={6}>
          <Paper>
            {data?.jobs_by_pk?.target ? (
              <JobMap target={data.jobs_by_pk.target} />
            ) : null}
          </Paper>
        </Grid>
      </Grid>
    </Page>
  )
}
