'use client'

import { motion } from 'framer-motion'

import { SWIPE_THRESHOLD } from '@/constants'
import { useRotation } from '@/hooks'
import { Banner } from '@/types/banner'

import BannerItem from './BannerItem'
import DotIndicator from './DotIndicator'

const fadeTransition = 'transition-opacity duration-500 ease-in-out'
const visibleBanner = 'opacity-100 z-10'
const hiddenBanner = 'opacity-0 z-0'

type HeroBannerMobileProps = {
  banners: Banner[]
  interval?: number
  autoPlay?: boolean
}

export default function HeroBannerMobile({
  banners,
  interval = 3000,
  autoPlay = true,
}: HeroBannerMobileProps) {
  const {
    orderedBanner,
    currentIndex,
    next,
    prev,
    jumpToBanner,
    pause,
    resume,
  } = useRotation({ items: banners, interval, autoPlay })

  const currentItem = orderedBanner[0]

  const getBannerVisibility = (bannerId: Banner['id']) =>
    bannerId === currentItem.id ? visibleBanner : hiddenBanner

  return (
    <section className="relative h-75 overflow-hidden">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragStart={pause}
        onDragEnd={(_, info) => {
          resume()
          if (info.offset.x < -SWIPE_THRESHOLD) {
            next()
          }
          if (info.offset.x > SWIPE_THRESHOLD) {
            prev()
          }
        }}
        data-role="gesture-layer"
        aria-hidden
        className="absolute inset-0 z-20 cursor-grab active:cursor-grabbing"
      />

      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 ${fadeTransition} ${getBannerVisibility(banner.id)}`}
        >
          <BannerItem banner={banner} index={index} variant="mobile" />
        </div>
      ))}

      <DotIndicator
        total={banners.length}
        currentIndex={currentIndex}
        onDotClick={jumpToBanner}
      />
    </section>
  )
}
