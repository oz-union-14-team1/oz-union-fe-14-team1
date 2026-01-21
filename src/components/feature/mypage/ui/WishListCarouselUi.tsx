'use client'

import { GameCard } from '@/components/common/game-card'

import type { StaticImageData } from 'next/image'

type WishListCarouselUiProps = {
  emblaRef: (node: HTMLDivElement | null) => void
  wishlistGames: Array<{
    id: string
    name: string
    imgUrl: string | StaticImageData
  }>
  canScrollPrev: boolean
  canScrollNext: boolean
}

export default function WishListCarouselUi({
  emblaRef,
  wishlistGames,
  canScrollPrev,
  canScrollNext,
}: WishListCarouselUiProps) {
  return (
    <div className="relative">
      {canScrollPrev && (
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-12 bg-gradient-to-r from-background/100 via-background/30 to-transparent md:w-20" />
      )}
      {canScrollNext && (
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-12 bg-gradient-to-l from-background/100 via-background/30 to-transparent md:w-20" />
      )}
      <div className="overflow-hidden py-0 md:py-4" ref={emblaRef}>
        <div className="flex -space-x-8 md:gap-6 md:space-x-0 md:pl-4">
          {wishlistGames.map((game, index) => (
            <div
              key={game.id}
              className="animate-in fade-in slide-in-from-bottom-4 flex-[0_0_auto] scale-[0.8] md:scale-100"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'backwards',
              }}
            >
              <GameCard id={game.id} name={game.name} imgUrl={game.imgUrl} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
