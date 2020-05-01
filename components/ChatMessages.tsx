import { makeStyles } from '@material-ui/core'
import React, { useEffect, useRef } from 'react'
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
  outer: {
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
  inner: {
    padding: theme.spacing(2),
  },
}))

export function ChatMessages({ jobId }: ChatMessagesProps) {
  const classNames = useStyles()
  const { data } = useChatMessagesSubscription({ variables: { jobId } })
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollRef?.current) {
      return
    }

    scrollRef.current.setAttribute(
      'style',
      `height: ${window.innerHeight - scrollRef.current.offsetTop - 96}px`,
    )
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [data, scrollRef])

  return (
    <div className={classNames.root}>
      <div ref={scrollRef} className={classNames.outer}>
        <div className={classNames.inner}>
          {(data?.messages.length || 0) === 0
            ? 'No messages yet!'
            : data?.messages.map((message) => {
                return <ChatMessage key={message.id} message={message} />
              })}
        </div>
      </div>
    </div>
  )
}
