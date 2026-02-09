'use client'

import Image from 'next/image'

import { MAIN_BANNER_OFFSET, MAX_SIDE_BANNERS } from '@/constants'
import { useRotation } from '@/hooks'
import { Banner } from '@/types/banner'

import BannerItem from './BannerItem'

type HeroBannerDesktopProps = {
  banners: Banner[]
  interval?: number
  autoPlay?: boolean
}

const fadeTransition = 'transition-opacity duration-500 ease-in-out'
const visibleBanner = 'opacity-100 z-10'
const hiddenBanner = 'opacity-0 z-0'

export default function HeroBannerDesktop({
  banners,
  interval = 3000,
  autoPlay = true,
}: HeroBannerDesktopProps) {
  const { orderedBanner, pause, resume, jumpToSide } = useRotation({
    items: banners,
    interval,
    autoPlay,
  })

  const [mainBanner, ...sideBanners] = orderedBanner

  const getBannerVisibility = (bannerId: Banner['id']) =>
    bannerId === mainBanner.id ? visibleBanner : hiddenBanner

  const handleSideBannerClick = (index: number) => {
    jumpToSide(index + MAIN_BANNER_OFFSET)
  }

  return (
    <section
      className="flex h-110 gap-4"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="relative flex-2 overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 ${fadeTransition} ${getBannerVisibility(banner.id)}`}
          >
            <BannerItem banner={banner} index={index} variant="desktop" />
          </div>
        ))}
      </div>

      <div className="flex flex-1 flex-col gap-2">
        {sideBanners.slice(0, MAX_SIDE_BANNERS).map((banner, index) => (
          <div
            key={banner.id}
            onClick={() => handleSideBannerClick(index)}
            className="relative flex-1 cursor-pointer overflow-hidden transition-all"
          >
            <Image
              src={banner.imgUrl}
              alt={banner.title}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 288px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/85" />
            <p className="absolute bottom-4 left-4 truncate text-lg font-semibold text-text-light hover:text-main-violet">
              {banner.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
