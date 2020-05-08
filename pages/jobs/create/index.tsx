import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { CreateJobPage } from '../../../components/CreateJobPage'
import { Inline } from '../../../components/Inline'
import { useInsertJobMutation } from '../../../graphql-codegen'
import { CircularProgress, CardContent } from '@material-ui/core'

export default function JobsCreateTargetPage() {
  const router = useRouter()
  const [insertJob, { loading }] = useInsertJobMutation()

  useEffect(() => {
    ;(async () => {
      const { data } = await insertJob()
      const jobId = data?.insert_jobs?.returning?.[0].id
      if (!jobId) {
        throw new Error('Unable to retrieve jobId from mutation')
      }
      router.push(`/jobs/create/target?id=${jobId}`)
    })()
  }, [insertJob, router])

  return (
    <CreateJobPage activeStep={0} title='Initializing' loading={loading}>
      <CardContent>
        <Inline align='center'>
          <CircularProgress />
        </Inline>
      </CardContent>
    </CreateJobPage>
  )
}
