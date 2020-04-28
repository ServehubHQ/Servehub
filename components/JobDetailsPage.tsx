import {
  Button,
  Grid,
  Link as MuiLink,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChangeEvent, ReactNode, useCallback, useMemo } from 'react'
import {
  JobDetailsPageJobFragment,
  JobDetailsPageQueryFragment,
} from '../graphql-codegen'
import { useAuth } from '../lib/useAuth'
import { Heading } from './Heading'
import { Page } from './Page'

interface JobDetailsPageProps {
  children: ReactNode
  refetch: () => Promise<any>
  query?: JobDetailsPageQueryFragment
  job?: JobDetailsPageJobFragment | null
  tab?: string
}

const useStyles = makeStyles((theme) => ({
  tabContent: {
    flex: 1,
  },
}))

export function JobDetailsPage({
  children,
  tab = 'index',
  refetch,
  job,
  query,
}: JobDetailsPageProps) {
  const router = useRouter()
  const className = useStyles()
  const { userId } = useAuth()

  const complete = useMemo(
    () => job?.attempts.some((attempt) => attempt.success),
    [job],
  )

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

  return (
    <Page query={query} title={job?.target_name || 'Job'}>
      <Grid container spacing={2} direction='column'>
        <Grid item>
          <Heading
            title={
              <>
                {tab === 'index'
                  ? job?.target_name || 'Job'
                  : tab === 'documents'
                  ? 'Documents'
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
            <Tab label='Documents' value='documents' />
            <Tab label='Chat' value='chat' />
          </Tabs>
        </Grid>
        <Grid item className={className.tabContent}>
          {children}
        </Grid>
      </Grid>
    </Page>
  )
}
