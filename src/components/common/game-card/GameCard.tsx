'use client'

import { Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { Game } from '@/types/game'
import { cn } from '@/utils'

type GameCardProps = Game & {}

export function GameCard({ id, name, imgUrl }: GameCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsWishlisted((prev) => !prev)
  }

  return (
    <Link href={`/game/${id}`} className="justify-start">
      <div
        className={cn(
          'relative w-full bg-background/40 pt-2 transition-all duration-300',
          'flex flex-col items-center justify-start',
          'hover:scale-105 hover:shadow-2xl',
          'group'
        )}
      >
        <button
          type="button"
          aria-label="찜하기"
          onClick={handleWishlistClick}
          className={cn(
            'absolute top-4 right-4 z-10 size-8 cursor-pointer rounded-full bg-black/40 transition-all',
            'flex flex-col items-center justify-center',
            'hover:bg-white/20',
            isWishlisted ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          )}
        >
          <Heart
            className={cn(
              'size-5 transition-colors',
              isWishlisted
                ? 'fill-main-purple text-btn-main-active'
                : 'text-white'
            )}
          />
        </button>
        <div className="relative mb-3 aspect-3/4 w-full overflow-hidden">
          <Image
            src={imgUrl}
            alt={name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width:1024px) 25vw, 16vw"
            className="object-cover"
          />
        </div>
        <p className="text-lg font-bold text-text-light">{name}</p>
      </div>
    </Link>
  )
}
