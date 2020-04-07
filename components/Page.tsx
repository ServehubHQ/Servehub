import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode, useCallback, useState, MouseEvent } from 'react'
import { useAuth } from '../lib/useAuth'
import { AccountCircle } from '@material-ui/icons'
import { PageUserFragment } from '../graphql-codegen'
import { getAndSaveMessagingToken } from '../lib/firebase'

interface PageProps {
  children: ReactNode
  currentUser?: PageUserFragment
}

const useStyles = makeStyles((theme) => ({
  brand: {
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
  },
  navButton: {
    marginRight: theme.spacing(1),

    '&:last-child': {
      marginRight: 0,
    },
  },
}))

export function Page({ children, currentUser }: PageProps) {
  const router = useRouter()
  const { isAuthenticated, authClient } = useAuth()
  const styles = useStyles()

  const [
    accountMenuAnchorEl,
    setAccountMenuAnchorEl,
  ] = useState<null | HTMLElement>(null)

  const handleLogoutClick = useCallback(() => {
    authClient!.logout()
    setAccountMenuAnchorEl(null)
  }, [authClient])

  const handleMenuClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      setAccountMenuAnchorEl(event.currentTarget)
    },
    [setAccountMenuAnchorEl],
  )

  const handleMenuClose = useCallback(() => {
    setAccountMenuAnchorEl(null)
  }, [setAccountMenuAnchorEl])

  const handleEnableNotificationsClick = useCallback(() => {
    getAndSaveMessagingToken()
  }, [])

  return (
    <>
      <AppBar position='static'>
        <Container fixed>
          <Toolbar>
            <Box flexGrow={1}>
              <Link href='/' passHref>
                <Typography variant='h6' component='a' className={styles.brand}>
                  Servehub
                </Typography>
              </Link>
            </Box>
            {isAuthenticated ? (
              <>
                {currentUser && !currentUser.firebase_messaging_token ? (
                  <Button
                    color='inherit'
                    className={styles.navButton}
                    onClick={handleEnableNotificationsClick}
                  >
                    Enable Notifications
                  </Button>
                ) : null}
                {authClient?.getRole() === 'lawyer' ? (
                  <Link href='/jobs/create' passHref>
                    <Button color='inherit' className={styles.navButton}>
                      New Job
                    </Button>
                  </Link>
                ) : null}
                <IconButton
                  aria-label='user account'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleMenuClick}
                  color='inherit'
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEl={accountMenuAnchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={!!accountMenuAnchorEl}
                  onClose={handleMenuClose}
                >
                  <MenuItem>
                    <Link href={`/admin`}>
                      <a>Admin</a>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Link href={`/login?next=${router.pathname}`} passHref>
                  <Button color='inherit' className={styles.navButton}>
                    Login
                  </Button>
                </Link>
                <Link href='/signup' passHref>
                  <Button
                    variant='outlined'
                    color='inherit'
                    className={styles.navButton}
                  >
                    Signup
                  </Button>
                </Link>
              </>
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
