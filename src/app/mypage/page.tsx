// import profile from '@/assets/images/profile/profile.jpg'
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
      <div className="flex flex-col items-center justify-between gap-5 px-5 pt-10 lg:flex-row lg:items-start lg:gap-5">
        <div className="w-full pt-5 lg:w-1/2 lg:pl-5">
          {/* <Profile imageUrl={profile.src} /> */}
          <Profile nickname="" image_url="" />
        </div>

        <div className="w-full max-w-[600px] lg:max-w-3/7">
          <DashBoard
            wishlistCount={WISHLIST_COUNT}
            reviewCount={REVIEW_COUNT}
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
  )
}
