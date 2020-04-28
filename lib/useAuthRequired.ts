import { useAuth } from './useAuth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { encodeQuerystring } from './encodeQuerystring'

export function useAuthRequired() {
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push(`/login?${encodeQuerystring({ next: router.asPath })}`)
    }
  }, [isAuthenticated, router])
}
