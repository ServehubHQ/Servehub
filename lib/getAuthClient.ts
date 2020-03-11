import { AuthClient } from './AuthClient'
import { NextPageContext } from 'next'

let globalAuth: AuthClient

export function getAuthClient(context?: NextPageContext) {
  const isBrowser = typeof window !== 'undefined'

  if (isBrowser) {
    if (!globalAuth) {
      globalAuth = new AuthClient()
      setInterval(() => globalAuth.refreshToken(), 1000 * 60 * 10)
    }
    return globalAuth
  } else {
    if (!context) {
      throw new Error('Missing request context in server Auth initialization')
    }
    return new AuthClient(context)
  }
}
