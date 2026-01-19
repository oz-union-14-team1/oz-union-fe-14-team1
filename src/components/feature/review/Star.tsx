'use client'

import { Star } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/utils'

type StarRatingProps = {
  value: number
  max?: number
  onChange?: (value: number) => void
  readonly?: boolean
  size?: number
  className?: string
}

export function StarRating({
  value,
  max = 5,
  onChange,
  readonly = false,
  size = 48,
  className,
}: StarRatingProps) {
  const [hoverValue, setHoverValue] = React.useState<number | null>(null)

  const displayValue = hoverValue !== null ? hoverValue : value

  const handleClick = (rating: number) => {
    if (!readonly && onChange) {
      onChange(rating)
    }
  }

  return (
    <div className={cn('flex items-center gap-1', className)}>
      {Array.from({ length: max }).map((_, i) => {
        const starValue = i + 1
        const isFilled = starValue <= displayValue

        return (
          <button
            key={i}
            type="button"
            disabled={readonly}
            className={cn(
              'focus-visible:ring-ring rounded-sm transition-transform focus-visible:ring-2 focus-visible:outline-none',
              !readonly && 'cursor-pointer hover:scale-110 active:scale-95',
              readonly && 'cursor-default'
            )}
            onMouseEnter={() => !readonly && setHoverValue(starValue)}
            onMouseLeave={() => !readonly && setHoverValue(null)}
            onClick={() => handleClick(starValue)}
          >
            <Star
              size={size}
              className={cn(
                'stroke-muted-foreground fill-transparent transition-colors',
                isFilled && 'fill-yellow-400 stroke-yellow-400'
              )}
            />
          </button>
        )
      })}
    </div>
  )
}
