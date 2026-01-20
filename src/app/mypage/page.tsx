import { Profile } from '@/components/feature/mypage'

// test 폴더에서는 반응형 확인이 어려워서 실제페이지에서 작업하며 확인했습니다.
// ================================================================ //
export default function MyPage() {
  return (
    <section className="mx-auto max-w-(--width-container)">
      <div className="px-26.5 py-25.5">
        <Profile imageUrl="" />
      </div>
    </section>
  )
}
// ================================================================ //
