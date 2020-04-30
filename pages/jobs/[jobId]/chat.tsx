import { Divider, makeStyles, Paper, Button } from '@material-ui/core'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useRef, MouseEvent, useCallback } from 'react'
import { ChatForm } from '../../../components/ChatForm'
import { ChatMessages } from '../../../components/ChatMessages'
import { JobDetailsPage } from '../../../components/JobDetailsPage'
import { useJobDetailsChatQuery } from '../../../graphql-codegen'
import { useAuthRequired } from '../../../lib/useAuthRequired'
import { useAuth } from '../../../lib/useAuth'
import { Alert } from '@material-ui/lab'
import { getAndSaveMessagingToken } from '../../../lib/firebase'
import { Stack } from '../../../components/Stack'

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
  const chatCardRef = useRef<HTMLDivElement>()

  useEffect(() => {
    if (typeof chatCardRef.current === 'undefined') {
      return
    }
    chatCardRef.current.setAttribute(
      'style',
      `height: ${window.innerHeight - chatCardRef.current.offsetTop - 32}px`,
    )
  }, [chatCardRef])

  const handleEnableNotificationsClick = useCallback(
    async (event: MouseEvent<HTMLButtonElement>) => {
      await getAndSaveMessagingToken(true)
      await refetch()
    },
    [refetch],
  )
  console.log(data)
  return (
    <JobDetailsPage job={data?.job} query={data} tab='chat' refetch={refetch}>
      <Stack>
        {!data?.current_user[0].notifications_enabled ? (
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
          <Paper className={classNames.chatCard} ref={chatCardRef}>
            <ChatMessages jobId={data.job.id} />
            <Divider />
            <ChatForm jobId={data.job.id} />
          </Paper>
        ) : null}
      </Stack>
    </JobDetailsPage>
  )
}
