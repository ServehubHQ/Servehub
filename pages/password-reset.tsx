import {
  Button,
  makeStyles,
  TextField,
  Typography,
  Grid,
  Link as MuiLink,
} from '@material-ui/core'
import { useRouter } from 'next/router'
import { useCallback, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AuthPage } from '../components/AuthPage'
import { useAuth } from '../lib/useAuth'
import Link from 'next/link'
import { Alert } from '@material-ui/lab'

export const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

interface FormData {
  password?: string
  email?: string
}

export default function PasswordResetPage() {
  const { authClient } = useAuth()
  const router = useRouter()
  const classNames = useStyles()
  const { register, handleSubmit, errors, setError } = useForm<FormData>()
  const [loading, setLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const secret = useMemo(
    () =>
      typeof router.query.secret === 'string' ? router.query.secret : null,
    [router],
  )
  const emailParam = useMemo(
    () => (typeof router.query.email === 'string' ? router.query.email : null),
    [router],
  )

  const handleFormValid = useCallback(
    async ({ email, password }: FormData) => {
      setLoading(true)
      if (email) {
        const response = await fetch('/api/reset-password', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            accept: 'application/json',
          },
          body: JSON.stringify({ email }),
        })

        if (response.status === 200) {
          setEmailSent(true)
        } else {
          setError('email', 'server', 'Unable to reset at this time')
        }
      } else if (password && secret) {
        try {
          await authClient!.updatePassword(password, secret!)

          if (emailParam) {
            await authClient!.login(emailParam, password)
          }

          router.push('/')
        } catch (e) {
          console.error(e)

          const message = e.data?.message.replace('username', 'email')
          setError('password', 'server', message)
        }
      }
      setLoading(false)
    },
    [setError, authClient, secret, emailParam, router, setEmailSent],
  )

  return (
    <AuthPage title='Password Reset'>
      <form
        className={classNames.form}
        noValidate
        onSubmit={handleSubmit(handleFormValid)}
      >
        {!secret ? (
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            inputRef={register({ required: true })}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />
        ) : (
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='New Password'
            type='password'
            id='password'
            autoComplete='current-password'
            inputRef={register({ required: true })}
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
          />
        )}
        <Button
          type='submit'
          variant='contained'
          color='primary'
          className={classNames.submit}
          fullWidth
          disabled={loading || emailSent}
        >
          {secret ? 'Save' : 'Reset Password'}
        </Button>
        <Grid container direction='column' spacing={2}>
          {emailSent ? (
            <Grid item>
              <Alert severity='info'>
                Please check your email to continue.
              </Alert>
            </Grid>
          ) : null}
          {!secret ? (
            <Grid item>
              <Link href='/login' passHref>
                <MuiLink variant='body2'>
                  Remembered your password? Login.
                </MuiLink>
              </Link>
            </Grid>
          ) : null}
        </Grid>
      </form>
    </AuthPage>
  )
}
