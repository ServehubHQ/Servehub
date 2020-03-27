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
  role: string | undefined | null
}

function getAuthContextValue(authClient?: AuthClient): AuthContextValue {
  return {
    isAuthenticated: authClient?.isAuthenticated() || false,
    role: authClient?.getRole(),
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

  useEffect(() => {
    console.log('[AuthProvider] initial state', getAuthContextValue(client))
    return client?.onAuthStateChanged(() => {
      console.log('[AuthProvider] state change', getAuthContextValue(client))
      setContextValue(getAuthContextValue(client))
    })
  }, [client, setContextValue])

  return <AuthContext.Provider value={contextValue} children={children} />
}

export function useAuth() {
  return useContext(AuthContext)
}
