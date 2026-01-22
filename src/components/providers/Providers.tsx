'use client'

import { ReactNode, useEffect } from 'react'

import { ToastProvider } from '@/components/providers/ToastProvider'

export async function initMSW() {
  const { worker } = await import('@/mocks/browser')
  await worker.start()
}

interface ProvidersProps {
  children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  useEffect(() => {
    initMSW()
  }, [])

  return <ToastProvider>{children}</ToastProvider>
}
