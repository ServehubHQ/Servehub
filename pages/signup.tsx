import {
  Avatar,
  Button,
  Grid,
  Link,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons'
import { useRouter } from 'next/router'
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react'
import { useAuth } from '../lib/useAuth'

const useStyles = makeStyles((theme) => ({
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
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const requiredMessage = 'This field is required.'

interface FormData {
  email: {
    error?: string
    value: string
    pristine: boolean
  }
  password: {
    error?: string
    value: string
    pristine: boolean
  }
}

export default function LoginPage() {
  const { isAuthenticated, authClient } = useAuth()
  const router = useRouter()
  const styles = useStyles()

  const [formData, setFormData] = useState<FormData>({
    email: {
      error: requiredMessage,
      value: '',
      pristine: true,
    },
    password: {
      error: requiredMessage,
      value: '',
      pristine: true,
    },
  })

  const handleEmailChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value
      setFormData({
        ...formData,
        email: {
          error: value === '' ? requiredMessage : undefined,
          pristine: false,
          value,
        },
      })
    },
    [formData, setFormData],
  )

  const handlePasswordChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value
      setFormData({
        ...formData,
        password: {
          error: value === '' ? requiredMessage : undefined,
          pristine: false,
          value,
        },
      })
    },
    [formData, setFormData],
  )

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      setFormData({
        ...formData,
        password: {
          ...formData.password,
          pristine: false,
        },
        email: {
          ...formData.email,
          pristine: false,
        },
      })

      if (!formData.email.value || !formData.password.value) {
        return
      }

      try {
        await authClient!.signup(
          formData.email.value,
          formData.email.value,
          formData.password.value,
        )
      } catch (e) {
        console.error(e)

        setFormData({
          ...formData,
          password: {
            ...formData.password,
            error: e.data.message.replace('username', 'email'),
          },
        })
        return
      }

      await authClient!.login(formData.email.value, formData.password.value)
    },
    [formData, authClient],
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
          <form className={styles.form} noValidate onSubmit={handleSubmit}>
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
              onChange={handleEmailChange}
              value={formData.email.value}
              error={!formData.email.pristine && !!formData.email.error}
              helperText={
                !formData.email.pristine ? formData.email.error : null
              }
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
              onChange={handlePasswordChange}
              value={formData.password.value}
              error={!formData.password.pristine && !!formData.password.error}
              helperText={
                !formData.password.pristine ? formData.password.error : null
              }
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
}
