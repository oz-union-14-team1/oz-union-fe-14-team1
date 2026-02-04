'use client'

import useAuthGuard from '@/hooks/useAuthGuard'
import { useAuthStore } from '@/store/useAuthStore'

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { accessToken, isInitialized } = useAuthStore()

  useAuthGuard()

  if (!isInitialized) {
    return null
  }

  if (!accessToken) {
    return null
  }

  return <>{children}</>
}
