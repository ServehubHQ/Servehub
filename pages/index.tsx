import { Button } from '@material-ui/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Heading } from '../components/Heading'
import { Page } from '../components/Page'
import { useIndexPageQuery } from '../graphql-codegen'
import { useAuth } from '../lib/useAuth'

export default function HomePage() {
  const { isAuthenticated, userId, role } = useAuth()
  const router = useRouter()
  const { data, loading } = useIndexPageQuery({
    variables: { userId },
  })

  if (!loading && isAuthenticated && typeof window !== 'undefined') {
    if (role !== 'server' || data?.users[0].approved) {
      router.push('/jobs')
    } else {
      router.push('/pending-approval')
    }
    return <div />
  }

  return (
    <Page currentUser={data?.users[0]} title='Welcome'>
      <Heading title='Servehub' />
      <Link href='/signup' passHref>
        <Button>Get Started</Button>
      </Link>
    </Page>
  )
}
