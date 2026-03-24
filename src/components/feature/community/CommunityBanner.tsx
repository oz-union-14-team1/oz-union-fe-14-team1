'use client'

import useCarousel from '@/hooks/useCarousel'
import { MOCK_BANNERS } from '@/mocks/mockBanner'

import CommunityBannerItem from './CommunityBannerItem'

export default function CommunityBanner() {
  const { ref, currentPage, scrollPrev, scrollNext, updateNavState } =
    useCarousel({
      usePageScroll: true,
    })

  return (
    <section
      ref={ref}
      onScroll={updateNavState}
      className="mb-5 flex w-full snap-x snap-mandatory overflow-x-hidden py-8 md:mb-10"
    >
      {MOCK_BANNERS.map((banner, index) => (
        <CommunityBannerItem
          key={banner.id}
          banner={banner}
          index={index}
          currentPage={currentPage}
          totalPages={MOCK_BANNERS.length}
          onPrev={scrollPrev}
          onNext={scrollNext}
        />
      ))}
    </section>
  )
}
