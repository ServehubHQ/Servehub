import {
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
} from '@material-ui/core'
import { useRouter } from 'next/router'
import { MouseEvent, useCallback, useEffect } from 'react'
import ServerOnboardingPage from '../../../components/ServerOnboardingPage'
import { useServerOnboardingNotificationsQuery } from '../../../graphql-codegen'
import { getAndSaveMessagingToken } from '../../../lib/firebase'
import { useAuthRequired } from '../../../lib/useAuthRequired'

const NEXT_PATH = '/onboarding/server/pending-approval'

export default function OnboardingServerNotifications() {
  useAuthRequired()
  const { data, refetch } = useServerOnboardingNotificationsQuery()
  const router = useRouter()

  useEffect(() => {
    if (data?.current_user[0]?.firebase_messaging_token) {
      router.push(NEXT_PATH)
    }
  }, [data, router])

  const handleEnableNotificationsClick = useCallback(
    async (event: MouseEvent<HTMLButtonElement>) => {
      await getAndSaveMessagingToken(true)
      await refetch()
      router.push(NEXT_PATH)
    },
    [refetch, router],
  )

  const handleSkipClick = useCallback(
    async (event: MouseEvent<HTMLButtonElement>) => {
      router.push(NEXT_PATH)
    },
    [router],
  )

  return (
    <ServerOnboardingPage query={data} step='notifications'>
      <Card>
        <CardHeader
          title='Notifications'
          subheader='Make sure you know when a new jobs is available.'
        />
        <Divider />
        <CardActions>
          <Button
            onClick={handleEnableNotificationsClick}
            color='primary'
            variant='contained'
          >
            Enable Notifications
          </Button>
          <Button onClick={handleSkipClick}>Skip For Now</Button>
        </CardActions>
      </Card>
    </ServerOnboardingPage>
  )
}
