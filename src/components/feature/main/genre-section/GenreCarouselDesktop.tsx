import Image from 'next/image'
import Link from 'next/link'

import { ROUTES_PATHS } from '@/constants'
import { cn } from '@/utils'
import { getGenreAsset } from '@/utils/genreHelper'

import CardOverlay from './CardOverlay'
import GenreSectionNav from './GenreSectionNav'

import type { Genre } from '@/types/api-response/onboarding-response'

type DesktopCarouselProps = {
  genres: Genre[]
  currentPage: number
  totalPages: number
  onPrev: () => void
  onNext: () => void
}

export default function GenreCarouselDesktop({
  genres,
  currentPage,
  totalPages,
  onPrev,
  onNext,
}: DesktopCarouselProps) {
  return (
    <div className="group/carousel relative hidden md:block">
      <div className="flex gap-8">
        {genres.map((genre) => (
          <Link
            key={genre.id}
            href={ROUTES_PATHS.GENRE_DETAIL(genre.slug)}
            className={cn(
              `group/card relative aspect-3/4 w-full overflow-hidden rounded-xl`,
              `md:aspect-video md:w-108.5 md:rounded-[20px]`
            )}
          >
            <Image
              src={getGenreAsset(genre.slug).horizontal}
              alt={genre.genre}
              fill
              className="hidden object-cover transition-transform duration-300 group-hover/card:scale-105 md:block"
              style={{
                objectPosition: getGenreAsset(genre.slug).position ?? 'center',
              }}
            />
            <CardOverlay label={genre.genre} />
          </Link>
        ))}
      </div>
      <GenreSectionNav
        direction="prev"
        disabled={currentPage === 0}
        onClick={onPrev}
        className="hidden md:flex"
      />
      <GenreSectionNav
        direction="next"
        disabled={currentPage === totalPages - 1}
        onClick={onNext}
        className="hidden md:flex"
      />
    </div>
  )
}
