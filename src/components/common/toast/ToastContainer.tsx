'use client'

import { useContext } from 'react'

import { Toast } from '@/components/common/toast'
import ToastContext from '@/contexts/ToastContext'

export default function ToastContainer() {
  const { toasts } = useContext(ToastContext)

  return (
    <div className="fixed top-18 right-1 z-500 w-full max-w-md space-y-1 p-1">
      {toasts.map(({ type, message, id }) => (
        <Toast key={id} message={message} type={type} />
      ))}
    </div>
  )
}
