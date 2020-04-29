import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Link as MuiLink,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core'
import Link from 'next/link'
import { useMemo, useCallback } from 'react'
import { Address } from '../../../components/Address'
import { Heading } from '../../../components/Heading'
import { Map } from '../../../components/Map'
import { Page } from '../../../components/Page'
import { Stack } from '../../../components/Stack'
import {
  JobsAvailableQuery,
  useJobsAvailableQuery,
  useClaimJobMutation,
} from '../../../graphql-codegen'
import { jobDueDate } from '../../../lib/jobUtils'
import { useAuthRequired } from '../../../lib/useAuthRequired'

export const useStyles = makeStyles((theme) => ({
  map: {
    height: '100%',
    width: '100%',
  },
  mapEmbed: {
    border: 0,
    height: '100%',
    width: '100%',
  },
}))

export default function JobsAvailablePage() {
  useAuthRequired()
  const { data } = useJobsAvailableQuery()

  return (
    <Page query={data} title='Available Jobs'>
      <Box mb={4}>
        <Heading
          title='Available Jobs'
          breadcrumbs={[
            <Link href='/jobs' passHref key='jobs'>
              <MuiLink color='inherit'>Jobs</MuiLink>
            </Link>,
          ]}
        />
      </Box>
      <Stack>
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
  const styles = useStyles()
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
      <CardContent>
        <ListItemText
          primary={`Due ${dueDate?.fromNow()}`}
          primaryTypographyProps={{ variant: 'h6' }}
          secondary={`${job.plan?.attempts} attemp${
            job.plan?.attempts === 1 ? '' : 's'
          } required`}
        />
      </CardContent>
      <Divider />
      {job.pickup_required && job.pickup_address ? (
        <CardContent>
          <Typography variant='h5'>Pickup Required</Typography>
          <Address {...job.pickup_address} />
        </CardContent>
      ) : (
        <CardContent>
          <Typography variant='h5'>Printing Required</Typography>
        </CardContent>
      )}
      <Divider />
      <CardContent>
        <Typography variant='h5'>Target</Typography>
        {job?.target_address ? <Address {...job.target_address} /> : null}
      </CardContent>
      <Divider />
      <CardMedia className={styles.map}>
        {job.target_address ? <Map {...job.target_address} /> : null}
      </CardMedia>
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
