import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { AuthClient } from './AuthClient'

interface AuthContextValue {
  isAuthenticated: boolean
  authClient?: AuthClient
}

function getAuthContextValue(authClient?: AuthClient): AuthContextValue {
  return {
    isAuthenticated: authClient?.isAuthenticated() || false,
    authClient,
  }
}

const AuthContext = createContext<AuthContextValue>(getAuthContextValue())

interface AuthProviderProps {
  client?: AuthClient
  children: ReactNode
}

export function AuthProvider({ client, children }: AuthProviderProps) {
  const [contextValue, setContextValue] = useState(getAuthContextValue(client))

  useEffect(
    () =>
      client?.onAuthStateChanged(() => {
        setContextValue(getAuthContextValue(client))
      }),
    [client, setContextValue],
  )

  return <AuthContext.Provider value={contextValue} children={children} />
}

export function useAuth() {
  return useContext(AuthContext)
}
