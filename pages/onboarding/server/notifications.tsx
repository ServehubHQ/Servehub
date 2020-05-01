import {
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  makeStyles,
} from '@material-ui/core'
import { useRouter } from 'next/router'
import { MouseEvent, useCallback, useState } from 'react'
import ServerOnboardingPage from '../../../components/ServerOnboardingPage'
import { useServerOnboardingNotificationsQuery } from '../../../graphql-codegen'
import { getAndSaveMessagingToken } from '../../../lib/firebase'
import { useAuthRequired } from '../../../lib/useAuthRequired'

const NEXT_PATH = '/onboarding/server/pending-approval'

const useClassNames = makeStyles((theme) => ({
  actions: {
    justifyContent: 'flex-end',
  },
}))

export default function OnboardingServerNotifications() {
  useAuthRequired()
  const classNames = useClassNames()
  const [loading, setLoading] = useState(false)
  const { data, refetch } = useServerOnboardingNotificationsQuery()
  const router = useRouter()

  const handleEnableNotificationsClick = useCallback(
    async (event: MouseEvent<HTMLButtonElement>) => {
      setLoading(true)
      await getAndSaveMessagingToken(true)
      await refetch()
      router.push(NEXT_PATH)
    },
    [refetch, router, setLoading],
  )

  const handleSkipClick = useCallback(
    async (event: MouseEvent<HTMLButtonElement>) => {
      setLoading(true)
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
        <CardActions className={classNames.actions}>
          <Button onClick={handleSkipClick}>Skip</Button>
          <Button
            onClick={handleEnableNotificationsClick}
            color='primary'
            variant='contained'
            disabled={loading}
          >
            Enable
          </Button>
        </CardActions>
      </Card>
    </ServerOnboardingPage>
  )
}
