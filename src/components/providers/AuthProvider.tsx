'use client'

import { useEffect } from 'react'

import { refreshApi } from '@/api/fetchers/authFetchers'
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
    const initAuth = async () => {
      try {
        /**
         * refresh 시도
         */
        const token = await refreshApi()
        /**
         * store 복구
         */
        setToken(token)
      } catch {
        clear()
      } finally {
        /**
         * 3. 인증 초기화 완료 표시
         */
        setInitialized(true)
      }
    }

    initAuth()
  }, [setToken, clear, setInitialized])

  return children
}
