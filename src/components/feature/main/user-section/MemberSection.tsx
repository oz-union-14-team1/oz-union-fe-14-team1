'use client'

import {
  useRecommendByPreference,
  useRecommendByWhishlist,
} from '@/api/queries/useGameQueries'
import { CarouselSection } from '@/components/common'
import { USER_SECTION_TITLE } from '@/constants'

const FALLBACK_START = 6
const FALLBACK_END = 13

export function MemberSection() {
  const { data: preference } = useRecommendByPreference(true)
  const { data: wishlist } = useRecommendByWhishlist(true)

  const preferenceGames = preference?.results ?? []
  const wishlistGames = wishlist?.results ?? []
  const hasWishlist = wishlistGames.length > 0
  const fallbackGames = preferenceGames.slice(FALLBACK_START, FALLBACK_END)

  // TODO: aiTendency API 연결예정
  const tendency = '" 낭만가 RPG 탐험가 " '

  return (
    <section className="flex flex-col gap-5 md:gap-10">
      <CarouselSection
        title={USER_SECTION_TITLE.PREFERENCE.getTitle(tendency)}
        games={preferenceGames}
      />
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
