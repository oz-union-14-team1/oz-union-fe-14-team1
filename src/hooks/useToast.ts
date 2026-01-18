import { useContext } from 'react'

import ToastContext from '@/contexts/ToastContext'

import type { Toast } from '@/types/toast'

const TIMEOUT = 3000

function useToast() {
  const { addToast, removeToast } = useContext(ToastContext)

  function triggerToast(type: Toast['type'], message: Toast['message']) {
    const newToast: Toast = {
      id: Date.now() + Math.random(),
      type,
      message,
    }

    addToast(newToast)

    setTimeout(() => {
      removeToast(newToast.id)
    }, TIMEOUT)
  }

  return { triggerToast }
}

export default useToast
