import Image from 'next/image'
import Link from 'next/link'

import { ROUTES_PATHS } from '@/constants'
import { Banner } from '@/types/banner'

import SectionNav from './SectionNav'

type CommunityBannerItemProps = {
  banner: Banner
  index: number
  currentPage: number
  totalPages: number
  onPrev: () => void
  onNext: () => void
}

export default function CommunityBannerItem({
  banner,
  currentPage,
  totalPages,
  onPrev,
  onNext,
}: CommunityBannerItemProps) {
  return (
    <div className="relative h-110 min-h-110 w-full shrink-0 snap-start overflow-hidden">
      <Link
        href={ROUTES_PATHS.GAME_DETAIL(banner.id)}
        className="absolute inset-0"
      >
        <Image
          src={banner.imgUrl}
          alt={banner.title}
          fill
          priority
          sizes="(min-width: 1024px) 66vw, 100vw"
          className="pointer-events-none object-cover object-top"
        />
        <div className="absolute right-0 bottom-0 left-0 bg-linear-to-t from-black/60 to-transparent p-6">
          <h2 className="line-clamp-2 text-4xl font-semibold text-white">
            {banner.title}
          </h2>
        </div>
      </Link>

      <SectionNav
        direction="prev"
        disabled={currentPage === 0}
        onClick={onPrev}
        className="absolute hidden md:flex"
      />
      <SectionNav
        direction="next"
        disabled={currentPage === totalPages - 1}
        onClick={onNext}
        className="absolute hidden md:flex"
      />
    </div>
  )
}
