export type ToastType = 'success' | 'warning' | 'error'

export interface Toast {
  id: number
  type: ToastType
  message: string
}
