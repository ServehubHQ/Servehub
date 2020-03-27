import { Button, Typography } from '@material-ui/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Page } from '../components/Page'
import { useAuth } from '../lib/useAuth'
import { useIndexPageQuery } from '../graphql-codegen'

export default function HomePage() {
  const { isAuthenticated, authClient } = useAuth()
  const router = useRouter()
  const { data } = useIndexPageQuery({
    variables: { userId: authClient?.getUserId() },
  })

  if (isAuthenticated && typeof window !== 'undefined') {
    router.push('/jobs')
    return <div />
  }

  return (
    <Page currentUser={data?.users[0]}>
      <Typography variant='h1'>Welcome</Typography>
      <Link href='/signup' passHref>
        <Button>Get Started</Button>
      </Link>
    </Page>
  )
}
