import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

import { ROUTES_PATHS } from '@/constants'
import useCarousel from '@/hooks/useCarousel'
import { getGenreAsset } from '@/utils/genreHelper'

import DotIndicator from '../herobanner/DotIndicator'
import CardOverlay from './CardOverlay'

import type { Genre } from '@/types/api-response/onboarding-response'

type MobileCarouselProps = {
  pages: Genre[][]
  onPageChange: (page: number) => void
}

export default function GenreCarouselMobile({
  pages,
  onPageChange,
}: MobileCarouselProps) {
  const { ref, currentPage, updateNavState, scrollToPage } = useCarousel({
    usePageScroll: true,
  })

  useEffect(() => {
    onPageChange?.(currentPage)
  }, [currentPage, onPageChange])

  return (
    <div className="md:hidden">
      <div
        ref={ref}
        onScroll={updateNavState}
        className="scrollbar-hide flex snap-x snap-mandatory overflow-x-auto px-4"
      >
        {pages.map((pageGenres, pageIndex) => (
          <div
            key={pageIndex}
            className="flex w-full shrink-0 snap-start gap-2"
          >
            {pageGenres.map((genre) => (
              <Link
                key={genre.id}
                href={ROUTES_PATHS.GENRE_DETAIL(genre.slug)}
                className="group/card relative aspect-3/4 flex-1 overflow-hidden rounded-default"
              >
                <Image
                  src={getGenreAsset(genre.slug).vertical}
                  alt={genre.genre}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <CardOverlay label={genre.genre} />
              </Link>
            ))}
          </div>
        ))}
      </div>

      {pages.length > 1 && (
        <div className="mt-4 flex justify-center">
          <DotIndicator
            total={pages.length}
            currentIndex={currentPage}
            onDotClick={scrollToPage}
          />
        </div>
      )}
    </div>
  )
}
