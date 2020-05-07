import {
  Button,
  Grid,
  Link as MuiLink,
  makeStyles,
  Snackbar,
  Tab,
  Tabs,
  Typography,
  IconButton,
} from '@material-ui/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChangeEvent, ReactNode, useCallback, useMemo, useState } from 'react'
import {
  JobDetailsPageJobFragment,
  JobDetailsPageQueryFragment,
  useSendMessageMutation,
} from '../graphql-codegen'
import { useAuth } from '../lib/useAuth'
import { Heading } from './Heading'
import { Inline } from './Inline'
import { Page } from './Page'
import { Close } from '@material-ui/icons'

interface JobDetailsPageProps {
  children: ReactNode
  refetch: () => Promise<any>
  query?: JobDetailsPageQueryFragment
  job?: JobDetailsPageJobFragment | null
  tab?: string
  unreadMessageCount?: number
}

const useStyles = makeStyles((theme) => ({
  tabContent: {
    flex: 1,
  },
  badge: {
    backgroundColor: theme.palette.success.dark,
    color: theme.palette.getContrastText(theme.palette.success.dark),
    borderRadius: '50%',
    minWidth: 24,
  },
}))

export function JobDetailsPage({
  children,
  tab = 'index',
  refetch,
  job,
  query,
  unreadMessageCount = 0,
}: JobDetailsPageProps) {
  const router = useRouter()
  const classNames = useStyles()
  const { userId } = useAuth()
  const [
    sendMessage,
    { loading: sendMessageLoading },
  ] = useSendMessageMutation()
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null)

  const complete = useMemo(
    () => job?.attempts.some((attempt) => attempt.success),
    [job],
  )

  const handleSnackbarClose = useCallback(() => {
    setSnackbarMessage(null)
  }, [setSnackbarMessage])

  const handleTabsChange = useCallback(
    (event: ChangeEvent<{}>, newTab: string) => {
      if (!job) {
        throw new Error('Job undefined when tab changing')
      }
      let path = `/jobs/${job.id}`
      if (newTab !== 'index') {
        path += `/${newTab}`
      }
      router.push(path)
    },
    [router, job],
  )

  const handleRequestUpdate = useCallback(async () => {
    if (!job) {
      console.error('Cannot request an update for a missing job')
      return
    }
    await sendMessage({
      variables: {
        jobId: job.id,
        message: 'Please provide an update on the current status of the job.',
      },
    })
    setSnackbarMessage('Request sent')
  }, [sendMessage, job])

  return (
    <Page query={query} title={job?.target_name || 'Job'}>
      <Snackbar
        open={snackbarMessage !== null}
        onClose={handleSnackbarClose}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        message={snackbarMessage}
        action={
          <IconButton
            size='small'
            aria-label='close'
            color='inherit'
            onClick={handleSnackbarClose}
          >
            <Close fontSize='small' />
          </IconButton>
        }
      />
      <Grid container spacing={2} direction='column'>
        <Grid item>
          <Heading
            title={
              <>
                {tab === 'index'
                  ? job?.target_name || 'Job'
                  : tab === 'chat'
                  ? 'Chat'
                  : ''}
                {job?.case_number ? (
                  <Typography
                    component='span'
                    variant='subtitle1'
                    color='textSecondary'
                  >
                    {` #${job?.case_number}`}
                  </Typography>
                ) : null}
              </>
            }
            breadcrumbs={[
              <Link href='/jobs' passHref key='jobs'>
                <MuiLink color='inherit'>Jobs</MuiLink>
              </Link>,
              tab !== 'index' ? (
                <Link href={`/jobs/${job?.id}`} passHref key='jobs'>
                  <MuiLink color='inherit'>{job?.target_name || 'Job'}</MuiLink>
                </Link>
              ) : null,
            ]}
            action={
              !complete && job?.server?.id === userId ? (
                <Link href={`/jobs/${job?.id}/attempt`} passHref>
                  <Button variant='contained' color='primary'>
                    Record Attempt
                  </Button>
                </Link>
              ) : !complete && typeof job?.server?.id !== 'undefined' ? (
                <Button
                  variant='contained'
                  color='primary'
                  onClick={handleRequestUpdate}
                  disabled={sendMessageLoading}
                >
                  Request Update
                </Button>
              ) : null
            }
          />
        </Grid>
        <Grid item>
          <Tabs
            onChange={handleTabsChange}
            value={tab}
            scrollButtons='auto'
            variant='scrollable'
          >
            <Tab label='Details' value='index' />
            <Tab
              label={
                <Inline align='center' spacing={1}>
                  Chat
                  {unreadMessageCount > 0 ? (
                    <div className={classNames.badge}>{unreadMessageCount}</div>
                  ) : null}
                </Inline>
              }
              value='chat'
            />
          </Tabs>
        </Grid>
        <Grid item className={classNames.tabContent}>
          {children}
        </Grid>
      </Grid>
    </Page>
  )
}
