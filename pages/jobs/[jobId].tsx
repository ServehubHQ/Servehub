import {
  Box,
  Grid,
  Paper,
  Typography,
  Breadcrumbs,
  Link as MuiLink,
} from '@material-ui/core'
import { CheckBox, CheckBoxOutlineBlank } from '@material-ui/icons'
import { useRouter } from 'next/router'
import { Page } from '../../components/Page'
import { useJobDetialsQuery } from '../../graphql-codegen'
import { useAuthRequired } from '../../lib/useAuthRequired'
import Link from 'next/link'

export default function JobDetailsPage() {
  useAuthRequired()
  const router = useRouter()
  const { jobId } = router.query
  const { data, loading } = useJobDetialsQuery({ variables: { jobId } })
  console.log('query', { loading, data })

  return (
    <Page>
      <Paper>
        <Box p={2}>
          <Box mb={4}>
            <Breadcrumbs aria-label='breadcrumb'>
              <Link href='/jobs' passHref>
                <MuiLink color='inherit'>Jobs</MuiLink>
              </Link>
              <Typography color='textPrimary'>
                {data?.jobs_by_pk?.target?.name}
              </Typography>
            </Breadcrumbs>
          </Box>
          <Grid container>
            <Grid item sm={4}>
              <Typography variant='subtitle1' color='textSecondary'>
                Target
              </Typography>
              <Typography variant='h6' component='h2'>
                {data?.jobs_by_pk?.target?.name}
              </Typography>
            </Grid>
            <Grid item sm={2}>
              <Typography variant='subtitle1' color='textSecondary'>
                Paid
              </Typography>
              <Typography variant='h6' component='h2'>
                {data?.jobs_by_pk?.stripe_payment_intent_succeeded ? (
                  <CheckBox />
                ) : (
                  <CheckBoxOutlineBlank />
                )}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Page>
  )
}
