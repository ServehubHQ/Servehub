import { Divider, makeStyles } from '@material-ui/core'
import { ChatJobFragment } from '../graphql-codegen'
import { ChatForm } from './ChatForm'
import { ChatMessages } from './ChatMessages'

interface ChatProps {
  job: ChatJobFragment
}

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.common.white,
  },
  // message: {
  //   borderRadius: 4,
  // },
  // myMessage: {
  //   backgroundColor: theme.palette.primary.dark,
  //   color: theme.palette.primary.contrastText,
  // },
  // theirMessage: {
  //   backgroundColor: theme.palette.text.secondary,
  //   color: theme.palette.background.paper,
  // },
  // input: {
  //   width: '100%',
  // },
}))

export function Chat({ job }: ChatProps) {
  const styles = useStyles()

  return (
    <div className={styles.root}>
      <ChatMessages jobId={job.id} />
      <Divider />
      <ChatForm jobId={job.id} />
    </div>
  )
}
