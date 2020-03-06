import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
  makeStyles,
} from '@material-ui/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { useAuth } from '../../lib/auth'

interface PageProps {
  children: ReactNode
}

const useStyles = makeStyles((theme) => ({
  brand: {
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
  },
}))

export function Page({ children }: PageProps) {
  const router = useRouter()
  const { isAuthenticated } = useAuth()
  const styles = useStyles()
  return (
    <>
      <AppBar position='static'>
        <Container fixed>
          <Toolbar>
            <Box flexGrow={1}>
              <Link href={`/login?next=${router.pathname}`} passHref>
                <Typography variant='h6' component='a' className={styles.brand}>
                  Serve Hub
                </Typography>
              </Link>
            </Box>
            {isAuthenticated ? (
              <Link href={`/admin`} passHref>
                <Button color='inherit'>Admin</Button>
              </Link>
            ) : (
              <Link href={`/login?next=${router.pathname}`} passHref>
                <Button color='inherit'>Login</Button>
              </Link>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Container fixed>
        <Box p={3}>{children}</Box>
      </Container>
    </>
  )
}
