'use client'

import { useGetWishlist } from '@/api/queries/useGetWishlist'
import {
  DashBoard,
  MyReviewList,
  Profile,
  WishList,
} from '@/components/feature/mypage'
import { MOCK_REVIEWS } from '@/mocks'

export default function MyPage() {
  const { data: wishlistGames = [] } = useGetWishlist()

  const wishlistCount = wishlistGames.length
  const reviewCount = MOCK_REVIEWS.length
  // TODO: 프로필 이미지 API 연동 필요
  const profileImageUrl = ''

  return (
    <section className="container mx-auto mb-50 max-w-345">
      <div className="flex flex-col items-center justify-between gap-5 px-5 pt-10 lg:flex-row lg:items-start lg:gap-5">
        <div className="w-full pt-5 lg:w-1/2 lg:pl-5">
          <Profile nickname="" image_url={profileImageUrl} />
        </div>

        <div className="w-full max-w-[600px] lg:max-w-3/7">
          <DashBoard wishlistCount={wishlistCount} reviewCount={reviewCount} />
        </div>
      </div>
      <div className="mt-5 px-0 lg:mt-20">
        <WishList />
      </div>
      <div className="my-10 px-5">
        <MyReviewList />
      </div>
    </section>
  )
}
