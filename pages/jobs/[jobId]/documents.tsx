import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
} from '@material-ui/core'
import { CloudDownload } from '@material-ui/icons'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { Address } from '../../../components/Address'
import { JobDetailsPage } from '../../../components/JobDetailsPage'
import { Map } from '../../../components/Map'
import { useJobDetailsDocumentsQuery } from '../../../graphql-codegen'
import { useAuth } from '../../../lib/useAuth'
import { useAuthRequired } from '../../../lib/useAuthRequired'

export default function JobDetailsDocuments() {
  useAuthRequired()
  const router = useRouter()
  const { jobId } = router.query
  const { userId } = useAuth()
  const { data, refetch } = useJobDetailsDocumentsQuery({
    variables: { jobId, userId },
  })
  const job = useMemo(() => data?.jobs_by_pk, [data])

  return (
    <JobDetailsPage
      job={data?.jobs_by_pk}
      query={data}
      tab='documents'
      refetch={refetch}
    >
      {job?.pickup_required ? (
        <Card>
          <CardHeader title='Pickup Required' />
          <Divider />
          <CardContent>
            {job.pickup_address ? <Address {...job.pickup_address} /> : null}
          </CardContent>
          <Divider />
          <CardMedia>
            {job.pickup_address ? <Map {...job.pickup_address} /> : null}
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
                  <Button startIcon={<CloudDownload color='primary' />}>
                    Download
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </JobDetailsPage>
  )
}
