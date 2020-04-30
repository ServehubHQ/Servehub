import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  makeStyles,
  Paper,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  CardActions,
  Stepper,
  Step,
  StepLabel,
} from '@material-ui/core'
import { CheckCircleOutlined, HighlightOffOutlined } from '@material-ui/icons'
import moment from 'moment'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { Address } from '../../../components/Address'
import { JobDetailsPage } from '../../../components/JobDetailsPage'
import { Map } from '../../../components/Map'
import { RateCard } from '../../../components/RateCard'
import { useJobDetialsQuery } from '../../../graphql-codegen'
import { DATETIME_FORMAT_LONG, DATE_FORMAT_LONG } from '../../../lib/constants'
import { jobDueDate, jobIsComplete } from '../../../lib/jobUtils'
import { useAuth } from '../../../lib/useAuth'
import { useAuthRequired } from '../../../lib/useAuthRequired'
import { encodeLocation } from '../../../lib/encodeLocation'
import { Stack } from '../../../components/Stack'
import { StepConnector, StepIcon } from '../../../components/StepIcon'

const useStyles = makeStyles((theme) => ({
  heading: {
    marginBottom: theme.spacing(1),
  },
  successIcon: {
    fill: theme.palette.success.main,
  },
  attemptIcon: {
    fontSize: 49,
  },
  stepLabel: {
    ...theme.typography.h5,
    fontWeight: 'inherit',
  },
}))

export default function JobDetails() {
  useAuthRequired()
  const router = useRouter()
  const { jobId } = router.query
  const classNames = useStyles()
  const { userId } = useAuth()
  const { data, refetch } = useJobDetialsQuery({ variables: { jobId, userId } })
  const dueDate = useMemo(() => jobDueDate(data?.job), [data])
  const isComplete = useMemo(() => jobIsComplete(data?.job), [data])

  return (
    <JobDetailsPage job={data?.job} query={data} refetch={refetch}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper>
            <Stepper
              connector={<StepConnector />}
              activeStep={
                typeof data?.job?.server === 'undefined'
                  ? 1
                  : isComplete
                  ? 3
                  : 2
              }
            >
              <Step>
                <StepLabel
                  classes={{ label: classNames.stepLabel }}
                  StepIconComponent={StepIcon}
                >
                  Job Posted
                </StepLabel>
              </Step>
              <Step>
                <StepLabel
                  classes={{ label: classNames.stepLabel }}
                  StepIconComponent={StepIcon}
                >
                  Finding Server
                </StepLabel>
              </Step>
              <Step>
                <StepLabel
                  classes={{ label: classNames.stepLabel }}
                  StepIconComponent={StepIcon}
                >
                  Serve in Progress
                </StepLabel>
              </Step>
              <Step>
                <StepLabel
                  classes={{ label: classNames.stepLabel }}
                  StepIconComponent={StepIcon}
                >
                  Serve Complete
                </StepLabel>
              </Step>
            </Stepper>
          </Paper>
        </Grid>
        {data?.job && userId && isComplete ? (
          <Grid item xs={12}>
            <RateCard job={data.job} currentUserId={userId} onRated={refetch} />
          </Grid>
        ) : null}
        <Grid item xs={12} sm={12} md={6}>
          <Grid container spacing={2} direction='column'>
            <Grid item>
              <Card>
                <CardMedia>
                  {data?.job?.target_address ? (
                    <Map {...data?.job.target_address} />
                  ) : null}
                </CardMedia>
                <Divider />
                <CardContent>
                  <Typography variant='h5' className={classNames.heading}>
                    Target
                  </Typography>
                  <Typography variant='h6'>{data?.job?.target_name}</Typography>
                  {data?.job?.target_address ? (
                    <Address
                      {...data?.job.target_address}
                      typeVariant='body1'
                    />
                  ) : null}
                </CardContent>
                <Divider />
                <CardContent>
                  <Stack spacing={3}>
                    {data?.job?.plan ? (
                      <div>
                        <Typography variant='h5' className={classNames.heading}>
                          Serve Type
                        </Typography>
                        <Typography variant='body1'>
                          {data.job.plan.name}
                        </Typography>
                      </div>
                    ) : null}
                    {dueDate ? (
                      <div>
                        <Typography variant='h5' className={classNames.heading}>
                          Due Date
                        </Typography>
                        <Typography variant='body1'>
                          {`${dueDate?.format(DATE_FORMAT_LONG)} `}
                          <Typography variant='body2' component='span'>
                            {`${dueDate?.fromNow()}`}
                          </Typography>
                        </Typography>
                      </div>
                    ) : null}
                    {data?.job?.plan ? (
                      <div>
                        <Typography variant='h5' className={classNames.heading}>
                          Attempts
                        </Typography>
                        <Typography variant='body1'>
                          {`${data.job.attempts.length}/${data.job.plan.attempts}`}
                        </Typography>
                      </div>
                    ) : null}
                  </Stack>
                </CardContent>
                <Divider />
                <CardContent>
                  {data?.job?.server ? (
                    <>
                      <Typography variant='h5' className={classNames.heading}>
                        Server
                      </Typography>
                      <Typography variant='body1'>
                        {data.job.server.name}
                      </Typography>
                    </>
                  ) : (
                    <Typography variant='body1'>
                      No server assigned yet.
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Grid container spacing={2} direction='column'>
            <Grid item>
              <Paper>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align='center'>Attempt</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell align='center'>Image</TableCell>
                      <TableCell align='center'>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  {(data?.job?.attempts.length || 0) === 0 ? (
                    <TableRow>
                      <TableCell colSpan={2}>No Attempts made yet.</TableCell>
                    </TableRow>
                  ) : (
                    data?.job?.attempts.map((attempt, index) => (
                      <TableRow>
                        <TableCell align='center'>
                          <Typography variant='body1'>{index + 1}</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant='body1'>
                            {moment(attempt.attempted_at).format(
                              DATETIME_FORMAT_LONG,
                            )}
                          </Typography>
                          {attempt.notes ? (
                            <Typography variant='body2'>
                              {attempt.notes}
                            </Typography>
                          ) : null}
                        </TableCell>
                        <TableCell align='center'>
                          {attempt.image_url ? (
                            <Button href={attempt.image_url} target='_blank'>
                              View
                            </Button>
                          ) : null}
                        </TableCell>
                        <TableCell align='center'>
                          {attempt.success ? (
                            <CheckCircleOutlined
                              className={classNames.successIcon}
                              fontSize='large'
                            />
                          ) : (
                            <HighlightOffOutlined
                              color='error'
                              fontSize='large'
                            />
                          )}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </Table>
              </Paper>
            </Grid>
            <Grid item>
              {data?.job?.pickup_required && data.job.pickup_address ? (
                <Card>
                  <CardContent>
                    <Typography variant='h5' className={classNames.heading}>
                      Document Pickup Location
                    </Typography>
                    <Address {...data.job.pickup_address} typeVariant='body1' />
                  </CardContent>
                  <Divider />
                  <CardActions>
                    <Button
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeLocation(
                        data.job.pickup_address,
                      )}`}
                      target='_blank'
                    >
                      View Map
                    </Button>
                  </CardActions>
                </Card>
              ) : (
                <Paper>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Document</TableCell>
                        <TableCell align='center'>Download</TableCell>
                      </TableRow>
                    </TableHead>
                    {data?.job?.documents.map((document) => (
                      <TableRow key={document.id}>
                        <TableCell>{document.title}</TableCell>
                        <TableCell align='center'>
                          <Button href={document.url!} target='_blank'>
                            Download
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </Table>
                </Paper>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </JobDetailsPage>
  )
}
