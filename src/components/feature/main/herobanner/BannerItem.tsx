import Image from 'next/image'

import { Badge } from '@/components/common'
import { Banner } from '@/types/carousel'
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
    <>
      <Image
        src={banner.imgUrl}
        alt={banner.title}
        fill
        className="pointer-events-none object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/60 to-transparent" />

      <div
        className={cn(
          isDesktop ? 'bottom-8 left-8' : 'absolute right-4 bottom-10 left-4',
          'text-text-light'
        )}
      >
        <div className="flex gap-1">
          {banner.tag.map((tag) => (
            <p
              key={tag}
              className={cn(isDesktop ? 'text-md mb-2' : 'mb-1 text-sm')}
            >
              {tag}
            </p>
          ))}
        </div>
        <h2
          className={cn(
            isDesktop ? 'mb-3 text-4xl' : 'mb-2 text-2xl',
            'font-bold'
          )}
        >
          {banner.title}
        </h2>

        <div className="mb-2 flex gap-1">
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
    </>
  )
}
