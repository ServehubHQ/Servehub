import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Heading } from '../components/Heading'
import { Page } from '../components/Page'
import { usePendingApprovalQuery } from '../graphql-codegen'
import { useAuth } from '../lib/useAuth'
import { useAuthRequired } from '../lib/useAuthRequired'

export default function PendingApprovalPage() {
  useAuthRequired()
  const router = useRouter()
  const { userId } = useAuth()
  const { data } = usePendingApprovalQuery({
    variables: { userId },
  })

  useEffect(() => {
    if (data?.users[0].approved) {
      router.push('/jobs')
    }
  }, [router, data])

  return (
    <Page currentUser={data?.users[0]}>
      <Heading title='Pending Approval' />
    </Page>
  )
}
