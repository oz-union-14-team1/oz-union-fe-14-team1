import { ChevronLeft, ChevronRight } from 'lucide-react'

import { cn } from '@/utils'

type GenreSectionNavDirection = 'prev' | 'next'

type GenreSectionNavProps = {
  direction: GenreSectionNavDirection
  onClick: () => void
  disabled?: boolean
  className?: string
}

export default function GenreSectionNav({
  direction,
  onClick,
  disabled = false,
  className,
}: GenreSectionNavProps) {
  const isPrev = direction === 'prev'

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!disabled) {
      onClick()
    }
  }

  return (
    <button
      type="button"
      aria-label={isPrev ? 'Previous' : 'Next'}
      onClick={handleClick}
      disabled={disabled}
      className={cn(
        `absolute top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full`,
        `text-text-light/90 opacity-0 transition-opacity group-hover/carousel:opacity-100 disabled:pointer-events-none disabled:opacity-10`,
        isPrev ? 'left-2' : 'right-2',
        disabled && 'pointer-events-none opacity-10',
        className
      )}
    >
      {isPrev ? <ChevronLeft size={100} /> : <ChevronRight size={100} />}
    </button>
  )
}
