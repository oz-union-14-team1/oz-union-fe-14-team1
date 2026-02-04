import { create } from 'zustand'

import { UserInfo } from '@/api/fetchers/userInfoFetchers'

/**
 * isInitialized : 인증 상태 판단
 * accesstoken이 변경될 때 공백 시간을 최대한 줄이기 위해 사용
 */
type AuthState = {
  accessToken: string | null
  user: UserInfo | null
  isInitialized: boolean

  setToken: (token: string | null) => void
  setUser: (user: UserInfo | null) => void
  clear: () => void
  setInitialized: (v: boolean) => void
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  user: null,
  isInitialized: false,

  setToken: (token) =>
    set({
      accessToken: token,
    }),

  setUser: (user) =>
    set({
      user,
    }),

  clear: () =>
    set({
      accessToken: null,
      user: null,
      isInitialized: true,
    }),

  setInitialized: (value) =>
    set({
      isInitialized: value,
    }),
}))
