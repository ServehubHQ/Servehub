import { Box, Paper, Typography } from '@material-ui/core'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { CreateJobSteps } from '../../../components/CreateJobSteps'
import { Page } from '../../../components/Page'
import { useInsertJobMutation } from '../../../graphql-codegen'

export default function JobsCreateTargetPage() {
  const router = useRouter()
  const [insertJob] = useInsertJobMutation()

  useEffect(() => {
    ;(async () => {
      const { data } = await insertJob()
      console.log('created job', data)
      const next = `/jobs/create/target?id=${data?.insert_jobs?.returning[0].id}`
      console.log('routing to', next)
      router.push(next)
    })()
  }, [insertJob, router])

  return (
    <Page>
      <Paper>
        <Box p={2}>
          <Typography component='h1' variant='h5'>
            Create Job
          </Typography>

          <CreateJobSteps activeStep={0} />
        </Box>
      </Paper>
    </Page>
  )
}
