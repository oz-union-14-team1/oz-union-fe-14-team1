'use client'

import { ReactNode, useEffect, useState } from 'react'

import TanstackQueryProvider from '@/components/providers/TanstackQueryProvider'
import { ToastProvider } from '@/components/providers/ToastProvider'

import AuthProvider from './AuthProvider'
interface ProvidersProps {
  children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  const [isMSWReady, setIsMSWReady] = useState(false)

  useEffect(() => {
    const initMSW = async () => {
      const { worker } = await import('@/mocks/browser')
      await worker.start()
      setIsMSWReady(true)
    }

    initMSW()
  }, [])

  if (!isMSWReady) {
    return null
  }

  return (
    <TanstackQueryProvider>
      <AuthProvider>
        <ToastProvider>{children}</ToastProvider>
      </AuthProvider>
    </TanstackQueryProvider>
  )
}
