import { makeStyles } from '@material-ui/core'
import React from 'react'
import { useChatMessagesSubscription } from '../graphql-codegen'
import { ChatMessage } from './ChatMessage'

interface ChatMessagesProps {
  jobId: string
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    maxHeight: '100%',
  },
  inner: {
    padding: theme.spacing(2),
  },
}))

export function ChatMessages({ jobId }: ChatMessagesProps) {
  const classes = useStyles()
  const { data } = useChatMessagesSubscription({ variables: { jobId } })

  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        {(data?.messages.length || 0) === 0
          ? 'No messages yet!'
          : data?.messages.map((message) => {
              return <ChatMessage key={message.id} message={message} />
            })}
      </div>
    </div>
  )
}
