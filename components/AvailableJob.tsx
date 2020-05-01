import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  makeStyles,
  Typography,
} from '@material-ui/core'
import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'
import {
  AvailableJobJobFragment,
  useClaimJobMutation,
} from '../graphql-codegen'
import { DATE_FORMAT_LONG } from '../lib/constants'
import { jobDueDate } from '../lib/jobUtils'
import { Address } from './Address'
import { Map } from './Map'

export const useStyles = makeStyles((theme) => ({
  heading: {
    marginBottom: theme.spacing(1),
  },
  map: {
    height: '100%',
    width: '100%',
  },
}))

interface AvailableJobProps {
  job: AvailableJobJobFragment
}

export function AvailableJob({ job }: AvailableJobProps) {
  const router = useRouter()
  const classNames = useStyles()
  const dueDate = useMemo(
    () => jobDueDate(job as Required<AvailableJobJobFragment>),
    [job],
  )

  const [claimJob, { loading }] = useClaimJobMutation({
    variables: { jobId: job.id },
  })
  const handleClaimClick = useCallback(async () => {
    await claimJob()
    router.push(`/jobs/${job.id}`)
  }, [claimJob, job, router])

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

        <Button onClick={() => router.push(`/jobs/available/${job.id}`)}>
          View
        </Button>
      </CardActions>
    </Card>
  )
}
