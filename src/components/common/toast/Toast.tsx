import { cva, VariantProps } from 'class-variance-authority'

import { ToastType } from '@/types/toast'
import { cn } from '@/utils'

const TOAST_ICON: Record<ToastType, string> = {
  success: '✓',
  warning: '!',
  error: '✕',
} as const

const TOAST_ICON_BG_COLOR: Record<ToastType, string> = {
  success: 'bg-toast-success',
  warning: 'bg-toast-warning',
  error: 'bg-toast-error',
} as const

const ToastVariant = cva(
  cn(
    'flex w-fit min-w-85 items-center gap-3 rounded-xl border px-5 py-3 shadow-md'
  ),
  {
    variants: {
      type: {
        success:
          'bg-toast-success/10 border border-toast-success  text-toast-success',
        warning:
          'bg-toast-warning/10 border border-toast-warning text-toast-warning',
        error: 'bg-toast-error/10 border border-toast-error text-toast-error',
      },
    },
  }
)

export interface ToastProps extends VariantProps<typeof ToastVariant> {
  type: ToastType
  message: string
}

const Toast = ({ type, message }: ToastProps) => {
  return (
    <div className={cn(ToastVariant({ type }))}>
      {/* 아이콘 영역 */}
      <div
        className={cn(
          'flex h-8 w-8 items-center justify-center rounded-full font-bold text-white',
          TOAST_ICON_BG_COLOR[type]
        )}
      >
        {TOAST_ICON[type]}
      </div>

      {/* 메시지 영역 */}
      <span className="text-base font-medium">{message}</span>
    </div>
  )
}
export default Toast
