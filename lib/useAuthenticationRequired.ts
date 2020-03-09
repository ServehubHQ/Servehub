import { useRouter } from 'next/router'
import { useAuth } from './useAuth'
import { useEffect } from 'react'

export function useAuthenticationRequired() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push(`/login?next=${router.pathname}`)
    }
  }, [isAuthenticated, router])
}
