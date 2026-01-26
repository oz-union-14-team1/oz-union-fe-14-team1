'use client'

import { useMemo, useState } from 'react'

import { DotIndicator } from '@/components'
import { DESKTOP_ITEMS, MOBILE_ITEMS } from '@/constants'
import { Genre } from '@/types'
import { countArray } from '@/utils'

import GenreCarouselDesktop from './GenreCarouselDesktop'
import GenreCarouselMobile from './GenreCarouselMobile'

type GenreCarouselProps = {
  genres: Genre[]
}

export default function GenreCarouselSection({ genres }: GenreCarouselProps) {
  const [mobilePage, setMobilePage] = useState(0)
  const [desktopPage, setDesktopPage] = useState(0)

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

  return (
    <section>
      <h2 className="mb-4 text-base font-bold md:text-xl">
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
