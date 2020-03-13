import { useAuth } from './useAuth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { encodeQuerystring } from './encodeQuerystring'

export function useAuthRequired() {
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      const params = { ...router.query, next: router.pathname }
      router.push(`/login?${encodeQuerystring(params)}`)
    }
  }, [isAuthenticated, router])
}
