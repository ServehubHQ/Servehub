import {
  AppBar,
  Box,
  Container,
  IconButton,
  LinearProgress,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
} from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MouseEvent, ReactNode, useCallback, useEffect, useState } from 'react'
import { PageQueryFragment } from '../graphql-codegen'
import { useAuth } from '../lib/useAuth'
import { useGlobalLoading } from '../lib/useGlobalLoading'
import { ButtonLink } from './ButtonLink'
import { MenuItemLink } from './MenuItemLink'

export interface PageProps {
  title: string
  children?: ReactNode
  query?: PageQueryFragment
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    minHeight: '100vh',
  },
  loadingBar: {
    position: 'absolute',
    width: '100%',
    height: '2px',
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

export function Page({ title, children, query }: PageProps) {
  const router = useRouter()
  const globalLoading = useGlobalLoading()
  const { isAuthenticated, authClient, isAdmin, role, userId } = useAuth()
  const classNames = useStyles()
  const [
    accountMenuAnchorEl,
    setAccountMenuAnchorEl,
  ] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (isAuthenticated && userId && window.gtag) {
      window.gtag('set', { user_id: userId })
    }
  }, [isAuthenticated, userId])

  useEffect(() => {
    if (window.gtag) {
      window.gtag('send', 'pageview', router.asPath)
    }
  }, [router])

  const handleLogoutClick = useCallback(() => {
    authClient!.logout()
    setAccountMenuAnchorEl(null)
    router.push('/login')
  }, [authClient, router])

  const handleMenuClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      setAccountMenuAnchorEl(event.currentTarget)
    },
    [setAccountMenuAnchorEl],
  )

  const handleMenuClose = useCallback(() => {
    setAccountMenuAnchorEl(null)
  }, [setAccountMenuAnchorEl])

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
        {globalLoading ? (
          <LinearProgress className={classNames.loadingBar} color='secondary' />
        ) : null}
        <Container fixed>
          <Toolbar disableGutters>
            <Box flexGrow={1}>
              <Link href='/'>
                <a>
                  <img
                    className={classNames.logo}
                    src='/images/brand/logo-light.svg'
                    alt='Servehub'
                  />
                </a>
              </Link>
            </Box>
            {isAuthenticated ? (
              <>
                {role === 'lawyer' || query?.current_user?.[0]?.approved ? (
                  <ButtonLink href='/jobs' color='inherit'>
                    Your Jobs
                  </ButtonLink>
                ) : null}
                {role === 'server' && query?.current_user?.[0]?.approved ? (
                  <ButtonLink href='/jobs/available' color='inherit'>
                    Available Jobs
                  </ButtonLink>
                ) : role === 'lawyer' ? (
                  <ButtonLink href='/jobs/create' color='inherit'>
                    New Job
                  </ButtonLink>
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
                  {isAdmin ? (
                    <MenuItemLink href='/admin'>Admin</MenuItemLink>
                  ) : null}
                  <MenuItemLink href='/settings'>Settings</MenuItemLink>
                  <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <ButtonLink
                  href={`/login?next=${router.pathname}`}
                  color='inherit'
                  className={classNames.navButton}
                >
                  Login
                </ButtonLink>
                <ButtonLink
                  href='/signup'
                  variant='outlined'
                  color='inherit'
                  className={classNames.navButton}
                >
                  Signup
                </ButtonLink>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      {children ? (
        <Container fixed className={classNames.contentContainer}>
          {children}
        </Container>
      ) : null}
    </div>
  )
}
