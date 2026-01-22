'use client'

import Image from 'next/image'

import { useRotation } from '@/hooks'
import { Banner } from '@/types/carousel'

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

  const [mainBanner, ...sideBanner] = orderedBanner

  const getBannerVisibility = (bannerId: number | string) =>
    bannerId === mainBanner.id ? visibleBanner : hiddenBanner

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
        {sideBanner.slice(0, 4).map((banner, index) => (
          <div
            key={banner.id}
            onClick={() => jumpToSide(index + 1)}
            className="relative flex-1 cursor-pointer overflow-hidden transition-all"
          >
            <Image
              src={banner.imgUrl}
              alt={banner.title}
              fill
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
