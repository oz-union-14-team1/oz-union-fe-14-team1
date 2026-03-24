'use client'

import { useState } from 'react'

import { Button } from '@/components/common'
import { COMMUNITY_OPTIONS } from '@/constants/communityOptions'
import { MOCK_COMMUNITY_REVIEWS } from '@/mocks/data/mockAllReviews'

import CommunityReviewCard from './CommunityReviewCard'
import CommunityTab from './CommunityTab'

export default function CommunityContent({}) {
  const [activeTab, setActiveTab] = useState('all')

  const reviews = MOCK_COMMUNITY_REVIEWS.results

  const filteredReviews =
    activeTab === 'all'
      ? reviews
      : reviews.filter((review) => review.gameGenres.includes(activeTab))

  return (
    <section className="px-4 py-8">
      <nav className="mb-5 md:mb-10">
        <CommunityTab
          tabs={COMMUNITY_OPTIONS}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      </nav>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-7">
        {filteredReviews?.map((review) => (
          <CommunityReviewCard key={review.id} review={review} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="empty">더보기</Button>
      </div>
    </section>
  )
}
