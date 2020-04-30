import {
  Button,
  Grid,
  Link,
  makeStyles,
  MenuItem,
  TextField,
} from '@material-ui/core'
import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { AuthPage } from '../components/AuthPage'
import { SelectField } from '../components/SelectField'
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
  role: string
  name: string
}

export default function SignupPage() {
  const { isAuthenticated, authClient } = useAuth()
  const router = useRouter()
  const classNames = useStyles()
  const { watch, register, handleSubmit, errors, setError, control } = useForm<
    FormData
  >()
  const role = watch('role')

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
      router.push(`/onboarding/${role || 'server'}`)
    }
  }, [isAuthenticated, router, role])

  return (
    <AuthPage title='Signup'>
      <form
        className={classNames.form}
        noValidate
        onSubmit={handleSubmit(handleFormValid)}
      >
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
          <MenuItem value='lawyer'>Law Firm</MenuItem>
          <MenuItem value='server'>Process Server</MenuItem>
        </SelectField>
        <TextField
          variant='filled'
          margin='normal'
          required
          fullWidth
          label='Email Address'
          name='email'
          autoComplete='email'
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
    </AuthPage>
  )
}
