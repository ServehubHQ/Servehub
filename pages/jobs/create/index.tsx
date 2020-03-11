import { Box, Paper, Typography } from '@material-ui/core'
import { useRouter } from 'next/router'
import { CreateJobSteps } from '../../../components/CreateJobSteps'
import { Page } from '../../../components/Page'
import { useInsertJobMutation } from '../../../graphql.gen'
import { useEffect } from 'react'

export default function JobsCreateTargetPage() {
  const router = useRouter()
  const [insertJob] = useInsertJobMutation()

  useEffect(() => {
    ;(async () => {
      const { data } = await insertJob()
      router.push(
        `/jobs/create/target?id=${data?.insert_jobs?.returning[0].id}`,
      )
    })()
  }, [insertJob, router])

  return (
    <Page>
      <Paper>
        <Box p={2}>
          <Typography component='h1' variant='h5'>
            Create Job
          </Typography>

          <CreateJobSteps activeStep={1} />
        </Box>
      </Paper>
    </Page>
  )
}
