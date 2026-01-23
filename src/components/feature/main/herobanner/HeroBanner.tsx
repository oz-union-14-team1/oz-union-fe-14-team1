import { HeroBannerDesktop, HeroBannerMobile } from '@components'

import { Banner } from '@/types/carousel'

type HeroBannerProps = {
  banners: Banner[]
  interval?: number
  autoPlay?: boolean
}

export default function HeroBanner({
  banners,
  interval = 10000,
  autoPlay = true,
}: HeroBannerProps) {
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
