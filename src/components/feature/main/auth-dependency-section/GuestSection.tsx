/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useMemo } from 'react'

import { useGames } from '@/api/queries/useGameQueries'
import { CarouselSection } from '@/components/common'
import { GUEST_SECTION_TITLES } from '@/constants'
import { useAuthStore } from '@/store/useAuthStore'
import { getLatestGames } from '@/utils'

import RecommendLoginCTA from './RecommendLoginCTA'

export function GuestSection() {
  const { data } = useGames()
  const { accessToken } = useAuthStore()

  const isLogin = !!accessToken

  const games = data?.results ?? []
  const popularGames = games.slice(0, 6)

  const latestGames = useMemo(() => getLatestGames(games), [games])
  return (
    <section className="flex flex-col gap-5 md:gap-10">
      <div className="mb:10 md:mb-20">{!isLogin && <RecommendLoginCTA />}</div>

      <CarouselSection
        {...GUEST_SECTION_TITLES.INTRODUCE}
        games={latestGames}
      />

      <CarouselSection {...GUEST_SECTION_TITLES.POPULAR} games={popularGames} />
    </section>
  )
}
