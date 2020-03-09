import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { AuthClient } from '../AuthClient'
import { getAuthClient } from '../getAuthClient'

interface AuthContextValue {
  isAuthenticated: boolean
  auth?: AuthClient
}

function getAuthContextValue(auth: AuthClient): AuthContextValue {
  return {
    isAuthenticated: auth?.isAuthenticated() || false,
    auth,
  }
}

const AuthContext = createContext<AuthContextValue>({
  isAuthenticated: false,
  auth: undefined,
})

interface AuthProviderProps {
  auth?: AuthClient | string
  children: ReactNode
}

export function AuthProvider({ auth, children }: AuthProviderProps) {
  if (!auth) {
    console.log('new auth from SSR')
    auth = getAuthClient()
    auth.refreshToken()
  }

  const [contextValue, setContextValue] = useState(
    getAuthContextValue(auth as AuthClient),
  )

  useEffect(
    () =>
      (auth as AuthClient).onAuthStateChanged(() => {
        setContextValue(getAuthContextValue(auth as AuthClient))
      }),
    [auth, setContextValue],
  )

  return <AuthContext.Provider value={contextValue} children={children} />
}

export function useAuth() {
  const context = useContext(AuthContext)
  return {
    ...context,
  }
}
