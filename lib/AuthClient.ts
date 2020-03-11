import fetch from 'cross-fetch'
import jwtDecode from 'jwt-decode'
import moment from 'moment'
import { NextPageContext } from 'next'
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { config } from './config'

interface ErrorResponseData {
  statusCode: number
  error: string
  message: string
}

export class AuthError extends Error {
  data?: ErrorResponseData

  constructor(data?: ErrorResponseData) {
    super(data?.message)
    this.data = data
  }
}

export class AuthClient {
  baseUrl = config.nhostBackendUrl
  stateChangeCallbacks: (() => void)[] = []
  context?: NextPageContext

  constructor(context?: NextPageContext) {
    this.context = context
  }

  isAuthenticated(): boolean {
    return Boolean(this.getToken())
  }

  getToken(): string | undefined {
    const cookies = parseCookies(this.context)
    return cookies.token
  }

  getRoles(): string[] {
    const cookies = parseCookies(this.context)
    if (!cookies.token) {
      return []
    }

    const parsedToken = jwtDecode(cookies.token) as {
      ['https://hasura.io/jwt/claims']: {
        ['x-hasura-is-anonymous']: 'false'
        ['x-hasura-default-role']: 'user'
        ['x-hasura-allowed-roles']: string[]
        ['x-hasura-user-id']: string
      }
    }

    return parsedToken['https://hasura.io/jwt/claims']['x-hasura-allowed-roles']
  }

  onAuthStateChanged(callback: () => void): () => void {
    this.stateChangeCallbacks.push(callback)
    console.log('onAuthStateChanged added', this.stateChangeCallbacks)

    return () => {
      const index = this.stateChangeCallbacks.indexOf(callback)
      if (index !== -1) {
        this.stateChangeCallbacks.splice(index, 1)
      }
      console.log('onAuthStateChanged removed', this.stateChangeCallbacks)
    }
  }

  authStateChanged() {
    console.log('authStateChanged', this.stateChangeCallbacks)
    for (const authChangeCallback of this.stateChangeCallbacks) {
      authChangeCallback()
    }
  }

  async signup(
    email: string,
    username: string,
    password: string,
    metadata?: any,
  ): Promise<void> {
    const response = await fetch(`${this.baseUrl}/auth/local/register`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        email,
        password,
        register_data: metadata,
      }),
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      },
    })

    if (response.status - 200 > 100) {
      const data = await response.json()
      console.log('signup fail', data)
      throw new AuthError(data)
    } else {
      console.log('signup success')
    }
  }

  async login(username: string, password: string): Promise<void> {
    const response = await fetch(`${this.baseUrl}/auth/local/login`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      },
    })

    const data = await response.json()

    if (response.status - 200 < 100) {
      console.log('login success', data)
      this.setTokens(data)
    } else {
      console.log('login fail', data)
      throw new AuthError(data)
    }
  }

  async logout(allSessions?: boolean): Promise<void> {
    const { refreshToken } = parseCookies(this.context)

    destroyCookie(this.context, 'token')
    destroyCookie(this.context, 'refreshToken')

    await fetch(`${this.baseUrl}/auth/logout${allSessions ? '-all' : ''}`, {
      method: 'POST',
      body: JSON.stringify({
        refresh_token: refreshToken,
      }),
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      },
    })

    this.authStateChanged()
  }

  async refreshToken(): Promise<void> {
    console.log('refreshToken')
    const cookies = parseCookies(this.context)
    const { token, refreshToken } = cookies

    if (typeof refreshToken !== 'string' || refreshToken === '') {
      console.log('refreshToken no refresh token', cookies)
      return
    }

    if (token) {
      const { exp: expiry } = jwtDecode(token)
      if (moment.unix(expiry).isAfter()) {
        console.log('refreshToken jwt not expired')
        return
      }
    }

    const response = await fetch(`${this.baseUrl}/auth/refresh-token`, {
      method: 'post',
      body: JSON.stringify({
        refresh_token: refreshToken,
      }),
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      },
    })

    if (response.status - 200 < 100) {
      const data = await response.json()
      console.log('refresh success', data)
      this.setTokens(data)
    } else {
      console.log('refresh fail, logging out', response)
      this.logout()
    }
  }

  setTokens({
    jwt_token: token,
    refresh_token: refreshToken,
  }: {
    jwt_token: string
    refresh_token: string
  }) {
    const origToken = this.getToken()

    if (!token) {
      throw new Error('invalid token in setTokens')
    }

    setCookie(this.context, 'token', token, {
      sameSite: true,
      maxAge: 15 * 60, // 15 min
    })
    setCookie(this.context, 'refreshToken', refreshToken, {
      sameSite: true,
      maxAge: 365 * 24 * 60 * 60, // 1 year
    })

    if (!origToken) {
      this.authStateChanged()
    }
  }

  toJSON() {
    return null
  }

  async activateAccount(secretToken: string): Promise<void> {
    console.warn('TODO: implement activate account')
  }

  async updatePassword(
    secretToken: string,
    newPassword: string,
  ): Promise<void> {
    console.warn('TODO: update password')
  }
}
