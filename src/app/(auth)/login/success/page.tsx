'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { ROUTES_PATHS } from '@/constants'
import { useToast } from '@/hooks'
import { useAuthStore } from '@/store/useAuthStore'

export default function LoginSuccessPage() {
  console.log('LoginSuccessPage')
  const router = useRouter()
  const searchParams = useSearchParams()
  const { setToken } = useAuthStore()
  const { triggerToast } = useToast()

  useEffect(() => {
    const token = searchParams.get('token')
    const error = searchParams.get('error')

    if (token) {
      setToken(token)
      triggerToast('success', '로그인 성공!')

      router.replace(ROUTES_PATHS.MAIN_PAGE)
      return
    }

    if (error) {
      triggerToast('error', '소셜 로그인 실패')

      router.replace(ROUTES_PATHS.LOGIN_PAGE)
    }
  }, [searchParams, router, setToken, triggerToast])

  return (
    <div className="flex h-screen items-center justify-center text-lg">
      로그인 처리 중입니다...
    </div>
  )
}
