import { Divider, makeStyles, Paper } from '@material-ui/core'
import { useRouter } from 'next/router'
import { ChatForm } from '../../../components/ChatForm'
import { ChatMessages } from '../../../components/ChatMessages'
import { JobDetailsPage } from '../../../components/JobDetailsPage'
import { useJobDetailsChatQuery } from '../../../graphql-codegen'
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
  const { data, refetch } = useJobDetailsChatQuery({
    variables: { jobId },
  })

  return (
    <JobDetailsPage job={data?.job} query={data} tab='chat' refetch={refetch}>
      {data?.job ? (
        <Paper className={classNames.chatCard}>
          <ChatMessages jobId={data.job.id} />
          <Divider />
          <ChatForm jobId={data.job.id} />
        </Paper>
      ) : null}
    </JobDetailsPage>
  )
}
