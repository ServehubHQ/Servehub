import { Button, Divider, makeStyles, Paper } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { useRouter } from 'next/router'
import { MouseEvent, useCallback } from 'react'
import { ChatForm } from '../../../components/ChatForm'
import { ChatMessages } from '../../../components/ChatMessages'
import { JobDetailsPage } from '../../../components/JobDetailsPage'
import { Stack } from '../../../components/Stack'
import { useJobDetailsChatQuery } from '../../../graphql-codegen'
import {
  getAndSaveMessagingToken,
  pushNotificationsSupported,
} from '../../../lib/firebase'
import { useAuth } from '../../../lib/useAuth'
import { useAuthRequired } from '../../../lib/useAuthRequired'

const useStyles = makeStyles((theme) => ({
  chatCard: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
}))

export default function JobDetailsChat() {
  useAuthRequired()
  const { userId } = useAuth()
  const classNames = useStyles()
  const router = useRouter()
  const { jobId } = router.query
  const { data, refetch } = useJobDetailsChatQuery({
    variables: { jobId, userId },
  })

  const handleEnableNotificationsClick = useCallback(
    async (event: MouseEvent<HTMLButtonElement>) => {
      await getAndSaveMessagingToken(true)
      await refetch()
    },
    [refetch],
  )

  return (
    <JobDetailsPage job={data?.job} query={data} tab='chat' refetch={refetch}>
      <Stack>
        {pushNotificationsSupported() &&
        !data?.current_user[0].notifications_enabled ? (
          <Alert
            variant='filled'
            severity='info'
            action={
              <Button
                color='inherit'
                size='small'
                onClick={handleEnableNotificationsClick}
              >
                Enable Notifications
              </Button>
            }
          >
            Enable notification to ensure you see new messages when offline.
          </Alert>
        ) : null}
        {data?.job ? (
          <Paper className={classNames.chatCard}>
            <ChatMessages jobId={data.job.id} />
            <Divider />
            <ChatForm jobId={data.job.id} />
          </Paper>
        ) : null}
      </Stack>
    </JobDetailsPage>
  )
}
