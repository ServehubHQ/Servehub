import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
  Divider,
} from '@material-ui/core'
import Link from 'next/link'
import { JobCardJobFragment } from '../graphql-codegen'
import { Map } from './Map'
import { Stack } from './Stack'
import { Address } from './Address'

interface JobCardProps {
  job: JobCardJobFragment
}

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

export default function JobCard({ job }: JobCardProps) {
  const styles = useStyles()

  return (
    <Card>
      <Grid container>
        <Grid item sm={6} lg={4}>
          <CardHeader title='Job' />
          <Divider />
          <CardContent>
            <Stack>
              <div>
                <Typography variant='subtitle1' color='textSecondary'>
                  Target
                </Typography>
                <Typography variant='h6' component='h2'>
                  {job.target_name}
                </Typography>
              </div>
              <div>
                <Typography variant='subtitle1' color='textSecondary'>
                  Status
                </Typography>
                <Typography variant='h6' component='h2'>
                  {job.server?.id ? 'Assigned' : 'Available'}
                </Typography>
              </div>
              <div>
                <Typography variant='subtitle1' color='textSecondary'>
                  Address
                </Typography>
                <Typography variant='h6' component='h2'>
                  {job?.target_address ? (
                    <Address {...job.target_address} />
                  ) : null}
                </Typography>
              </div>
            </Stack>
          </CardContent>
          <Divider />
          <CardActions>
            <Link href={`/jobs/${job.id}`} passHref>
              <Button>View Details</Button>
            </Link>
          </CardActions>
        </Grid>
        <Grid item sm={6} lg={8}>
          <CardMedia className={styles.map}>
            {job.target_address ? <Map {...job.target_address} /> : null}
          </CardMedia>
        </Grid>
      </Grid>
    </Card>
  )
}
