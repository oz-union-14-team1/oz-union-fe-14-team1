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
  size = 36,
  className,
}: StarProps) {
  const [hoverValue, setHoverValue] = useState<number | null>(null)

  const displayValue = hoverValue ?? value

  const calculateRating = (
    e: React.MouseEvent<HTMLButtonElement>,
    starValue: number
  ) => {
    const { left, width } = e.currentTarget.getBoundingClientRect()
    const percent = (e.clientX - left) / width

    if (starValue === 1) {
      if (percent < 1 / 3) {
        return 0
      }
      if (percent < 2 / 3) {
        return 0.5
      }
      return 1
    }

    return percent <= 0.5 ? starValue - 0.5 : starValue
  }

  const handleMove = (
    e: React.MouseEvent<HTMLButtonElement>,
    starValue: number
  ) => {
    if (readonly) {
      return
    }

    const rating = calculateRating(e, starValue)
    setHoverValue(rating)
  }

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    starValue: number
  ) => {
    if (readonly || !onChange) {
      return
    }
    const rating = calculateRating(e, starValue)
    onChange(rating)
  }

  return (
    <div className={cn('flex items-center gap-0', className)}>
      {Array.from({ length: max }).map((_, i) => {
        const starValue = i + 1
        const fillPercentage = Math.max(
          0,
          Math.min(100, (displayValue - i) * 100)
        )

        const starButtonStyle = cn(
          'relative rounded-sm transition-all duration-100 focus-visible:outline-none',
          !readonly
            ? 'cursor-ew-resize hover:scale-110 active:scale-95'
            : 'cursor-default'
        )

        return (
          <button
            key={i}
            type="button"
            disabled={readonly}
            className={starButtonStyle}
            onMouseMove={(e) => handleMove(e, starValue)}
            onMouseLeave={() => !readonly && setHoverValue(null)}
            onClick={(e) => handleClick(e, starValue)}
            aria-label={`${starValue}점`}
          >
            <StarIcon
              size={size}
              className="text-muted-foreground/30 fill-transparent stroke-[1.5]"
            />

            <div
              className="absolute top-0 left-0 overflow-hidden transition-all duration-100"
              style={{ width: `${fillPercentage}%` }}
            >
              <StarIcon
                size={size}
                className="fill-yellow-400 stroke-yellow-400 stroke-[1.5]"
              />
            </div>
          </button>
        )
      })}
    </div>
  )
}
