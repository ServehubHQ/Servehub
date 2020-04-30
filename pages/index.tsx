import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Page } from '../components/Page'
import { useIndexPageQuery } from '../graphql-codegen'
import { useAuth } from '../lib/useAuth'

export default function HomePage() {
  const { isAuthenticated, userId, role } = useAuth()
  const router = useRouter()
  const { data, loading } = useIndexPageQuery({
    variables: { userId },
  })

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    if (!isAuthenticated) {
      router.push('/signup')
    }
    if (loading || !data?.current_user[0]) {
      return
    }

    if (role !== 'server' || data.current_user[0].approved) {
      router.push('/jobs')
    } else {
      router.push(`/onboarding/${role}`)
    }
  }, [loading, isAuthenticated, data, router, role])

  if (!data) {
    return ''
  }

  return <Page query={data} title='Welcome' />
}
