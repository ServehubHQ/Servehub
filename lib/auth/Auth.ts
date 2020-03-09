import axios from 'axios'
import fetch from 'cross-fetch'
import jwtDecode from 'jwt-decode'
import moment from 'moment'
import { NextPageContext } from 'next'
import { destroyCookie, parseCookies, setCookie } from 'nookies'

export class Auth {
  static jsonRepresentation = 'UninitializedAuth'

  baseUrl = 'https://backend-rf2zfg3c.nhost.app'
  authChangeCallbacks: (() => void)[] = []
  context?: NextPageContext

  constructor(context?: NextPageContext) {
    this.context = context
  }

  isAuthenticated(): boolean {
    return this.getToken() !== undefined
  }

  getToken(): string | undefined {
    const cookies = parseCookies(this.context)
    return cookies.token
  }

  onAuthStateChanged(callback: () => void): () => void {
    this.authChangeCallbacks.push(callback)

    return () => {
      const index = this.authChangeCallbacks.indexOf(callback)
      if (index !== -1) {
        this.authChangeCallbacks.splice(index, 1)
      }
    }
  }

  async login(username: string, password: string): Promise<void> {
    try {
      const response = await axios(`${this.baseUrl}/auth/local/login`, {
        method: 'post',
        data: {
          username,
          password,
        },
        withCredentials: true,
      })
      console.log('login success', response)
      this.setTokens(response.data)
    } catch (e) {
      console.log('login fail', e.response)
      throw e.response
    }
  }

  async logout(allSessions?: boolean): Promise<void> {
    const { refreshToken } = parseCookies(this.context)

    destroyCookie(this.context, 'token')
    destroyCookie(this.context, 'refreshToken')

    await axios(`${this.baseUrl}/auth/logout${allSessions ? '-all' : ''}`, {
      data: {
        refresh_token: refreshToken,
      },
      method: 'POST',
    })

    for (const authChangeCallback of this.authChangeCallbacks) {
      console.log('calling authChangeCallbacks')
      authChangeCallback()
    }
  }

  async signup(
    email: string,
    username: string,
    password: string,
    metadata?: any,
  ): Promise<void> {}

  async activateAccount(secretToken: string): Promise<void> {}

  async updatePassword(
    secretToken: string,
    newPassword: string,
  ): Promise<void> {}

  async refreshToken(): Promise<void> {
    const cookies = parseCookies(this.context)
    const { token, refreshToken } = cookies

    if (typeof refreshToken !== 'string' || refreshToken === '') {
      return
    }

    if (token) {
      const { exp: expiry } = jwtDecode(token)
      if (moment.unix(expiry).isAfter()) {
        return
      }
    }

    try {
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

      const data = await response.json()
      console.log('refresh success', data)
      this.setTokens(data)
    } catch (e) {
      console.log('refresh fail', e.response)
      throw e
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
      for (const authChangeCallback of this.authChangeCallbacks) {
        console.log('calling authChangeCallbacks')
        authChangeCallback()
      }
    }
  }

  getJWTToken() {
    console.warn('getJWTToken deprecated')
    return this.getToken()
  }

  toJSON() {
    return Auth.jsonRepresentation
  }
}
