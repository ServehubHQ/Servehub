import { useRouter } from 'next/router'
import { useAuth } from './auth'
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
