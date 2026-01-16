'use client'

import { Heart } from 'lucide-react'
import { useState } from 'react'

import { cn } from '@/utils'

export function HeartButtonUi() {
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsWishlisted((prev) => !prev)
  }

  return (
    <button
      type="button"
      aria-label="찜하기"
      onClick={handleWishlistClick}
      className={cn(
        'absolute top-5 right-5 z-10 size-9 cursor-pointer overflow-hidden rounded-full border border-white/20 bg-black/60 backdrop-blur-md transition-all duration-300',
        'flex flex-col items-center justify-center',
        'hover:scale-110 hover:border-white/40 hover:bg-black/80 hover:shadow-[0_4px_12px_rgba(168,85,247,0.4)]',
        isWishlisted ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
      )}
    >
      <Heart
        className={cn(
          'size-5 transition-all duration-300',
          isWishlisted
            ? 'fill-red-500 text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]'
            : 'text-white'
        )}
      />
    </button>
  )
}
