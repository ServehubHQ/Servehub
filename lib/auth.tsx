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
  logout: (allSessions?: boolean) => Promise<void>
  activate_account: (secret_token: string) => Promise<void>
  new_password: (secret_token: string, new_password: string) => Promise<void>
}

interface AuthContextValue {
  isAuthenticated: boolean
  logout: () => void
}

nhost.initializeApp({
  endpoint: 'https://backend-rf2zfg3c.nhost.app',
})

const auth: Auth | undefined =
  typeof window !== 'undefined' ? nhost.auth() : null

function getAuthContextValue(): AuthContextValue {
  return {
    isAuthenticated: !!auth && !!auth.getJWTToken(),
    logout: () => auth?.logout(),
  }
}

const AuthContext = createContext<AuthContextValue>(getAuthContextValue())

export function AuthProvider(props: any) {
  const [contextValue, setContextValue] = useState({})

  useEffect(() => {
    console.log('register onAuthStateChanged', getAuthContextValue())

    auth!.onAuthStateChanged(() => {
      console.log('auth state changed!', getAuthContextValue())
      setContextValue(getAuthContextValue())
    })

    setContextValue(getAuthContextValue())
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
