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

        const fillPercentage = Math.max(
          0,
          Math.min(100, (displayValue - i) * 100)
        )

        return (
          <button
            key={i}
            type="button"
            disabled={readonly}
            className={`relative rounded-sm transition-all duration-200 focus-visible:outline-none ${!readonly ? 'cursor-pointer hover:scale-110 active:scale-95' : 'cursor-default'} `}
            onMouseEnter={() => !readonly && setHoverValue(starValue)}
            onMouseLeave={() => !readonly && setHoverValue(null)}
            onClick={() => !readonly && handleClick(starValue)}
          >
            <Star
              size={size}
              className="text-muted-foreground/30 fill-transparent stroke-[1.5]"
            />

            {/* //소수점 */}
            <div
              className="absolute top-0 left-0 overflow-hidden transition-all duration-300"
              style={{ width: `${fillPercentage}%` }}
            >
              <Star
                size={size}
                className="fill-yellow-400 stroke-yellow-400 stroke-[1.5] text-yellow-400"
              />
            </div>
          </button>
        )
      })}
    </div>
  )
}
