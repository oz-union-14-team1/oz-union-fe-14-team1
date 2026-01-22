'use client'

import { ReactNode, useEffect, useState } from 'react'

import { ToastProvider } from '@/components/providers/ToastProvider'

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

  return <ToastProvider>{children}</ToastProvider>
}
