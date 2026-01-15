type ToastVariant = 'error' | 'success' | 'warning'

export interface ToastProps {
  type: ToastVariant
  message: string
}

const TOAST_VARIANTS: Record<
  ToastVariant,
  { container: string; iconBg: string; icon: string }
> = {
  error: {
    container:
      'bg-[var(--color-toast-error)]/10 border-[var(--color-toast-error)] text-[var(--color-toast-error)]',
    iconBg: 'bg-[var(--color-toast-error)]',
    icon: '✕',
  },
  success: {
    container:
      'bg-[var(--color-toast-warning)]/10 border-[var(--color-toast-warning)] text-[var(--color-toast-warning)]',
    iconBg: 'bg-[var(--color-toast-warning)]',
    icon: '!',
  },
  warning: {
    container:
      'bg-[var(--color-toast-success)]/10 border-[var(--color-toast-success)] text-[var(--color-toast-success)]',
    iconBg: 'bg-[var(--color-toast-success)]',
    icon: '✓',
  },
}

const Toast = ({ type, message }: ToastProps) => {
  const style = TOAST_VARIANTS[type]

  return (
    <div
      className={`flex w-fit min-w-[340px] items-center gap-3 rounded-xl border px-5 py-3 shadow-md ${style.container}`}
    >
      {/* 아이콘 영역 */}
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-full font-bold text-white ${style.iconBg} ${style.iconBg}`}
      >
        {style.icon}
      </div>

      {/* 메시지 영역 */}
      <span className="text-[15px] font-medium">{message}</span>
    </div>
  )
}
export default Toast
