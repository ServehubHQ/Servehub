import { Box, Link as MuiLink, makeStyles } from '@material-ui/core'
import Link from 'next/link'
import { Heading } from '../../../components/Heading'
import { Page } from '../../../components/Page'
import { Stack } from '../../../components/Stack'
import { AvailableJob } from '../../../components/AvailableJob'
import { useJobsAvailableQuery } from '../../../graphql-codegen'
import { useAuthRequired } from '../../../lib/useAuthRequired'

export const useStyles = makeStyles((theme) => ({
  cardContainer: {
    [theme.breakpoints.up('md')]: {
      maxWidth: 768,
      margin: 'auto',
    },
  },
}))

export default function JobsAvailablePage() {
  useAuthRequired()
  const classNames = useStyles()
  const { data } = useJobsAvailableQuery()

  return (
    <Page query={data} title='Jobs Available'>
      <Box mb={4}>
        <Heading
          title='Available'
          breadcrumbs={[
            <Link href='/jobs' passHref key='jobs'>
              <MuiLink color='inherit'>Jobs</MuiLink>
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
