import {
  IconButton,
  Input,
  makeStyles,
  Paper,
  Tooltip,
} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import clsx from 'clsx'
import React, {
  useState,
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
} from 'react'
import { useSendMessageMutation } from '../graphql-codegen'

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

  useEffect(() => {
    console.log('register', inputRef.current)
    console.log('TODO: figure out why onkeydown is failing')
    return inputRef.current?.addEventListener('onkeydown', (event) => {
      console.log('onkeydown', event) // (event as KeyboardEvent).key
    })
  }, [inputRef])

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setValue(event.target.value)
    },
    [setValue],
  )

  const handleSendMessage = useCallback(async () => {
    await sendMessage()
    setValue('')
    console.log('value set to nothing')
  }, [sendMessage, setValue])

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
