import {
  Avatar,
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons'
import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../lib/useAuth'
import { withData } from '../../lib/withData'
import { useStyles } from './styles'

interface FormData {
  email: string
  password: string
}

export default withData({ ssr: false })(function SignupPage() {
  const { isAuthenticated, authClient } = useAuth()
  const router = useRouter()
  const styles = useStyles()
  const { register, handleSubmit, errors, setError } = useForm<FormData>()

  const handleFormValid = useCallback(
    async ({ email, password }: FormData) => {
      try {
        await authClient!.signup(email, email, password)
      } catch (e) {
        console.error(e)

        const message = e.data?.message.replace('username', 'email')
        setError('email', 'server', message)
        return
      }

      await authClient!.login(email, password)
    },
    [setError, authClient],
  )

  useEffect(() => {
    if (isAuthenticated) {
      router.push(router.query.next ? router.query.next.toString() : '/')
    }
  }, [isAuthenticated, router])

  return (
    <Grid container component='main' className={styles.root}>
      <Grid item xs={false} sm={4} md={7} className={styles.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={styles.paper}>
          <Avatar className={styles.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Signup
          </Typography>
          <form
            className={styles.form}
            noValidate
            onSubmit={handleSubmit(handleFormValid)}
          >
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              inputRef={register({ required: true })}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              autoComplete='current-password'
              inputRef={register({ required: true })}
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
            />
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className={styles.submit}
              fullWidth
            >
              Signup
            </Button>
            <Grid container>
              <Grid item>
                <Link href='/login' variant='body2'>
                  {'Already have an account? Login'}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  )
})
