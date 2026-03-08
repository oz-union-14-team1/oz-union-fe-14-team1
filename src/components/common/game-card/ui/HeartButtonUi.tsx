'use client'

import { Heart } from 'lucide-react'
import { MouseEvent } from 'react'

import { useToast } from '@/hooks'
import { useWishlistStore } from '@/store/useWishlistStore'
import { cn } from '@/utils'

type HeartButtonUiProps = {
  game: {
    id: number
    name: string
    image: string
  }
}

export function HeartButtonUi({ game }: HeartButtonUiProps) {
  const { triggerToast } = useToast()

  const addWishlist = useWishlistStore((state) => state.addWishlist)
  const removeWishlist = useWishlistStore((state) => state.removeWishlist)
  const isWishlisted = useWishlistStore((state) => state.isWishlisted)

  const wishlisted = isWishlisted(game.id)

  const handleWishlistClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()

    if (wishlisted) {
      removeWishlist(game.id)
      triggerToast('success', '위시리스트에서 제거되었습니다.')
    } else {
      addWishlist({
        id: game.id,
        game: game.id,
        gameName: game.name,
        gameImage: game.image,
        createdAt: new Date().toISOString(),
      })
      triggerToast('success', '위시리스트에 추가되었습니다.')
    }
  }

  return (
    <button
      type="button"
      aria-label="찜하기"
      onClick={handleWishlistClick}
      className={cn(
        'absolute top-1 right-5 z-10 size-9 cursor-pointer overflow-hidden rounded-full border border-white/20 bg-black/60 backdrop-blur-md transition-all duration-300',
        'flex flex-col items-center justify-center',
        'hover:scale-110 hover:border-white/40 hover:bg-black/80 hover:shadow-[0_4px_12px_rgba(168,85,247,0.4)]',
        wishlisted ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
      )}
    >
      <Heart
        className={cn(
          'size-5 transition-all duration-300',
          wishlisted
            ? 'fill-red-500 text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]'
            : 'text-white'
        )}
      />
    </button>
  )
}
