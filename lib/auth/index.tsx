import { createContext, ReactNode, useContext } from 'react'
import { Auth } from './Auth'

interface AuthContextValue {
  isAuthenticated: boolean
  auth?: Auth
}

function getAuthContextValue(auth: Auth): AuthContextValue {
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
  auth: Auth | string
  children: ReactNode
}

export function AuthProvider({ auth, children }: AuthProviderProps) {
  if (auth === Auth.jsonRepresentation) {
    auth = new Auth()
    auth.refreshToken()
  }

  return (
    <AuthContext.Provider
      value={getAuthContextValue(auth as Auth)}
      children={children}
    />
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return {
    ...context,
  }
}
