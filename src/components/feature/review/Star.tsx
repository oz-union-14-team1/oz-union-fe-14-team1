'use client'

import { StarIcon } from 'lucide-react'
import { useState } from 'react'

import { cn } from '@/utils'

type StarProps = {
  value?: number
  max?: number
  onChange?: (value: number) => void
  readonly?: boolean
  size?: number
  className?: string
}

export function Star({
  value = 0,
  max = 5,
  onChange,
  readonly = false,
  size = 48,
  className,
}: StarProps) {
  const [hoverValue, setHoverValue] = useState<number | null>(null)

  const displayValue = hoverValue || value

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

        const starButtonStyle = cn(
          'relative rounded-sm transition-all duration-200 focus-visible:outline-none',
          !readonly
            ? 'cursor-pointer hover:scale-110 active:scale-95'
            : 'cursor-default'
        )

        return (
          <button
            key={i}
            type="button"
            disabled={readonly}
            className={starButtonStyle}
            onMouseEnter={() => readonly || setHoverValue(starValue)}
            onMouseLeave={() => readonly || setHoverValue(null)}
            onClick={() => readonly || handleClick(starValue)}
          >
            <StarIcon
              size={size}
              className="text-muted-foreground/30 fill-transparent stroke-[1.5]"
            />

            <div
              className="absolute top-0 left-0 overflow-hidden transition-all duration-300"
              style={{ width: `${fillPercentage}%` }}
            >
              <StarIcon
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
