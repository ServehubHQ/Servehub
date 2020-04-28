import {
  Grid,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  ListItemText,
} from '@material-ui/core'
import { CheckCircle, Error } from '@material-ui/icons'
import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'
import { Address } from '../../components/Address'
import { Heading } from '../../components/Heading'
import { Page } from '../../components/Page'
import { useJobsListQuery, JobsListJobFragment } from '../../graphql-codegen'
import { useAuth } from '../../lib/useAuth'
import { useAuthRequired } from '../../lib/useAuthRequired'
import { jobDueDate, jobIsFailed, jobIsSuccessful } from '../../lib/jobUtils'
import { Inline } from '../../components/Inline'
import { Stack } from '../../components/Stack'

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
  const { userId, role } = useAuth()
  const { data } = useJobsListQuery({
    variables: { userId, isLawyer: role === 'lawyer' },
  })

  const jobs = useMemo(
    () => (role === 'lawyer' ? data?.lawyerJobs : data?.serverJobs),
    [data, role],
  )

  return (
    <Page query={data} title='Jobs'>
      <Grid container spacing={2} direction='column'>
        <Grid item>
          <Heading title='Jobs' />
        </Grid>
        <Grid item>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Target</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Address</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {jobs?.map((job) => (
                  <JobRow key={job.id} job={job} />
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </Page>
  )
}

interface JobRowProps {
  job: JobsListJobFragment
}

function JobRow({ job }: JobRowProps) {
  const router = useRouter()
  const styles = useStyles()

  const dueDate = useMemo(() => jobDueDate(job), [job])
  const isFailed = useMemo(() => jobIsFailed(job), [job])
  const isSuccessful = useMemo(() => jobIsSuccessful(job), [job])
  const attemptsRemaining = useMemo(
    () => (job.plan?.attempts || 0) - job.attempts.length,
    [job],
  )
  const attemptsCopy = useMemo(
    () =>
      `${job.attempts.length} attemp${job.attempts.length === 1 ? '' : 's'}`,
    [job],
  )

  const handleJobClick = useCallback(
    (jobId: string) => () => {
      router.push(`/jobs/${jobId}`)
    },
    [router],
  )

  return (
    <TableRow
      key={job.id}
      hover
      onClick={handleJobClick(job.id)}
      className={styles.row}
    >
      <TableCell>
        <ListItemText
          primary={job.target_name}
          primaryTypographyProps={{ variant: 'h6' }}
          secondary={job.case_number ? `#${job.case_number}` : null}
        />
      </TableCell>
      <TableCell>
        {isSuccessful ? (
          <ListItemText
            primary='Job Successful'
            primaryTypographyProps={{ variant: 'h6' }}
            secondary={`After ${attemptsCopy}`}
          />
        ) : isFailed ? (
          <ListItemText
            primary='Job Unsuccessful'
            primaryTypographyProps={{ variant: 'h6' }}
            secondary={`${attemptsCopy} made`}
          />
        ) : (
          <ListItemText
            primary={`Due ${dueDate?.fromNow()}`}
            primaryTypographyProps={{ variant: 'h6' }}
            secondary={`${attemptsRemaining} attempt${
              attemptsRemaining === 1 ? '' : 's'
            } remaining`}
          />
        )}
      </TableCell>
      <TableCell>
        {job.target_address ? <Address {...job.target_address} /> : null}
      </TableCell>
    </TableRow>
  )
}
