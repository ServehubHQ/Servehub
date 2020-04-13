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
} from '@material-ui/core'
import Link from 'next/link'
import { JobCardJobFragment } from '../graphql-codegen'
import { Map } from './Map'

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
          <CardContent>
            <Typography variant='h6' component='h2'>
              {job.target?.name}
            </Typography>
            <Typography variant='subtitle1' color='textSecondary'>
              Target
            </Typography>
            <Typography variant='h6' component='h2'>
              {job.server?.id ? 'True' : 'False'}
            </Typography>
            <Typography variant='subtitle1' color='textSecondary'>
              Assigned
            </Typography>
          </CardContent>
          <CardActions>
            <Link href={`/jobs/${job.id}`} passHref>
              <Button>View Details</Button>
            </Link>
          </CardActions>
        </Grid>
        <Grid item sm={6} lg={8}>
          <CardMedia className={styles.map}>
            {job.target ? <Map {...job.target} /> : null}
          </CardMedia>
        </Grid>
      </Grid>
    </Card>
  )
}
