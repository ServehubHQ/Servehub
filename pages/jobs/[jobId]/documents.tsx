import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  Grid,
  CardMedia,
} from '@material-ui/core'
import { CloudDownload } from '@material-ui/icons'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { JobDetailsPage } from '../../../components/JobDetailsPage'
import { useJobDetailsDocumentsQuery } from '../../../graphql-codegen'
import { useAuth } from '../../../lib/useAuth'
import { useAuthRequired } from '../../../lib/useAuthRequired'
import { Map } from '../../../components/Map'

// const useStyles = makeStyles((theme) => ({
// }))

export default function JobDetailsDocuments() {
  useAuthRequired()
  // const classNames = useStyles()
  const router = useRouter()
  const { jobId } = router.query
  const { userId } = useAuth()
  const { data } = useJobDetailsDocumentsQuery({ variables: { jobId, userId } })
  const job = useMemo(() => data?.jobs_by_pk, [data])

  return (
    <JobDetailsPage
      job={data?.jobs_by_pk || undefined}
      currentUser={data?.users[0] || undefined}
      tab='documents'
    >
      {job?.pickup_required ? (
        <Card>
          <CardHeader title='Pickup Required' />
          <Divider />
          <CardContent>
            <Typography component='address'>
              {job.pickup_unit
                ? `${job.pickup_street}, ${job.pickup_unit}`
                : job.pickup_street}
              <br />
              {`${job.pickup_city}, ${job.pickup_province}`}
              <br />
              {job.pickup_postal_code}
            </Typography>
          </CardContent>
          <Divider />
          <CardMedia>
            <Map
              street={job.pickup_street!}
              unit={job.pickup_unit!}
              postalCode={job.pickup_postal_code!}
              city={job.pickup_city!}
              province={job.pickup_province!}
            />
          </CardMedia>
        </Card>
      ) : (
        <Grid container spacing={2} direction='column'>
          {job?.documents.map((document) => (
            <Grid item key={document.id}>
              <Card>
                <CardHeader title={document.title} />
                <Divider />
                <CardActions>
                  <Button startIcon={<CloudDownload />}>Download</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </JobDetailsPage>
  )
}
