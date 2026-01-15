import { RotateCcw } from 'lucide-react'
import { forwardRef } from 'react'

interface ResetFilterButtonUiProps {
  onReset: () => void
}

const ResetFilterButtonUi = forwardRef<
  HTMLButtonElement,
  ResetFilterButtonUiProps
>(function ResetFilterButtonUi({ onReset }, ref) {
  return (
    <button
      ref={ref}
      type="button"
      title="초기화 버튼"
      className="group flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-text-light/70 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/10 hover:text-text-light hover:shadow-[0_4px_12px_rgba(168,85,247,0.2)] sm:px-3 sm:py-1.5 sm:text-sm"
      onClick={onReset}
    >
      <RotateCcw className="size-3.5 transition-transform duration-300 group-hover:rotate-180 sm:size-4" />
      초기화
    </button>
  )
})

ResetFilterButtonUi.displayName = 'ResetFilterButtonUi'

export default ResetFilterButtonUi
