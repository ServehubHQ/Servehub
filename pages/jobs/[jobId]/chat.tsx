import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { Chat } from '../../../components/Chat'
import { JobDetailsPage } from '../../../components/JobDetailsPage'
import { useJobDetialsQuery } from '../../../graphql-codegen'
import { useAuth } from '../../../lib/useAuth'
import { useAuthRequired } from '../../../lib/useAuthRequired'

export default function JobDetailsChat() {
  useAuthRequired()
  const router = useRouter()
  const { jobId } = router.query
  const { userId } = useAuth()
  const { data } = useJobDetialsQuery({ variables: { jobId, userId } })
  const job = useMemo(() => data?.jobs_by_pk, [data])

  return (
    <JobDetailsPage
      job={data?.jobs_by_pk || undefined}
      currentUser={data?.users[0] || undefined}
      tab='chat'
    >
      {job ? <Chat job={job} /> : null}
    </JobDetailsPage>
  )
}
