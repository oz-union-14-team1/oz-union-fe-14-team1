'use client'

import Image from 'next/image'
import { cn } from '@/utils'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import { useState } from 'react'
import { StaticImageData } from 'next/image'

type GameCardProps = {
  id: string
  name: string
  imgUrl: string | StaticImageData
}

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
          'relative h-90 w-54 bg-background pt-2 transition-all duration-300',
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
            'hover:bg-black/60',
            isWishlisted ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          )}
        >
          <Heart
            className={cn(
              'size-5 transition-colors',
              isWishlisted ? 'fill-red-500 text-red-500' : 'text-white'
            )}
          />
        </button>
        <div className="flex w-full flex-col items-start justify-center gap-5 px-2 text-text-light">
          <Image
            src={imgUrl}
            alt={name}
            width={200}
            height={270}
            className="h-auto w-full"
          />
          <h1 className="text-lg font-bold">{name}</h1>
        </div>
      </div>
    </Link>
  )
}
