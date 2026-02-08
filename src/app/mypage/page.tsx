'use client'

import { useGetMyReviews } from '@/api/queries/useGetMyReviews'
import useGetProfileImage from '@/api/queries/useGetProfileImage'
import { useGetUserMe } from '@/api/queries/useGetUserMe'
import { useGetWishlist } from '@/api/queries/useGetWishlist'
import AuthGuard from '@/components/common/auth/AuthGuard'
import {
  DashBoard,
  MyReviewList,
  Profile,
  WishList,
} from '@/components/feature/mypage'

export default function MyPage() {
  const { data: userMe } = useGetUserMe()
  const profileImageQuery = useGetProfileImage()
  const { data: wishlistGames = [] } = useGetWishlist()
  const { data: myReviews = [] } = useGetMyReviews()

  const wishlistCount = Array.isArray(wishlistGames) ? wishlistGames.length : 0
  const reviewCount = Array.isArray(myReviews) ? myReviews.length : 0

  // React Query가 성공하고 데이터가 있을 때만 이미지 URL 사용
  const profileImageUrl =
    profileImageQuery.isSuccess && profileImageQuery.data?.profileImgUrl
      ? profileImageQuery.data.profileImgUrl
      : ''

  return (
    <AuthGuard>
      <section className="container mx-auto mb-50 max-w-345">
        <div className="flex flex-col items-center justify-between gap-5 px-5 pt-10 lg:flex-row lg:items-start lg:gap-5">
          <div className="w-full pt-5 lg:w-1/2 lg:pl-5">
            <Profile
              nickname={userMe?.nickname ?? ''}
              imageUrl={profileImageUrl}
            />
          </div>

          <div className="w-full max-w-[600px] lg:max-w-3/7">
            <DashBoard
              wishlistCount={wishlistCount}
              reviewCount={reviewCount}
            />
          </div>
        </div>
        <div className="mt-5 px-0 lg:mt-20">
          <WishList />
        </div>
        <div className="my-10 px-5">
          <MyReviewList />
        </div>
      </section>
    </AuthGuard>
  )
}
