import { Button, Typography } from '@material-ui/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Page } from '../components/Page'
import { useAuth } from '../lib/useAuth'

export default function HomePage() {
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  if (isAuthenticated && typeof window !== 'undefined') {
    router.push('/jobs')
    return <div />
  }

  return (
    <Page>
      <Typography variant='h1'>Welcome</Typography>
      <Link href='/signup' passHref>
        <Button>Get Started</Button>
      </Link>
      <Link href='/push-play' passHref>
        <Button>Push Play</Button>
      </Link>
    </Page>
  )
}
