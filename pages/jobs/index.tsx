import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core'
import Link from 'next/link'
import { JobMap } from '../../components/JobMap'
import { Page } from '../../components/Page'
import { useJobsListQuery } from '../../graphql-codegen'
import { useAuthRequired } from '../../lib/useAuthRequired'

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

export default function JobListPage() {
  useAuthRequired()
  const styles = useStyles()
  const { data, loading } = useJobsListQuery()
  console.log('query', { loading, data })

  return (
    <Page>
      <Box mb={4}>
        <Paper elevation={2}>
          <Box p={2}>
            <Breadcrumbs aria-label='breadcrumb'>
              <Typography color='textPrimary'>Jobs</Typography>
            </Breadcrumbs>
          </Box>
        </Paper>
      </Box>

      {data?.jobs.map((job) => (
        <Box key={job.id} mb={2}>
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
                </CardContent>
                <CardActions>
                  <Link href={`/jobs/${job.id}`} passHref>
                    <Button>View Details</Button>
                  </Link>
                </CardActions>
              </Grid>
              <Grid item sm={6} lg={8}>
                <CardMedia className={styles.map}>
                  {job.target ? <JobMap target={job.target} /> : null}
                </CardMedia>
              </Grid>
            </Grid>
          </Card>
        </Box>
      ))}
    </Page>
  )
}
