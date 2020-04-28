import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  makeStyles,
  Typography,
  Tooltip,
} from '@material-ui/core'
import { CheckCircle, Error } from '@material-ui/icons'
import moment from 'moment'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { JobDetailsPage } from '../../../components/JobDetailsPage'
import { Map } from '../../../components/Map'
import { useJobDetialsQuery } from '../../../graphql-codegen'
import { useAuth } from '../../../lib/useAuth'
import { useAuthRequired } from '../../../lib/useAuthRequired'
import { Address } from '../../../components/Address'
import { Stack } from '../../../components/Stack'
import { RateCard } from '../../../components/RateCard'
import { Rating } from '@material-ui/lab'
import { jobDueDate, jobIsComplete } from '../../../lib/jobUtils'

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
  const { data, refetch } = useJobDetialsQuery({ variables: { jobId, userId } })
  const dueDate = useMemo(() => jobDueDate(data?.job), [data])
  const isComplete = useMemo(() => jobIsComplete(data?.job), [data])

  return (
    <JobDetailsPage job={data?.job} query={data} refetch={refetch}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {data?.job && userId && isComplete ? (
            <RateCard job={data.job} currentUserId={userId} onRated={refetch} />
          ) : null}
        </Grid>
        <Grid item sm={12} md={6}>
          <Card>
            <CardHeader title='Target' />
            <Divider />
            <CardContent>
              <Stack>
                <div>
                  <Typography variant='subtitle1' color='textSecondary'>
                    Name
                  </Typography>
                  <Typography variant='h6' component='h2'>
                    {data?.job?.target_name}
                  </Typography>
                </div>
                <div>
                  <Typography variant='subtitle1' color='textSecondary'>
                    Address
                  </Typography>
                  <Typography variant='h6' component='h2'>
                    {data?.job?.target_address ? (
                      <Address {...data?.job.target_address} />
                    ) : null}
                  </Typography>
                </div>
              </Stack>
            </CardContent>
            <CardMedia>
              {data?.job?.target_address ? (
                <Map {...data?.job.target_address} />
              ) : null}
            </CardMedia>
          </Card>
        </Grid>
        <Grid item sm={12} md={6}>
          <Grid container spacing={2} direction='column'>
            <Grid item>
              <Card>
                <CardHeader title='Attempts' />
                <Divider />
                <CardContent>
                  <Stack>
                    {dueDate ? (
                      <>
                        <Typography variant='subtitle1' color='textSecondary'>
                          Due
                        </Typography>
                        <Tooltip
                          title={dueDate.format(
                            'dddd, MMMM Do YYYY, h:mm:ss a',
                          )}
                          aria-label='due'
                        >
                          <Typography variant='h6' component='span'>
                            {dueDate.fromNow()}
                          </Typography>
                        </Tooltip>
                      </>
                    ) : null}
                    {data?.job?.plan ? (
                      <>
                        <Typography variant='subtitle1' color='textSecondary'>
                          Attempts
                        </Typography>
                        <Typography variant='h6' component='span'>
                          {data.job.plan.attempts - data.job.attempts.length}{' '}
                          attempts remaining
                        </Typography>
                      </>
                    ) : null}
                    {(data?.job?.attempts.length || 0) === 0 ? (
                      <Typography>No Attempts made yet.</Typography>
                    ) : (
                      data?.job?.attempts.map((attempt) => (
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
                      ))
                    )}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              {data?.job?.server ? (
                <Card>
                  <CardHeader title='Server' />
                  <Divider />
                  <CardContent>
                    <Stack>
                      <>
                        <Typography variant='subtitle1' color='textSecondary'>
                          Name
                        </Typography>
                        <Typography variant='h6' component='h2'>
                          {data.job.server.name}
                        </Typography>
                      </>
                      <>
                        <Typography variant='subtitle1' color='textSecondary'>
                          Rating
                        </Typography>
                        <Rating
                          value={
                            data.job.server.ratings_aggregate.aggregate?.avg
                              ?.value
                          }
                          readOnly
                        />
                        <Typography variant='h6' component='h2'>
                          {`Avg. of ${
                            data.job.server.ratings_aggregate.aggregate?.count
                          } rating${
                            data.job.server.ratings_aggregate.aggregate
                              ?.count === 1
                              ? ''
                              : 's'
                          }`}
                        </Typography>
                      </>
                    </Stack>
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
