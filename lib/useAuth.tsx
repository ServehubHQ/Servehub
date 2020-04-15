import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { AuthClient } from './AuthClient'
import Maybe from 'graphql/tsutils/Maybe'

interface AuthContextValue {
  isAuthenticated: boolean
  authClient?: AuthClient
  role: Maybe<string>
  userId: Maybe<string>
  isAdmin: boolean
}

function getAuthContextValue(authClient?: AuthClient): AuthContextValue {
  const roles = authClient?.getAllowedRoles()
  return {
    isAuthenticated: authClient?.isAuthenticated() || false,
    role: authClient?.getRole(),
    userId: authClient?.getUserId(),
    authClient,
    isAdmin: !!roles && roles.indexOf('admin') > -1,
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
