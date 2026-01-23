import profile from '@/assets/images/profile/profile.jpg'
import {
  DashBoard,
  MyReviewList,
  Profile,
  WishList,
} from '@/components/feature/mypage'

export default function MyPage() {
  // TODO: 실제 API에서 데이터를 가져와서 사용
  const WISHLIST_COUNT = 15
  const REVIEW_COUNT = 8

  return (
    <section className="container mx-auto mb-50 max-w-345">
      <div className="flex flex-col items-center justify-between gap-10 px-5 pt-20 lg:flex-row lg:items-start lg:gap-5">
        <div className="w-full lg:w-1/2">
          {/* <Profile imageUrl={profile.src} /> */}
          <Profile imageUrl="" />
        </div>

        <div className="w-full max-w-full sm:max-w-4/5 md:max-w-5/7 lg:max-w-1/2">
          <DashBoard
            wishlistCount={WISHLIST_COUNT}
            reviewCount={REVIEW_COUNT}
          />
        </div>
      </div>
      <div className="mt-10 px-0 lg:mt-20">
        <WishList />
      </div>
      <div className="my-10 px-5">
        <MyReviewList />
      </div>
    </section>
  )
}
