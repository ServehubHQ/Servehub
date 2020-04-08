import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  makeStyles,
  TextField,
  Typography,
  Box,
} from '@material-ui/core'
import classnames from 'classnames'
import { ChangeEvent, useCallback, useState } from 'react'
import {
  ChatJobFragment,
  useChatSubscription,
  useSendMessageMutation,
} from '../graphql-codegen'
import { useAuth } from '../lib/useAuth'

interface ChatProps {
  job: ChatJobFragment
}

export const useStyles = makeStyles((theme) => ({
  message: {
    borderRadius: 4,
  },
  myMessage: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },
  theirMessage: {
    backgroundColor: theme.palette.text.secondary,
    color: theme.palette.background.paper,
  },
  input: {
    width: '100%',
  },
}))

export function Chat({ job }: ChatProps) {
  const styles = useStyles()
  const { userId } = useAuth()
  const [newMessage, setNewMessage] = useState('')
  const { data } = useChatSubscription()
  const [sendMessage] = useSendMessageMutation({
    variables: { message: newMessage, jobId: job.id },
  })

  const handleNewMessageChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setNewMessage(event.currentTarget.value)
    },
    [setNewMessage],
  )

  const handleSendMessage = useCallback(() => {
    sendMessage()
  }, [sendMessage])

  return (
    <Card>
      <CardHeader title='Chat' />
      <CardContent>
        {data?.messages.map((message) => (
          <Box
            p={2}
            mb={2}
            className={classnames(
              styles.message,
              userId === message.user_id
                ? styles.myMessage
                : styles.theirMessage,
            )}
            key={message.id}
          >
            <Typography>{message.message}</Typography>
          </Box>
        ))}
        <Grid container alignItems='center' justify='space-between'>
          <Grid item xs={10}>
            <TextField
              name='newMessage'
              label='Message'
              variant='filled'
              margin='normal'
              required
              autoFocus
              onChange={handleNewMessageChange}
              className={styles.input}
            />
          </Grid>
          <Grid item xs={2} container alignItems='center' justify='center'>
            <Grid item>
              <Button onClick={handleSendMessage}>Send</Button>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
