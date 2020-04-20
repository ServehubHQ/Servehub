import { Divider, makeStyles, Paper } from '@material-ui/core'
import { useRouter } from 'next/router'
import { useMemo, useRef, useEffect } from 'react'
import { ChatForm } from '../../../components/ChatForm'
import { ChatMessages } from '../../../components/ChatMessages'
import { JobDetailsPage } from '../../../components/JobDetailsPage'
import { useJobDetailsChatQuery } from '../../../graphql-codegen'
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
  const classNames = useStyles()
  const router = useRouter()
  const { jobId } = router.query
  const { userId } = useAuth()
  const { data } = useJobDetailsChatQuery({ variables: { jobId, userId } })
  const job = useMemo(() => data?.jobs_by_pk, [data])
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

  return (
    <JobDetailsPage job={data?.jobs_by_pk} query={data} tab='chat'>
      {job ? (
        <Paper className={classNames.chatCard} ref={chatCardRef}>
          <ChatMessages jobId={job.id} />
          <Divider />
          <ChatForm jobId={job.id} />
        </Paper>
      ) : null}
    </JobDetailsPage>
  )
}
