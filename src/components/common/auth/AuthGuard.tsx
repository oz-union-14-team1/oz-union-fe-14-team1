'use client'

import useAuthGuard from '@/hooks/useAuthGuard'

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  useAuthGuard()

  return <>{children}</>
}
