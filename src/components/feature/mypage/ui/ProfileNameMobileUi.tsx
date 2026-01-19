import { Pencil } from 'lucide-react'

import { cn } from '@/utils'

export default function ProfileNameMobileUi() {
  return (
    <div className="absolute z-7 mt-55 ml-11 flex items-center gap-3">
      <p className="text-center text-[22px] font-semibold whitespace-nowrap text-text-light md:hidden">
        {/* API / ✅ ---------------------------------------------------------------------- */}
        NAME (MOBILE)
      </p>
      {/* 편집 버튼 - Glassmorphism ⭐ */}
      <button
        type="button"
        className={cn(
          'group/edit relative flex size-10 items-center justify-center overflow-hidden rounded-full',
          'border border-white/10 bg-white/5 backdrop-blur-md',
          'transition-all duration-300 md:hidden',
          'hover:scale-110 hover:border-main-purple/30 hover:bg-white/10',
          'hover:shadow-[0_4px_12px_rgba(168,85,247,0.3)]',
          'active:scale-95'
        )}
      >
        <Pencil className="size-4 text-text-light transition-colors duration-300 group-hover/edit:text-main-purple" />
        {/* 그라데이션 오버레이 */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/edit:opacity-100" />
      </button>
    </div>
  )
}
