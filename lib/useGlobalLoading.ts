import { useMemo, useState, useEffect } from 'react'
import { useApolloNetworkStatus } from './getApolloClient'
import { useRouter } from 'next/router'

export function useGlobalLoading() {
  const { numPendingQueries } = useApolloNetworkStatus()
  const router = useRouter()
  const [routerLoading, setRouterLoading] = useState(false)

  useEffect(() => {
    const handleRouteChangeStart = () => setRouterLoading(true)
    const handleRouteChangeComplete = () => setRouterLoading(false)
    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [router, setRouterLoading])

  const loading = useMemo(() => routerLoading || numPendingQueries > 0, [
    numPendingQueries,
    routerLoading,
  ])
  return loading
}
