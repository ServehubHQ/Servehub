import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  CardActions,
} from '@material-ui/core'
import { MouseEvent, useCallback } from 'react'
import ServerOnboardingPage from '../../../components/ServerOnboardingPage'
import { useServerOnboardingNotificationsQuery } from '../../../graphql-codegen'
import { getAndSaveMessagingToken } from '../../../lib/firebase'
import { useApolloClient } from '../../../lib/getApolloClient'
import { useAuthRequired } from '../../../lib/useAuthRequired'

export default function OnboardingServerNotifications() {
  useAuthRequired()
  const { data } = useServerOnboardingNotificationsQuery()
  const apolloClient = useApolloClient()

  const handleEnableNotificationsClick = useCallback(
    async (event: MouseEvent<HTMLButtonElement>) => {
      await getAndSaveMessagingToken(true)
      await apolloClient.resetStore()
    },
    [apolloClient],
  )

  return (
    <ServerOnboardingPage query={data} step='notifications'>
      <Card>
        <CardHeader
          title='Notifications'
          subheader='Make sure you know when a new serve is available.'
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
        </CardActions>
      </Card>
    </ServerOnboardingPage>
  )
}
