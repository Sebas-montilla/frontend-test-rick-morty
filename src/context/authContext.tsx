'use client'

import React, { createContext, useCallback, useContext, useMemo } from 'react'
import Cookie from 'js-cookie'

interface AuthTokens {
  token: string
}

export const AuthContext = createContext({
  login: (authTokens: AuthTokens) => {},
  logout: () => {}
})

export default function AuthContextProvider({
  children
}: {
  children: React.ReactNode
}) {
  const login = useCallback(function (authTokens: AuthTokens) {
    Cookie.set('authTokens', JSON.stringify(authTokens))
  }, [])

  const logout = useCallback(function () {
    Cookie.remove('authTokens')
  }, [])

  const value = useMemo(
    () => ({
      login,
      logout
    }),
    [login, logout]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
  return useContext(AuthContext)
}
