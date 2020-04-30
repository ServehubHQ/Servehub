import { Divider, makeStyles, Paper } from '@material-ui/core'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useRef } from 'react'
import { ChatForm } from '../../../components/ChatForm'
import { ChatMessages } from '../../../components/ChatMessages'
import { JobDetailsPage } from '../../../components/JobDetailsPage'
import { useJobDetailsChatQuery } from '../../../graphql-codegen'
import { useAuthRequired } from '../../../lib/useAuthRequired'
import { useAuth } from '../../../lib/useAuth'

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
    <JobDetailsPage
      job={data?.jobs_by_pk}
      query={data}
      tab='chat'
      refetch={refetch}
    >
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
