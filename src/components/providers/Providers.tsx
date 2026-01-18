import { ReactNode } from 'react'

import { ToastProvider } from '@/components/providers/ToastProvider'

interface ProvidersProps {
  children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return <ToastProvider>{children}</ToastProvider>
}
