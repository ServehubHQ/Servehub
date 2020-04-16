import {
  Button,
  Grid,
  Link,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core'
import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { encodeQuerystring } from '../lib/encodeQuerystring'
import { useAuth } from '../lib/useAuth'
import Head from 'next/head'

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    marginBottom: theme.spacing(3),
    width: '50%',
  },
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

// export default withData({ ssr: false, authenticationRequired: false })(
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
    <Grid container component='main' className={classNames.root}>
      <Head>
        <title>Login - Servehub</title>
      </Head>
      <Grid item xs={false} sm={4} md={7} className={classNames.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classNames.paper}>
          <img
            src='/images/brand/logo-dark.svg'
            alt='Servehub'
            className={classNames.logo}
          />
          <Typography component='h1' variant='h5'>
            Login
          </Typography>
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
            <Grid container>
              <Grid item>
                <Link href='/signup' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}
