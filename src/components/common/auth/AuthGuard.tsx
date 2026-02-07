'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { ROUTES_PATHS } from '@/constants'
import { useAuthStore } from '@/store/useAuthStore'

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const accessToken = useAuthStore((s) => s.accessToken)
  const isInitialized = useAuthStore((s) => s.isInitialized)

  console.log('🛡️ AuthGuard:', { accessToken, isInitialized })

  useEffect(() => {
    console.log('🛡️ AuthGuard effect:', { isInitialized, accessToken })
    if (!isInitialized) {
      return
    }

    if (!accessToken) {
      console.log('❌ 토큰 없음 → 로그인 페이지로')
      router.replace(ROUTES_PATHS.LOGIN_PAGE)
    }
  }, [isInitialized, accessToken, router])

  if (!isInitialized) {
    console.log('⏳ 초기화 중...')
    return null
  }

  if (!accessToken) {
    console.log('⏳ 토큰 없음, 리다이렉트 중...')
    return null
  }
  console.log('✅ AuthGuard 통과')
  return <>{children}</>
}
