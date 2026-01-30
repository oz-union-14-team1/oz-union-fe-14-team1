import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { API_PATH } from '@/constants/apiPath'
import { useAuthStore } from '@/store/useAuthStore'

/**
 * 로그인 상태면 접근 차단
 */
export default function useGuestGuard() {
  const router = useRouter()
  const { accessToken, isInitialized } = useAuthStore()

  useEffect(() => {
    if (!isInitialized) {
      return
    }

    if (accessToken) {
      router.replace(API_PATH.MAIN_PAGE)
    }
  }, [accessToken, isInitialized, router])
}
