import { DashBoard, Profile } from '@/components/feature/mypage'

// test 폴더에서는 반응형 확인이 어려워서 실제페이지에서 작업하며 확인했습니다.
// ================================================================ //
export default function MyPage() {
  // TODO: 실제 API에서 데이터를 가져와서 사용
  const WISHLIST_COUNT = 15
  const REVIEW_COUNT = 8

  return (
    <section className="container mx-auto max-w-345">
      <div className="flex flex-col items-center justify-between gap-10 px-5 pt-20 lg:flex-row lg:items-start lg:gap-5">
        {/* 프로필 영역 */}
        <div className="w-full lg:w-1/2">
          <Profile imageUrl="" />
        </div>

        {/* 대시보드 영역 */}
        <div className="w-full max-w-full sm:max-w-4/5 md:max-w-5/7 lg:max-w-1/2">
          <DashBoard
            wishlistCount={WISHLIST_COUNT}
            reviewCount={REVIEW_COUNT}
          />
        </div>
      </div>
    </section>
  )
}
// ================================================================ //
