import {
  Button,
  Grid,
  Link,
  makeStyles,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core'
import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { SelectField } from '../components/SelectField'
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
    maxHeight: 42,
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
  role: string
  name: string
}

export default function SignupPage() {
  const { isAuthenticated, authClient } = useAuth()
  const router = useRouter()
  const classNames = useStyles()
  const { register, handleSubmit, errors, setError, control } = useForm<
    FormData
  >()

  const handleFormValid = useCallback(
    async ({ email, password, ...additionData }: FormData) => {
      try {
        await authClient!.signup(email, email, password, additionData)
      } catch (e) {
        console.error(e)

        const message = e.data?.message.replace('username', 'email')
        setError(
          'email',
          'server',
          message === 'An internal server error occurred'
            ? 'This email is already in use'
            : message,
        )
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
    <Grid container component='main' className={classNames.root}>
      <Head>
        <title>Get Started - Servehub</title>
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
            Signup
          </Typography>
          <form
            className={classNames.form}
            noValidate
            onSubmit={handleSubmit(handleFormValid)}
          >
            <TextField
              variant='filled'
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
              variant='filled'
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
            <TextField
              variant='filled'
              margin='normal'
              required
              fullWidth
              label='Name'
              name='name'
              inputRef={register({ required: true })}
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
            />
            <SelectField
              name='role'
              label='Role'
              control={control}
              rules={{ required: true }}
              required
              fullWidth
              error={Boolean(errors.role)}
              helperText={errors.role?.message}
            >
              <MenuItem value='lawyer'>Lawyer</MenuItem>
              <MenuItem value='server'>Process Server</MenuItem>
            </SelectField>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className={classNames.submit}
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
}
