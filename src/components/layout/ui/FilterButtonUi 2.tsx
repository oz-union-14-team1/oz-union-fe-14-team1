'use client'

import { Funnel } from 'lucide-react'
import { forwardRef } from 'react'

import { cn } from '@/utils'

export interface FilterButtonUiProps {
  hasActiveFilters: boolean
  onClick: () => void
  className?: string
}

const FilterButtonUi = forwardRef<HTMLButtonElement, FilterButtonUiProps>(
  function FilterButtonUi({ hasActiveFilters, onClick, className }, ref) {
    return (
      <button
        ref={ref}
        title="필터 버튼"
        type="button"
        onClick={onClick}
        className={cn(
          'group pointer-events-auto relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full transition-all duration-300',
          hasActiveFilters
            ? 'border border-main-purple/30 bg-gradient-to-r from-main-purple/20 via-main-violet/20 to-main-fuchsia/20 shadow-lg shadow-main-purple/30 backdrop-blur-md hover:scale-105 hover:border-main-purple/50 hover:shadow-main-purple/50'
            : 'border border-white/10 bg-white/5 backdrop-blur-md hover:scale-105 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_4px_12px_rgba(168,85,247,0.2)]',
          className
        )}
      >
        <Funnel
          fill="currentColor"
          strokeWidth={0.5}
          className={cn(
            'relative z-10 size-5 transition-all duration-300',
            hasActiveFilters
              ? 'text-main-purple'
              : 'text-text-light group-hover:text-main-purple'
          )}
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </button>
    )
  }
)

FilterButtonUi.displayName = 'FilterButtonUi'

export default FilterButtonUi
