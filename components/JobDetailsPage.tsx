import {
  Button,
  Grid,
  Link as MuiLink,
  Tab,
  Tabs,
  makeStyles,
} from '@material-ui/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChangeEvent, ReactNode, useCallback } from 'react'
import {
  JobDetailsPageJobFragment,
  JobDetailsPageUserFragment,
  useClaimJobMutation,
} from '../graphql-codegen'
import { useAuth } from '../lib/useAuth'
import { Heading } from './Heading'
import { Page } from './Page'

interface JobDetailsPageProps {
  children: ReactNode
  job?: JobDetailsPageJobFragment
  currentUser?: JobDetailsPageUserFragment
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
  job,
  currentUser,
}: JobDetailsPageProps) {
  const router = useRouter()
  const className = useStyles()
  const { userId, role } = useAuth()
  const [claimJob] = useClaimJobMutation()

  const handleClaimClick = useCallback(async () => {
    if (!job) {
      throw new Error('Job undefined when claiming')
    }
    await claimJob({ variables: { jobId: job.id } })
  }, [claimJob, job])

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
    <Page currentUser={currentUser} title={job?.target?.name || 'Job'}>
      <Grid container spacing={2} direction='column'>
        <Grid item>
          <Heading
            title={job?.target?.name || 'Job'}
            breadcrumbs={[
              <Link href='/jobs' passHref key='jobs'>
                <MuiLink color='inherit'>Jobs</MuiLink>
              </Link>,
            ]}
            action={
              role === 'server' && !job?.server ? (
                <Button
                  variant='contained'
                  color='primary'
                  onClick={handleClaimClick}
                >
                  Claim Job
                </Button>
              ) : job?.server?.id === userId ? (
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
