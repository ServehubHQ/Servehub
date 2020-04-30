import {
  Grid,
  ListItemText,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core'
import {
  AccessTimeOutlined,
  CheckCircleOutlined,
  HighlightOffOutlined,
} from '@material-ui/icons'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'
import { Address } from '../../components/Address'
import { Heading } from '../../components/Heading'
import { Page } from '../../components/Page'
import { JobsListJobFragment, useJobsListQuery } from '../../graphql-codegen'
import { jobDueDate, jobIsFailed, jobIsSuccessful } from '../../lib/jobUtils'
import { useAuth } from '../../lib/useAuth'
import { useAuthRequired } from '../../lib/useAuthRequired'
import { DATE_FORMAT_LONG } from '../../lib/constants'
import { JobStatusIcon } from '../../components/JobStatusIcon'

const useStyles = makeStyles((theme) => ({
  tableHead: {
    backgroundColor: theme.palette.grey[800],
  },
  tableHeadCell: {
    color: theme.palette.getContrastText(theme.palette.grey[800]),
  },
  hideOnXs: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  hideOnSm: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  row: {
    cursor: 'pointer',
  },
}))

export default function JobListPage() {
  useAuthRequired()
  const classNames = useStyles()
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
              <TableHead className={classNames.tableHead}>
                <TableRow>
                  <TableCell className={classNames.tableHeadCell}>
                    Status
                  </TableCell>
                  <TableCell className={classNames.tableHeadCell}>
                    Target
                  </TableCell>
                  <TableCell
                    className={clsx(
                      classNames.tableHeadCell,
                      classNames.hideOnXs,
                    )}
                  >
                    Location
                  </TableCell>
                  <TableCell className={classNames.tableHeadCell}>
                    Due Date
                  </TableCell>
                  <TableCell
                    className={clsx(
                      classNames.tableHeadCell,
                      classNames.hideOnXs,
                      classNames.hideOnSm,
                    )}
                  >
                    Attempts
                  </TableCell>
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
  const classNames = useStyles()

  const dueDate = useMemo(() => jobDueDate(job), [job])
  const isFailed = useMemo(() => jobIsFailed(job), [job])
  const isSuccessful = useMemo(() => jobIsSuccessful(job), [job])

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
      className={classNames.row}
    >
      <TableCell>
        <JobStatusIcon job={job} />
      </TableCell>
      <TableCell>
        <ListItemText
          primary={job.target_name}
          primaryTypographyProps={{ variant: 'h6' }}
          secondary={job.case_number ? `#${job.case_number}` : null}
        />
      </TableCell>
      <TableCell className={clsx(classNames.hideOnXs, classNames.hideOnSm)}>
        {job.target_address ? (
          <Address {...job.target_address} highlightStreet />
        ) : null}
      </TableCell>
      <TableCell>
        {isSuccessful || isFailed ? (
          <ListItemText
            primary={dueDate?.format(DATE_FORMAT_LONG)}
            primaryTypographyProps={{ variant: 'h6' }}
            secondary={dueDate?.fromNow()}
          />
        ) : dueDate ? (
          <ListItemText
            primary={dueDate.format(DATE_FORMAT_LONG)}
            primaryTypographyProps={{ variant: 'h6' }}
            secondary={dueDate.fromNow()}
          />
        ) : null}
      </TableCell>
      <TableCell className={clsx(classNames.hideOnXs)}>
        <Typography variant='h6' component='p'>
          {`${job.attempts.length}/${job.plan?.attempts || 0}`}
        </Typography>
      </TableCell>
    </TableRow>
  )
}
