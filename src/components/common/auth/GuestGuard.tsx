'use client'

import useGuestGuard from '@/hooks/useGuestGuard'
import { useAuthStore } from '@/store/useAuthStore'

export default function GuestGuard({
  children,
}: {
  children: React.ReactNode
}) {
  const { accessToken, isInitialized } = useAuthStore()

  useGuestGuard()

  if (!isInitialized) {
    return null
  }

  if (accessToken) {
    return null
  }

  return <>{children}</>
}
