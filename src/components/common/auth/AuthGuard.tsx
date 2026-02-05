'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { ROUTES_PATHS } from '@/constants'
import { useAuthStore } from '@/store/useAuthStore'

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  const { accessToken, isInitialized } = useAuthStore()

  useEffect(() => {
    if (isInitialized && !accessToken) {
      router.replace(ROUTES_PATHS.LOGIN_PAGE)
    }
  }, [isInitialized, accessToken, router])

  if (!isInitialized) {
    return null
  }

  if (!accessToken) {
    return null
  }

  return <>{children}</>
}
