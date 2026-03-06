import Image from 'next/image'
import Link from 'next/link'

import { Badge } from '@/components/common'
import { ROUTES_PATHS } from '@/constants'
import { Banner } from '@/types/banner'
import { cn, getTagVariant } from '@/utils'

type BannerItemProps = {
  banner: Banner
  index: number
  variant?: 'desktop' | 'mobile'
}

export default function BannerItem({
  banner,
  variant = 'desktop',
}: BannerItemProps) {
  const isDesktop = variant === 'desktop'

  return (
    <Link
      href={ROUTES_PATHS.GAME_DETAIL(banner.id)}
      className="relative block h-full w-full overflow-hidden"
    >
      <Image
        src={banner.imgUrl}
        alt={banner.title}
        fill
        priority
        sizes="(min-width: 1024px) 66vw, 100vw"
        className="pointer-events-none object-cover object-top"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/60 to-transparent" />

      <div
        className={cn(
          isDesktop ? 'bottom-10 left-8' : 'right-4 bottom-5 left-4',
          'absolute z-10 text-text-light'
        )}
      >
        <div className="flex min-h-6 flex-wrap gap-1">
          {banner.tag.map((tag) => (
            <p
              key={tag}
              className={cn(isDesktop ? 'mb-2 text-sm' : 'mb-1 text-xs')}
            >
              {tag}
            </p>
          ))}
        </div>
        <h2
          className={cn(
            isDesktop
              ? 'mb-2 line-clamp-2 min-h-[4rem] text-4xl font-semibold'
              : 'mb-1 line-clamp-2 min-h-[3rem] text-2xl font-bold'
          )}
        >
          {banner.title}
        </h2>

        <div className="flex min-h-7 flex-wrap gap-1">
          {banner.genre.map((genre, index) => (
            <Badge
              key={genre}
              size={isDesktop ? 'md' : 'sm'}
              variant={getTagVariant(index + 1)}
            >
              {genre}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  )
}
