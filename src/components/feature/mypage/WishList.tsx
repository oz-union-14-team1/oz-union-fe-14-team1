'use client'

import { useWishlistCarousel } from '@/hooks'
import { MOCK_GAMES } from '@/mocks'
import { useWishlistStore } from '@/store/useWishlistStore'

import {
  WishListCarouselNavUi,
  WishListCarouselUi,
  WishListEmptyUi,
  WishListTitleUi,
} from './ui'

export default function WishList() {
  const { wishlistedGameIds } = useWishlistStore()
  const { emblaRef, canScrollPrev, canScrollNext, scrollPrev, scrollNext } =
    useWishlistCarousel()

  // 위시리스트에 등록된 게임만 필터링
  const wishlistGames = MOCK_GAMES.filter((game) =>
    wishlistedGameIds.includes(game.id)
  )

  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute -top-20 left-0 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl md:h-96 md:w-96" />
      <div className="pointer-events-none absolute right-0 -bottom-20 h-64 w-64 rounded-full bg-pink-500/10 blur-3xl md:h-96 md:w-96" />

      <div className="relative p-0 backdrop-blur-sm md:p-0">
        <div className="mb-2 flex items-center justify-between gap-2 px-4 md:mb-6 md:px-8">
          <WishListTitleUi wishlistCount={wishlistGames.length} />

          {wishlistGames.length > 0 && (
            <WishListCarouselNavUi
              canScrollPrev={canScrollPrev}
              canScrollNext={canScrollNext}
              scrollPrev={scrollPrev}
              scrollNext={scrollNext}
            />
          )}
        </div>

        {wishlistGames.length === 0 ? (
          <WishListEmptyUi />
        ) : (
          <WishListCarouselUi
            emblaRef={emblaRef}
            wishlistGames={wishlistGames}
            canScrollPrev={canScrollPrev}
            canScrollNext={canScrollNext}
          />
        )}
      </div>
    </div>
  )
}
