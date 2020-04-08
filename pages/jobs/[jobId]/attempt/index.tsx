import {
  Box,
  Breadcrumbs,
  Grid,
  Link as MuiLink,
  Paper,
  Typography,
} from '@material-ui/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { Page } from '../../../../components/Page'
import { useJobAttemptQuery } from '../../../../graphql-codegen'
import { useAuth } from '../../../../lib/useAuth'
import { useAuthRequired } from '../../../../lib/useAuthRequired'

export default function JobDetailsPage() {
  useAuthRequired()
  const router = useRouter()
  const { jobId } = router.query
  const { userId } = useAuth()
  const { data } = useJobAttemptQuery({ variables: { jobId, userId } })

  const job = useMemo(() => data?.jobs_by_pk, [data])

  return (
    <Page>
      <Box mb={4}>
        <Paper>
          <Box p={2}>
            <Grid container justify='space-between'>
              <Grid item>
                <Breadcrumbs aria-label='breadcrumb'>
                  <Link href='/jobs' passHref>
                    <MuiLink color='inherit'>Jobs</MuiLink>
                  </Link>
                  <Link href={`/jobs/${job?.id}`} passHref>
                    <MuiLink color='inherit'>{job?.id}</MuiLink>
                  </Link>
                  <Typography color='textPrimary'>Record Attempt</Typography>
                </Breadcrumbs>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </Page>
  )
}
