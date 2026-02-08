'use client'

import { useMemo, useState } from 'react'

import { useGenres } from '@/api/queries/usGenres'
import { DotIndicator } from '@/components'
import GameLoader from '@/components/common/game-loader/GameLoader'
import { DESKTOP_ITEMS, MOBILE_ITEMS } from '@/constants'
import { countArray } from '@/utils'
import { filterAndMapGenres } from '@/utils/genreHelper'

import GenreCarouselDesktop from './GenreCarouselDesktop'
import GenreCarouselMobile from './GenreCarouselMobile'

export default function GenreCarouselSection() {
  const [mobilePage, setMobilePage] = useState(0)
  const [desktopPage, setDesktopPage] = useState(0)

  const { data: apiGenres, isLoading } = useGenres()
  const genres = useMemo(
    () => (apiGenres ? filterAndMapGenres(apiGenres) : []),
    [apiGenres]
  )

  const mobilePages = useMemo(() => countArray(genres, MOBILE_ITEMS), [genres])
  const desktopPages = useMemo(
    () => countArray(genres, DESKTOP_ITEMS),
    [genres]
  )
  const currentGenres = desktopPages[desktopPage] ?? []

  const handlePrevPage = () => {
    setDesktopPage((prev) => Math.max(prev - 1, 0))
  }

  const handleNextPage = () => {
    setDesktopPage((prev) => Math.min(prev + 1, desktopPages.length - 1))
  }

  if (isLoading) {
    return <GameLoader />
  }

  return (
    <section>
      <h2 className="mb-4 px-4 text-base font-bold md:text-xl">
        🎮 장르별 게임 둘러보기
      </h2>

      <GenreCarouselMobile pages={mobilePages} onPageChange={setMobilePage} />
      {mobilePages.length > 1 && (
        <div className="mt-4 flex justify-center md:hidden">
          <DotIndicator
            total={mobilePages.length}
            currentIndex={mobilePage}
            onDotClick={setMobilePage}
          />
        </div>
      )}

      <GenreCarouselDesktop
        genres={currentGenres}
        currentPage={desktopPage}
        totalPages={desktopPages.length}
        onPrev={handlePrevPage}
        onNext={handleNextPage}
      />
      {desktopPages.length > 1 && (
        <div className="mt-6 hidden justify-center md:flex">
          <DotIndicator
            total={desktopPages.length}
            currentIndex={desktopPage}
            onDotClick={setDesktopPage}
          />
        </div>
      )}
    </section>
  )
}
