import { Heading } from '../components/Heading'
import { Page } from '../components/Page'
import { usePendingApprovalQuery } from '../graphql-codegen'
import { useAuth } from '../lib/useAuth'

export default function PendingApprovalPage() {
  const { userId } = useAuth()
  const { data } = usePendingApprovalQuery({
    variables: { userId },
  })

  return (
    <Page currentUser={data?.users[0]}>
      <Heading title='Pending Approval' />
    </Page>
  )
}
