'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'

import { cn } from '@/utils'

type CarouselNavProps = {
  onPrev: () => void
  onNext: () => void
  hasPrev?: boolean
  hasNext?: boolean
  className?: string
}

export default function CarouselNav({
  onPrev,
  onNext,
  hasPrev = true,
  hasNext = true,
}: CarouselNavProps) {
  const buttonStyle = cn(
    'rounded-full p-2 text-text-light transition-all border border-neutral-400/20',
    'hover:bg-neutral-200/20 disabled:opacity-30 disabled:cursor-not-allowed'
  )
  return (
    <nav className="flex items-center gap-2">
      <button
        onClick={onPrev}
        disabled={!hasPrev}
        className={buttonStyle}
        title="Previous"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={onNext}
        disabled={!hasNext}
        className={buttonStyle}
        title="Next"
      >
        <ChevronRight size={16} />
      </button>
    </nav>
  )
}
