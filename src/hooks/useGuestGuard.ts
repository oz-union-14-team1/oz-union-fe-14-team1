import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { ROUTES_PATHS } from '@/constants'
import { useAuthStore } from '@/store/useAuthStore'

/**
 * 로그인 상태면 접근 차단
 * ex) 로그인 페이지
 */
export default function useGuestGuard() {
  const router = useRouter()
  const { accessToken, isInitialized } = useAuthStore()

  useEffect(() => {
    if (!isInitialized) {
      return
    }

    if (accessToken) {
      router.replace(ROUTES_PATHS.MAIN_PAGE)
    }
  }, [accessToken, isInitialized, router])
}
