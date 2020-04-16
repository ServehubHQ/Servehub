import {
  Box,
  Button,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Grid,
} from '@material-ui/core'
import { CheckCircle, Error } from '@material-ui/icons'
import Link from 'next/link'
import { useMemo, useCallback } from 'react'
import { Heading } from '../../components/Heading'
import { Page } from '../../components/Page'
import { useJobsListQuery } from '../../graphql-codegen'
import { useAuth } from '../../lib/useAuth'
import { useAuthRequired } from '../../lib/useAuthRequired'
import { useRouter } from 'next/router'
import { Address } from '../../components/Address'

const useStyles = makeStyles((theme) => ({
  successIcon: {
    fill: theme.palette.success.main,
  },
  row: {
    cursor: 'pointer',
  },
}))

export default function JobListPage() {
  useAuthRequired()
  const router = useRouter()
  const styles = useStyles()
  const { userId, role } = useAuth()
  const { data } = useJobsListQuery({
    variables: { userId, isLawyer: role === 'lawyer' },
  })

  const jobs = useMemo(
    () => (role === 'lawyer' ? data?.lawyerJobs : data?.serverJobs),
    [data, role],
  )

  const handleJobClick = useCallback(
    (jobId: string) => () => {
      router.push(`/jobs/${jobId}`)
    },
    [router],
  )

  return (
    <Page currentUser={data?.users[0]} title='Jobs'>
      <Grid container spacing={2} direction='column'>
        <Grid item>
          <Heading
            title='Jobs'
            action={
              role === 'server' ? (
                <Link href='/jobs/available' passHref>
                  <Button variant='contained' color='primary'>
                    Available Jobs
                  </Button>
                </Link>
              ) : (
                <Link href='/jobs/create' passHref>
                  <Button variant='contained' color='primary'>
                    New Job
                  </Button>
                </Link>
              )
            }
          />
        </Grid>
        <Grid item>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Target Name</TableCell>
                  <TableCell>Delivered</TableCell>
                  <TableCell>Attempts</TableCell>
                  <TableCell>Documents</TableCell>
                  <TableCell>Location</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {jobs?.map((job) => (
                  <TableRow
                    key={job.id}
                    hover
                    onClick={handleJobClick(job.id)}
                    className={styles.row}
                  >
                    <TableCell>{job.target?.name}</TableCell>
                    <TableCell>
                      {(job.successfulAttempts.aggregate?.count || 0) > 0 ? (
                        <CheckCircle className={styles.successIcon} />
                      ) : (
                        <Error color='disabled' />
                      )}
                    </TableCell>
                    <TableCell>{job.allAttempts.aggregate?.count}</TableCell>
                    <TableCell>
                      {job.pickup_required
                        ? 'Pickup'
                        : job.documents_aggregate.aggregate?.count}
                    </TableCell>
                    <TableCell>
                      {job.target ? <Address address={job.target} /> : null}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </Page>
  )
}
