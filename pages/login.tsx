import {
  Button,
  Grid,
  Link as MuiLink,
  makeStyles,
  TextField,
} from '@material-ui/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { AuthPage } from '../components/AuthPage'
import { encodeQuerystring } from '../lib/encodeQuerystring'
import { useAuth } from '../lib/useAuth'

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
  email: string
  password: string
}

export default function LoginPage() {
  const { isAuthenticated, authClient } = useAuth()
  const router = useRouter()
  const classNames = useStyles()
  const { register, handleSubmit, errors, setError } = useForm<FormData>()

  const handleFormValid = useCallback(
    async ({ email, password }: FormData) => {
      try {
        await authClient!.login(email, password)
      } catch (e) {
        console.error(e)

        const message = e.data?.message.replace('username', 'email')
        setError('password', 'server', message)
      }
    },
    [setError, authClient],
  )

  useEffect(() => {
    if (isAuthenticated) {
      const { next, ...params } = router.query
      const path = next || '/'
      const queryString = encodeQuerystring(params)
      router.push(`${path}${queryString ? '?' : ''}${queryString}`)
    }
  }, [isAuthenticated, router])

  return (
    <AuthPage title='Login'>
      <form
        className={classNames.form}
        noValidate
        onSubmit={handleSubmit(handleFormValid)}
      >
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
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          name='password'
          label='Password'
          type='password'
          id='password'
          autoComplete='current-password'
          inputRef={register({ required: true })}
          error={Boolean(errors.password)}
          helperText={errors.password?.message}
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          className={classNames.submit}
          fullWidth
        >
          Login
        </Button>
        <Grid container direction='column' spacing={2}>
          <Grid item>
            <Link href='/signup' passHref>
              <MuiLink variant='body2'>
                Don&apos;t have an account? Sign Up
              </MuiLink>
            </Link>
          </Grid>
          <Grid item>
            <Link href='/password-reset' passHref>
              <MuiLink variant='body2'>Forgot your password? Reset it.</MuiLink>
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthPage>
  )
}
