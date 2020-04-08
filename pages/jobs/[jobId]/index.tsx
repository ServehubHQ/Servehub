import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Link as MuiLink,
  Paper,
  Typography,
} from '@material-ui/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'
import { Chat } from '../../../components/Chat'
import { JobMap } from '../../../components/JobMap'
import { Page } from '../../../components/Page'
import {
  useClaimJobMutation,
  useJobDetialsQuery,
} from '../../../graphql-codegen'
import { useAuth } from '../../../lib/useAuth'
import { useAuthRequired } from '../../../lib/useAuthRequired'

export default function JobDetailsPage() {
  useAuthRequired()
  const router = useRouter()
  const { jobId } = router.query
  const { userId, role } = useAuth()
  const { data, refetch } = useJobDetialsQuery({ variables: { jobId, userId } })
  const [claimJob] = useClaimJobMutation({ variables: { jobId } })

  const job = useMemo(() => data?.jobs_by_pk, [data])

  const handleClaimClick = useCallback(async () => {
    await claimJob()
    await refetch()
  }, [claimJob, refetch])

  return (
    <Page>
      <Box mb={4}>
        <Paper>
          <Box p={2}>
            <Grid container justify='space-between'>
              <Grid item>
                <Breadcrumbs aria-label='breadcrumb'>
                  <Link href='/jobs' passHref>
                    <MuiLink color='inherit'>Jobs</MuiLink>
                  </Link>
                  <Typography color='textPrimary'>
                    {job?.target?.name}
                  </Typography>
                </Breadcrumbs>
              </Grid>
              <Grid item>
                {role === 'server' && !job?.server ? (
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={handleClaimClick}
                  >
                    Claim Job
                  </Button>
                ) : job?.server?.id === userId ? (
                  <Link href={`/jobs/${job?.id}/attempt`} passHref>
                    <Button variant='contained' color='primary'>
                      Record Attempt
                    </Button>
                  </Link>
                ) : null}
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
      <Grid container spacing={4}>
        <Grid item sm={8} lg={6}>
          <Grid container spacing={4} direction='column'>
            <Grid item>
              <Card>
                <CardHeader title='Job Details' />
                <CardContent>
                  <Typography variant='subtitle1' color='textSecondary'>
                    Description
                  </Typography>
                  <Typography variant='h6' component='h2'>
                    {job?.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>{job ? <Chat job={job} /> : null}</Grid>
          </Grid>
        </Grid>
        <Grid item sm={4} lg={6}>
          <Grid container spacing={4} direction='column'>
            <Grid item>
              <Card>
                <CardHeader title='Target' />
                <CardContent>
                  <Typography variant='subtitle1' color='textSecondary'>
                    Name
                  </Typography>
                  <Typography variant='h6' component='h2'>
                    {job?.target?.name}
                  </Typography>
                </CardContent>
                <CardMedia>
                  {job?.target ? <JobMap target={job.target} /> : null}
                </CardMedia>
              </Card>
            </Grid>
            <Grid item>
              {job?.server ? (
                <Card>
                  <CardHeader title='Server' />
                  <CardContent>
                    <Typography variant='subtitle1' color='textSecondary'>
                      ID
                    </Typography>
                    <Typography variant='h6' component='h2'>
                      {job?.server.id}
                    </Typography>
                  </CardContent>
                </Card>
              ) : null}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Page>
  )
}
