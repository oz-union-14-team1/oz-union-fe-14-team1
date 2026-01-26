import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

import { GENRE_ASSETS } from '@/assets'
import { ROUTES_PATHS } from '@/constants'
import useCarousel from '@/hooks/useCarousel'
import { Genre } from '@/types'

import CardOverlay from './CardOverlay'

type MobileCarouselProps = {
  pages: Genre[][]
  onPageChange: (page: number) => void
}

export default function GenreCarouselMobile({
  pages,
  onPageChange,
}: MobileCarouselProps) {
  const { ref, currentPage, updateNavState } = useCarousel({
    usePageScroll: true,
  })

  useEffect(() => {
    onPageChange?.(currentPage)
  }, [currentPage, onPageChange])

  return (
    <div className="px-4 md:hidden">
      <div
        ref={ref}
        onScroll={updateNavState}
        className="scrollbar-hide flex snap-x snap-mandatory overflow-x-auto"
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
                className="group/card relative aspect-3/4 flex-1 overflow-hidden rounded-default md:rounded-xl"
              >
                <Image
                  src={GENRE_ASSETS[genre.slug].vertical}
                  alt={genre.name}
                  fill
                  className="object-cover"
                />
                <CardOverlay label={genre.name} />
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
