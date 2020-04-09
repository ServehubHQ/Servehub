import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
  Divider,
} from '@material-ui/core'
import { CheckCircle, Error } from '@material-ui/icons'
import moment from 'moment'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { Chat } from '../../../components/Chat'
import { JobDetailsPage } from '../../../components/JobDetailsPage'
import { JobMap } from '../../../components/JobMap'
import { useJobDetialsQuery } from '../../../graphql-codegen'
import { useAuth } from '../../../lib/useAuth'
import { useAuthRequired } from '../../../lib/useAuthRequired'

const useStyles = makeStyles((theme) => ({
  successIcon: {
    fill: theme.palette.success.main,
  },
}))

export default function JobDetails() {
  useAuthRequired()
  const router = useRouter()
  const { jobId } = router.query
  const styles = useStyles()
  const { userId } = useAuth()
  const { data } = useJobDetialsQuery({ variables: { jobId, userId } })

  const job = useMemo(() => data?.jobs_by_pk, [data])

  return (
    <JobDetailsPage
      job={data?.jobs_by_pk || undefined}
      currentUser={data?.users[0] || undefined}
    >
      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          <Grid container spacing={2} direction='column'>
            <Grid item>
              <Card>
                <CardHeader title='Target' />
                <Divider />
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
          </Grid>
        </Grid>
        <Grid item sm={12} md={6}>
          <Grid container spacing={2} direction='column'>
            <Grid item>
              <Card>
                <CardHeader title='Attempts' />
                <Divider />
                <CardContent>
                  {(job?.attempts.length || 0) === 0 ? (
                    <Typography>No Attempts made yet.</Typography>
                  ) : (
                    <Grid container spacing={2} direction='column'>
                      {job?.attempts.map((attempt) => (
                        <Grid item key={attempt.id}>
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
            <Grid item>
              {job?.server ? (
                <Card>
                  <CardHeader title='Server' />
                  <Divider />
                  <CardContent>
                    <Typography variant='subtitle1' color='textSecondary'>
                      Name
                    </Typography>
                    <Typography variant='h6' component='h2'>
                      {job?.server.name}
                    </Typography>
                  </CardContent>
                </Card>
              ) : null}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </JobDetailsPage>
  )
}
