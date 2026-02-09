import { createContext } from 'react'

import { Toast } from '@/types/toast'

// Context
interface ToastContextInterface {
  toasts: Toast[]
  addToast: (newToast: Toast) => void
  removeToast: (id: number) => void
}

const ToastContext = createContext<ToastContextInterface>({
  toasts: [],
  addToast: () => {},
  removeToast: () => {},
})

export default ToastContext
