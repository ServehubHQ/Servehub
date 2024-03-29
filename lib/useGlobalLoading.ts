import { useMemo, useState, useEffect } from 'react'
import { useApolloNetworkStatus } from './getApolloClient'
import { useRouter } from 'next/router'

export function useGlobalLoading() {
  const { numPendingQueries } = useApolloNetworkStatus()
  const router = useRouter()
  const [routerLoading, setRouterLoading] = useState(false)

  useEffect(() => {
    const handleRouteChangeStart = (url: string) => {
      console.log('[router] start', url)
      setRouterLoading(true)
    }
    const handleRouteChangeComplete = (url: string) => {
      console.log('[router] end', url)
      setRouterLoading(false)
    }
    const handleRouteChangeError = (
      error: { cancelled: boolean },
      url: string,
    ) => {
      console.warn('[router] error', url, error)
      setRouterLoading(false)
    }
    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)
    router.events.on('routeChangeError', handleRouteChangeError)
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
      router.events.off('routeChangeError', handleRouteChangeError)
    }
  }, [router, setRouterLoading])

  const loading = useMemo(() => routerLoading || numPendingQueries > 0, [
    numPendingQueries,
    routerLoading,
  ])
  return loading
}
