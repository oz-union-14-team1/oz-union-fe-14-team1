'use client'

import { HeroBannerDesktop, HeroBannerMobile } from '@components'

import { useHeroBanner } from '@/api/queries/useHeroBanner'
import GameLoader from '@/components/common/game-loader/GameLoader'
import { Banner } from '@/types/banner'

type HeroBannerProps = {
  banners: Banner[]
  interval?: number
  autoPlay?: boolean
}

export default function HeroBanner({
  interval = 10000,
  autoPlay = true,
}: HeroBannerProps) {
  const { banners, isLoading } = useHeroBanner()

  if (isLoading) {
    return <GameLoader />
  }

  if (!banners || banners.length === 0) {
    return <div>배너를 불러올 수 없습니다</div>
  }

  return (
    <>
      <div className="hidden md:block">
        <HeroBannerDesktop
          banners={banners}
          interval={interval}
          autoPlay={autoPlay}
        />
      </div>
      <div className="block md:hidden">
        <HeroBannerMobile
          banners={banners}
          interval={interval}
          autoPlay={autoPlay}
        />
      </div>
    </>
  )
}
