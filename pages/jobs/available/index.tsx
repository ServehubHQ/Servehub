import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Link as MuiLink,
  makeStyles,
  Typography,
} from '@material-ui/core'
import Link from 'next/link'
import { useCallback, useMemo } from 'react'
import { Address } from '../../../components/Address'
import { Heading } from '../../../components/Heading'
import { Map } from '../../../components/Map'
import { Page } from '../../../components/Page'
import { Stack } from '../../../components/Stack'
import {
  JobsAvailableQuery,
  useClaimJobMutation,
  useJobsAvailableQuery,
} from '../../../graphql-codegen'
import { DATE_FORMAT_LONG } from '../../../lib/constants'
import { jobDueDate } from '../../../lib/jobUtils'
import { useAuthRequired } from '../../../lib/useAuthRequired'

export const useStyles = makeStyles((theme) => ({
  heading: {
    marginBottom: theme.spacing(1),
  },
  map: {
    height: '100%',
    width: '100%',
  },
  cardContainer: {
    maxWidth: 768,
    margin: 'auto',
  },
}))

export default function JobsAvailablePage() {
  useAuthRequired()
  const classNames = useStyles()
  const { data } = useJobsAvailableQuery()

  return (
    <Page query={data} title='Jobs Available'>
      <Box mb={4}>
        <Heading
          title='Available'
          breadcrumbs={[
            <Link href='/jobs' passHref key='jobs'>
              <MuiLink color='inherit'>Jobs</MuiLink>
            </Link>,
          ]}
        />
      </Box>
      <Stack spacing={3} className={classNames.cardContainer}>
        {data?.available_jobs.map((job) => (
          <AvailableJob key={job.id} job={job} />
        ))}
      </Stack>
    </Page>
  )
}

type AvailableJob = JobsAvailableQuery['available_jobs'][0]
interface AvailableJobProps {
  job: AvailableJob
}

function AvailableJob({ job }: AvailableJobProps) {
  const classNames = useStyles()
  const dueDate = useMemo(() => jobDueDate(job as Required<AvailableJob>), [
    job,
  ])

  const [claimJob, { loading }] = useClaimJobMutation({
    variables: { jobId: job.id },
  })
  const handleClaimClick = useCallback(async () => {
    await claimJob()
  }, [claimJob])

  return (
    <Card>
      <CardMedia className={classNames.map}>
        {job.target_address ? <Map {...job.target_address} /> : null}
      </CardMedia>
      <Divider />
      <CardContent>
        <Typography variant='h5' className={classNames.heading}>
          Target Location
        </Typography>
        {job?.target_address ? (
          <Address {...job.target_address} typeVariant='body1' />
        ) : null}
      </CardContent>
      <Divider />
      <CardContent>
        <Typography variant='h5' className={classNames.heading}>
          Due Date
        </Typography>
        <Typography variant='body1'>
          {`${dueDate?.format(DATE_FORMAT_LONG)} `}
          <Typography variant='body2' component='span'>
            {`${dueDate?.fromNow()}`}
          </Typography>
        </Typography>
        <Typography variant='body1'>{`${job.plan?.attempts} attempt${
          job.plan?.attempts === 1 ? '' : 's'
        } required`}</Typography>
      </CardContent>
      <Divider />
      <CardContent>
        <Typography variant='h5' className={classNames.heading}>
          Documents
        </Typography>
        {job.pickup_required && job.pickup_address ? (
          <>
            <Typography variant='body1'>Pickup Required</Typography>
            <Address {...job.pickup_address} typeVariant='body1' />
          </>
        ) : (
          <Typography variant='body1'>Printing Required</Typography>
        )}
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          variant='contained'
          color='primary'
          onClick={handleClaimClick}
          disabled={loading}
        >
          Claim Job
        </Button>
      </CardActions>
    </Card>
  )
}
