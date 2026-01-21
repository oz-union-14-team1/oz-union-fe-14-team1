'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'

import { cn } from '@/utils'

type WishListCarouselNavUiProps = {
  canScrollPrev: boolean
  canScrollNext: boolean
  scrollPrev: () => void
  scrollNext: () => void
}

export default function WishListCarouselNavUi({
  canScrollPrev,
  canScrollNext,
  scrollPrev,
  scrollNext,
}: WishListCarouselNavUiProps) {
  return (
    <div className="flex shrink-0 gap-1.5 md:gap-2">
      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className={cn(
          'rounded-full bg-white/10 p-1.5 backdrop-blur-md transition-all duration-300 md:p-2',
          'hover:bg-white/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]',
          'disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:shadow-none'
        )}
        aria-label="이전 게임"
      >
        <ChevronLeft className="h-5 w-5 text-text-light md:h-6 md:w-6" />
      </button>

      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        className={cn(
          'rounded-full bg-white/10 p-1.5 backdrop-blur-md transition-all duration-300 md:p-2',
          'hover:bg-white/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]',
          'disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:shadow-none'
        )}
        aria-label="다음 게임"
      >
        <ChevronRight className="h-5 w-5 text-text-light md:h-6 md:w-6" />
      </button>
    </div>
  )
}
