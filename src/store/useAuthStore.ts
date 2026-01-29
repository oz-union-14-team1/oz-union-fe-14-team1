import { create } from 'zustand'

type AuthState = {
  accessToken: string | null
  setToken: (t: string) => void
  clear: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  setToken: (token) => set({ accessToken: token }),
  clear: () => set({ accessToken: null }),
}))
