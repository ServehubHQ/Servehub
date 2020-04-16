import {
  AppBar,
  Box,
  Button,
  Container,
  FormControlLabel,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Switch,
  Toolbar,
} from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  ChangeEvent,
  MouseEvent,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react'
import { PageUserFragment } from '../graphql-codegen'
import { getAndSaveMessagingToken } from '../lib/firebase'
import { useApolloClient } from '../lib/getApolloClient'
import { useAuth } from '../lib/useAuth'

export interface PageProps {
  children: ReactNode
  title: string
  currentUser?: PageUserFragment
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    minHeight: '100vh',
  },
  bar: {
    boxShadow: 'none',
  },
  logo: {
    height: 32,
  },
  navButton: {
    marginRight: theme.spacing(1),

    '&:last-child': {
      marginRight: 0,
    },
  },
  contentContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'stretch',
    alignItems: 'stretch',
    padding: theme.spacing(3),
  },
}))

export function Page({ title, children, currentUser }: PageProps) {
  const router = useRouter()
  const { isAuthenticated, authClient, isAdmin } = useAuth()
  const apolloClient = useApolloClient()
  const classNames = useStyles()
  const [
    accountMenuAnchorEl,
    setAccountMenuAnchorEl,
  ] = useState<HTMLElement | null>(null)
  const [
    optimisticNotificationsEnabled,
    setOptimisticNotificationsEnabled,
  ] = useState<boolean | null>(null)
  const notificationsEnabled = useMemo(
    () =>
      typeof optimisticNotificationsEnabled === 'boolean'
        ? optimisticNotificationsEnabled
        : Boolean(
            currentUser &&
              currentUser.firebase_messaging_token &&
              currentUser.notifications_enabled,
          ),
    [currentUser, optimisticNotificationsEnabled],
  )

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

  const handleNotificationsSwitch = useCallback(
    async (event: ChangeEvent<HTMLInputElement>, value: boolean) => {
      setOptimisticNotificationsEnabled(value)
      await getAndSaveMessagingToken(value)
      await apolloClient.resetStore()
      setOptimisticNotificationsEnabled(null)
    },
    [apolloClient, setOptimisticNotificationsEnabled],
  )

  return (
    <div className={classNames.root}>
      <Head>
        <title>{`${title} - Servehub`}</title>

        <link
          rel='apple-touch-icon-precomposed'
          href='/images/brand/icon-192x192.png'
        />
        <meta
          name='msapplication-TileImage'
          content='/images/brand/icon-144x144.png'
        />
        <link rel='icon' href='/images/brand/icon-48x48.png' sizes='48x48' />
        <link rel='icon' href='/images/brand/icon-72x72.png' sizes='72x72' />
        <link rel='icon' href='/images/brand/icon-96x96.png' sizes='96x96' />
        <link
          rel='icon'
          href='/images/brand/icon-144x144.png'
          sizes='144x144'
        />
        <link
          rel='icon'
          href='/images/brand/icon-192x192.png'
          sizes='192x192'
        />
        <link
          rel='shortcut icon'
          href='/images/brand/icon-192x192.png'
          sizes='192x192'
        />
        <link
          rel='icon'
          href='/images/brand/icon-256x256.png'
          sizes='256x256'
        />
        <link
          rel='icon'
          href='/images/brand/icon-384x384.png'
          sizes='384x384'
        />
        <link
          rel='icon'
          href='/images/brand/icon-512x512.png'
          sizes='512x512'
        />
      </Head>
      <AppBar position='static' className={classNames.bar}>
        <Container fixed>
          <Toolbar disableGutters>
            <Box flexGrow={1}>
              <Link href='/' passHref>
                <img
                  className={classNames.logo}
                  src='/images/brand/logo-light.svg'
                  alt='Servehub'
                />
              </Link>
            </Box>
            {isAuthenticated ? (
              <>
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
                  {isAdmin ? (
                    <Link href={`/admin`}>
                      <MenuItem component='a'>Admin</MenuItem>
                    </Link>
                  ) : null}
                  <MenuItem>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={notificationsEnabled}
                          onChange={handleNotificationsSwitch}
                          name='Notifications'
                        />
                      }
                      label='Notifications'
                    />
                  </MenuItem>
                  <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Link href={`/login?next=${router.pathname}`} passHref>
                  <Button color='inherit' className={classNames.navButton}>
                    Login
                  </Button>
                </Link>
                <Link href='/signup' passHref>
                  <Button
                    variant='outlined'
                    color='inherit'
                    className={classNames.navButton}
                  >
                    Signup
                  </Button>
                </Link>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Container fixed className={classNames.contentContainer}>
        {children}
      </Container>
    </div>
  )
}
