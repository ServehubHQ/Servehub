import { Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import Head from 'next/head'
import { ReactNode } from 'react'

interface AuthPageProps {
  title: string
  children: ReactNode
}

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(/images/auth-splash.jpg)',
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
}))

export function AuthPage({ title, children }: AuthPageProps) {
  const classNames = useStyles()

  return (
    <Grid container component='main' className={classNames.root}>
      <Head>
        <title>{title} - Servehub</title>
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
            {title}
          </Typography>
          {children}
        </div>
      </Grid>
    </Grid>
  )
}
