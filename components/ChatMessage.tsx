import { colors, makeStyles, Typography } from '@material-ui/core'
import clsx from 'clsx'
import moment from 'moment'
import React, { useMemo } from 'react'
import { ChatMessageMessageFragment } from '../graphql-codegen'
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
  avatar: {
    marginRight: theme.spacing(2),
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
  image: {
    marginTop: theme.spacing(2),
    height: 'auto',
    width: 380,
    maxWidth: '100%',
  },
  footer: {
    marginTop: theme.spacing(1),
    display: 'flex',
    justifyContent: 'flex-end',
  },
}))

export function ChatMessage({ message }: ChatMessageProps) {
  const { userId } = useAuth()
  const classes = useStyles()
  const isCurrentUser = useMemo(() => message.user.id === userId, [
    message,
    userId,
  ])

  return (
    <div
      className={clsx(classes.root, {
        [classes.authUser]: isCurrentUser,
      })}
    >
      <div className={classes.inner}>
        <div>
          <div className={classes.body}>
            <div>{isCurrentUser ? 'Me' : message.user.name}</div>
            <div className={classes.content}>
              <Typography color='inherit' variant='body1'>
                {message.message}
              </Typography>
            </div>
          </div>
          <div className={classes.footer}>
            <Typography variant='body2'>
              {moment(message.created_at).fromNow()}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}
