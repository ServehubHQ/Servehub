import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@material-ui/core'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import ServerOnboardingPage from '../../../components/ServerOnboardingPage'
import { usePendingApprovalQuery } from '../../../graphql-codegen'
import { useAuth } from '../../../lib/useAuth'
import { useAuthRequired } from '../../../lib/useAuthRequired'

export default function PendingApprovalPage() {
  useAuthRequired()
  const router = useRouter()
  const { userId } = useAuth()
  const { data } = usePendingApprovalQuery({
    variables: { userId },
  })

  useEffect(() => {
    if (data?.current_user[0].approved) {
      router.push('/jobs')
    }
  }, [router, data])

  return (
    <ServerOnboardingPage query={data} step='approval'>
      <Card>
        <CardHeader title='Pending Approval' />
        <Divider />
        <CardContent>
          <Typography>Please check your email for next steps.</Typography>
        </CardContent>
      </Card>
    </ServerOnboardingPage>
  )
}
