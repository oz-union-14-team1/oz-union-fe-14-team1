'use client'

import { ReactNode, useCallback, useReducer } from 'react'

import { ToastContainer } from '@/components/common/toast'
import ToastContext from '@/contexts/ToastContext'

import type { Toast } from '@/types/toast'

// Reducer
type Action =
  | { type: 'ADD_TOAST'; payload: Toast }
  | { type: 'REMOVE_TOAST'; payload: number }

function toastReducer(state: Toast[], action: Action): Toast[] {
  switch (action.type) {
    case 'ADD_TOAST':
      return [...state, action.payload]
    case 'REMOVE_TOAST':
      return state.filter((toast) => toast.id !== action.payload)
    default:
      return state
  }
}

// Provider
export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, dispatch] = useReducer(toastReducer, [])

  const addToast = useCallback((newToast: Toast) => {
    dispatch({ type: 'ADD_TOAST', payload: newToast })
  }, [])

  const removeToast = useCallback((id: number) => {
    dispatch({ type: 'REMOVE_TOAST', payload: id })
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  )
}
