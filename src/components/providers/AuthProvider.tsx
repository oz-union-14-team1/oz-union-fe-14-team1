'use client'

import { useEffect } from 'react'

import { refreshTokenApi } from '@/api/fetchers/authFetchers'
import { useAuthStore } from '@/store/useAuthStore'

/**
 * 리프래쉬 시도를 통해 로그인 상태로 복구하는 역할
 */
export default function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { setToken, clear, setInitialized } = useAuthStore()

  useEffect(() => {
    let mounted = true

    const initAuth = async () => {
      try {
        const accessToken = await refreshTokenApi()

        if (!mounted) {
          return
        }
        setToken(accessToken)
      } catch {
        if (!mounted) {
          return
        }

        clear()
      } finally {
        if (!mounted) {
          return
        }

        setInitialized(true)
      }
    }

    initAuth()

    return () => {
      mounted = false
    }
  }, [setToken, clear, setInitialized])

  return children
}
