import {
  IconButton,
  Input,
  makeStyles,
  Paper,
  Tooltip,
} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import clsx from 'clsx'
import React, { ChangeEvent, useCallback, useRef, useState } from 'react'
import { useSendMessageMutation } from '../graphql-codegen'
import { useEventListener } from '../lib/useEventListener'

interface ChatFormProps {
  jobId: string
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1, 2),
  },
  paper: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
    padding: theme.spacing(0.5, 2),
  },
  input: {
    width: '100%',
  },
}))

export function ChatForm({ jobId }: ChatFormProps) {
  const classes = useStyles()
  const inputRef = useRef<HTMLInputElement>()
  const [value, setValue] = useState('')
  const [sendMessage] = useSendMessageMutation({
    variables: { message: value, jobId },
  })

  const handleSendMessage = useCallback(async () => {
    await sendMessage()
    setValue('')
  }, [sendMessage, setValue])

  useEventListener(
    'keydown',
    useCallback(
      (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
          handleSendMessage()
        }
      },
      [handleSendMessage],
    ),
  )

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setValue(event.target.value)
    },
    [setValue],
  )

  return (
    <div className={clsx(classes.root)}>
      <Paper className={classes.paper} elevation={1}>
        <Input
          className={classes.input}
          disableUnderline
          placeholder='Leave a message'
          value={value}
          onChange={handleChange}
          inputRef={inputRef}
        />
      </Paper>
      <Tooltip title='Send'>
        <IconButton
          color={value.length > 0 ? 'primary' : 'default'}
          onClick={handleSendMessage}
        >
          <SendIcon />
        </IconButton>
      </Tooltip>
    </div>
  )
}
