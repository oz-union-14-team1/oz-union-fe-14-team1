import { cn } from '@/utils'

type AisummaryProps = {
  content?: string
  className?: string
}

export default function AiSummary({ content, className }: AisummaryProps) {
  return (
    <div
      className={cn(
        'h-30px flex w-160 flex-col gap-4 rounded-xl border border-white/10 bg-surface-elevated p-6 shadow-sm',
        className
      )}
    >
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg from-main-purple to-pink-500 text-white">
          <span className="text-lg">✨</span>
        </div>
        <h2 className="text-lg font-bold text-white">AI 요약</h2>
      </div>

      <div className="overflow-y-auto pr-2 text-[15px] leading-relaxed text-input-placeholer-color">
        {content || '요약된 내용을 불러오는 중입니다...'}
      </div>
    </div>
  )
}
