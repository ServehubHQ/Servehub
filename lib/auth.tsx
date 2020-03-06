import nhost from 'nhost-js-sdk'
import { createContext, useContext, useEffect, useState } from 'react'

interface Auth {
  getJWTToken: () => string
  onAuthStateChanged: (callback: () => void) => void
  login: (username: string, password: string) => Promise<void>
  register: (
    email: string,
    username: string,
    password: string,
    register_data?: any,
  ) => Promise<void>
  signInAnonymously: () => Promise<void>
  logout: (allSessions: boolean) => Promise<void>
  activate_account: (secret_token: string) => Promise<void>
  new_password: (secret_token: string, new_password: string) => Promise<void>
}

nhost.initializeApp({
  endpoint: 'https://backend-rf2zfg3c.nhost.app',
})

const auth: Auth | undefined =
  typeof window !== 'undefined' ? nhost.auth() : null

const AuthContext = createContext({
  isAuthenticated: auth && !!auth.getJWTToken(),
})

export function AuthProvider(props: any) {
  const [contextValue, setContextValue] = useState({})

  useEffect(() => {
    auth!.onAuthStateChanged(() => {
      console.log('auth state changed!', {
        isAuthenticated: auth && !!auth.getJWTToken(),
      })

      setContextValue({
        isAuthenticated: auth && !!auth.getJWTToken(),
      })
    })
  }, [setContextValue])

  return <AuthContext.Provider value={contextValue} {...props} />
}

export function useAuth() {
  const context = useContext(AuthContext)
  return {
    auth,
    ...context,
  }
}

export { auth }
