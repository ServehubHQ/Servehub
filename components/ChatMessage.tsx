import { colors, makeStyles, Typography } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import clsx from 'clsx'
import moment from 'moment'
import React, { useEffect, useMemo } from 'react'
import {
  ChatMessageMessageFragment,
  useMarkMessageReadMutation,
} from '../graphql-codegen'
import { useAuth } from '../lib/useAuth'

interface ChatMessageProps {
  message: ChatMessageMessageFragment
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
  authUser: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& $body': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },
  inner: {
    display: 'flex',
    maxWidth: 500,
  },
  body: {
    backgroundColor: colors.grey[100],
    color: theme.palette.text.primary,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1, 2),
  },
  content: {
    marginTop: theme.spacing(1),
  },
  footer: {
    marginTop: theme.spacing(1),
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  readIcon: {
    fontSize: 14,
    marginRight: theme.spacing(1),
  },
}))

export function ChatMessage({ message }: ChatMessageProps) {
  const { userId } = useAuth()
  const classNames = useStyles()
  const [markRead] = useMarkMessageReadMutation({
    variables: { messageId: message.id },
  })
  const isCurrentUser = useMemo(() => message.user.id === userId, [
    message,
    userId,
  ])

  useEffect(() => {
    if (!isCurrentUser && !message.read_at) {
      markRead()
    }
  }, [markRead, isCurrentUser, message])

  return (
    <div
      className={clsx(classNames.root, {
        [classNames.authUser]: isCurrentUser,
      })}
    >
      <div className={classNames.inner}>
        <div>
          <div className={classNames.body}>
            <div>{isCurrentUser ? 'Me' : message.user.name}</div>
            <div className={classNames.content}>
              <Typography color='inherit' variant='body1'>
                {message.message}
              </Typography>
            </div>
          </div>
          <Typography variant='body2' className={classNames.footer}>
            {isCurrentUser ? (
              message.read_at ? (
                <Visibility color='disabled' className={classNames.readIcon} />
              ) : (
                <VisibilityOff
                  color='disabled'
                  className={classNames.readIcon}
                />
              )
            ) : null}
            {moment(message.created_at).fromNow()}
          </Typography>
        </div>
      </div>
    </div>
  )
}
