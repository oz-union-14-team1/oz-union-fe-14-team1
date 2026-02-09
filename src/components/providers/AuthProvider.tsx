'use client'

import { useEffect, useRef } from 'react'

import { refreshTokenApi } from '@/api/fetchers/authFetchers'
import { useAuthStore } from '@/store/useAuthStore'

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const initialized = useRef(false)
  const { setToken, clear, setInitialized } = useAuthStore()

  useEffect(() => {
    if (initialized.current) {
      return
    }
    initialized.current = true

    const initAuth = async () => {
      try {
        const res = await refreshTokenApi()
        const newToken = res

        if (newToken) {
          setToken(newToken)
        } else {
          clear()
        }
      } catch {
        clear()
      } finally {
        setInitialized(true)
      }
    }

    initAuth()
  }, [setToken, clear, setInitialized])

  return children
}
