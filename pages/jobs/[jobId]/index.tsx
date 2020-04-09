import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Link as MuiLink,
  Typography,
  makeStyles,
} from '@material-ui/core'
import { CheckCircle, Error } from '@material-ui/icons'
import moment from 'moment'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'
import { Chat } from '../../../components/Chat'
import { Heading } from '../../../components/Heading'
import { JobMap } from '../../../components/JobMap'
import { Page } from '../../../components/Page'
import {
  useClaimJobMutation,
  useJobDetialsQuery,
} from '../../../graphql-codegen'
import { useAuth } from '../../../lib/useAuth'
import { useAuthRequired } from '../../../lib/useAuthRequired'

const useStyles = makeStyles((theme) => ({
  successIcon: {
    fill: theme.palette.success.main,
  },
}))

export default function JobDetailsPage() {
  useAuthRequired()
  const router = useRouter()
  const { jobId } = router.query
  const styles = useStyles()
  const { userId, role } = useAuth()
  const { data, refetch } = useJobDetialsQuery({ variables: { jobId, userId } })
  console.log(data)
  const [claimJob] = useClaimJobMutation({ variables: { jobId } })

  const job = useMemo(() => data?.jobs_by_pk, [data])

  const handleClaimClick = useCallback(async () => {
    await claimJob()
    await refetch()
  }, [claimJob, refetch])

  return (
    <Page>
      <Box mb={4}>
        <Heading
          title={job?.target?.name || 'Job'}
          breadcrumbs={[
            <Link href='/jobs' passHref key='jobs'>
              <MuiLink color='inherit'>Jobs</MuiLink>
            </Link>,
          ]}
          action={
            role === 'server' && !job?.server ? (
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
            ) : null
          }
        />
      </Box>
      <Grid container spacing={4}>
        <Grid item sm={8} lg={6}>
          <Grid container spacing={4} direction='column'>
            <Grid item>
              <Card>
                <CardHeader title='Attempts' />
                <CardContent>
                  {(job?.attempts.length || 0) === 0 ? (
                    <Typography>No Attempts made yet.</Typography>
                  ) : (
                    <Grid container spacing={2} direction='column'>
                      {job?.attempts.map((attempt) => (
                        <Grid item>
                          <Grid container spacing={1} alignItems='center'>
                            <Grid item>
                              {attempt.success ? (
                                <CheckCircle className={styles.successIcon} />
                              ) : (
                                <Error color='error' />
                              )}
                            </Grid>
                            <Grid item>
                              <Typography
                                title={moment(attempt.attempted_at).format(
                                  'LLL',
                                )}
                              >
                                {moment(attempt.attempted_at).fromNow()}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      ))}
                    </Grid>
                  )}
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
