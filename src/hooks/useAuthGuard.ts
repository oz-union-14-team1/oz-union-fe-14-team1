'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { ROUTES_PATHS } from '@/constants'
import { useAuthStore } from '@/store/useAuthStore'

/**
 * 인증 가드 훅
 * 인증값이 없을 경우 로그인페이지로 강제 이동
 * TODO: API 연결 후 필요한 페이지에 기입 ex) 마이페이지
 */
export default function useAuthGuard() {
  const router = useRouter()
  const { accessToken, isInitialized } = useAuthStore()

  useEffect(() => {
    if (!isInitialized) {
      return
    }

    if (!accessToken) {
      router.replace(ROUTES_PATHS.LOGIN_PAGE)
    }
  }, [accessToken, isInitialized, router])
}
