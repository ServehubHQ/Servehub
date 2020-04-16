import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { CreateJobPage } from '../../../components/CreateJobPage'
import { useInsertJobMutation } from '../../../graphql-codegen'
import { CircularProgress } from '@material-ui/core'

export default function JobsCreateTargetPage() {
  const router = useRouter()
  const [insertJob, { loading }] = useInsertJobMutation()

  useEffect(() => {
    ;(async () => {
      const { data } = await insertJob()
      router.push(
        `/jobs/create/target?id=${data?.insert_jobs?.returning[0].id}`,
      )
    })()
  }, [insertJob, router])

  return (
    <CreateJobPage activeStep={0} title='Initializing' loading={loading}>
      <CircularProgress />
    </CreateJobPage>
  )
}
