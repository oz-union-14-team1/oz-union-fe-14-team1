'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { ROUTES_PATHS } from '@/constants'
import { useAuthStore } from '@/store/useAuthStore'

export default function GuestGuard({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const { accessToken, isInitialized } = useAuthStore()

  useEffect(() => {
    if (isInitialized && accessToken) {
      router.replace(ROUTES_PATHS.MAIN_PAGE)
    }
  }, [isInitialized, accessToken, router])

  if (!isInitialized) {
    return null
  }

  return <>{children}</>
}
