'use client'

import {
  useRecommendByPreference,
  useRecommendByWhishlist,
} from '@/api/queries/useGameQueries'
import { useUserTendency } from '@/api/queries/usePreference'
import { CarouselSection } from '@/components/common'
import { USER_SECTION_TITLE } from '@/constants'
import { useAuthStore } from '@/store/useAuthStore'

const FALLBACK_START = 6
const FALLBACK_END = 13

export function MemberSection() {
  const { user, accessToken, isInitialized } = useAuthStore((state) => state)
  const isLoggedIn = isInitialized && !!user && !!accessToken

  const { data: preferenceGames = [] } = useRecommendByPreference(isLoggedIn)
  const { data: wishlistGames = [] } = useRecommendByWhishlist(isLoggedIn)
  const { data: tendency } = useUserTendency()

  const hasWishlist = wishlistGames.length > 0
  const fallbackGames = preferenceGames.slice(FALLBACK_START, FALLBACK_END)

  const preferenceTitle = tendency
    ? USER_SECTION_TITLE.PREFERENCE.getTitle(tendency)
    : '🎮 당신을 위한 추천'

  return (
    <section className="flex flex-col gap-5 md:gap-10">
      <CarouselSection title={preferenceTitle} games={preferenceGames} />
      <CarouselSection
        {...USER_SECTION_TITLE.WHISHLIST}
        title={
          hasWishlist
            ? USER_SECTION_TITLE.WHISHLIST.title
            : '☘️ 이런 게임도 좋아하실 수 있어요'
        }
        games={hasWishlist ? wishlistGames : fallbackGames}
      />
    </section>
  )
}
