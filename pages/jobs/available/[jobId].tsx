import { Box, Link as MuiLink, makeStyles } from '@material-ui/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AvailableJob } from '../../../components/AvailableJob'
import { Heading } from '../../../components/Heading'
import { Page } from '../../../components/Page'
import { Stack } from '../../../components/Stack'
import { useJobsAvailableJobQuery } from '../../../graphql-codegen'
import { useAuthRequired } from '../../../lib/useAuthRequired'

export const useStyles = makeStyles((theme) => ({
  cardContainer: {
    [theme.breakpoints.up('md')]: {
      maxWidth: 768,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
}))

export default function JobsAvailableJobPage() {
  useAuthRequired()
  const router = useRouter()
  const { jobId } = router.query
  const classNames = useStyles()
  const { data } = useJobsAvailableJobQuery({ variables: { jobId } })
  console.log(data)
  return (
    <Page query={data} title='Jobs Available'>
      <Box mb={4}>
        <Heading
          title={data?.available_jobs[0]?.target_name || 'Job'}
          breadcrumbs={[
            <Link href='/jobs' passHref key='jobs'>
              <MuiLink color='inherit'>Jobs</MuiLink>
            </Link>,
            <Link href='/jobs/available' passHref key='jobs'>
              <MuiLink color='inherit'>Available</MuiLink>
            </Link>,
          ]}
        />
      </Box>
      <Stack spacing={3} className={classNames.cardContainer}>
        {data?.available_jobs.map((job) => (
          <AvailableJob key={job.id} job={job} />
        ))}
      </Stack>
    </Page>
  )
}
