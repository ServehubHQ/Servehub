import { makeStyles } from '@material-ui/core'
import React, { useRef, useEffect, useCallback } from 'react'
import { useChatMessagesSubscription } from '../graphql-codegen'
import { ChatMessage } from './ChatMessage'

import PerfectScrollbar from 'react-perfect-scrollbar'

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
  const scrollRef = useRef<HTMLElement>()

  const setRef = useCallback((ref: HTMLElement) => (scrollRef.current = ref), [
    scrollRef,
  ])

  useEffect(() => {
    if (typeof scrollRef?.current === 'undefined') {
      return
    }
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [data, scrollRef])

  return (
    <div className={classes.root}>
      <PerfectScrollbar containerRef={setRef}>
        <div className={classes.inner}>
          {(data?.messages.length || 0) === 0
            ? 'No messages yet!'
            : data?.messages.map((message) => {
                return <ChatMessage key={message.id} message={message} />
              })}
        </div>
      </PerfectScrollbar>
    </div>
  )
}
