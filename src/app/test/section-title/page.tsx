import SectionTitle from '@/components/common/section-title/SectionTitle'
import {
  COMMON_SECTION_TITLES,
  GUEST_SECTION_TITLES,
  USER_SECTION_TITLE,
} from '@/constants'

export default function SectionTitleTestPage() {
  // 동적 타이틀 테스트용
  const mockPlayType = '🔥몰입형 액션 탐험가'

  return (
    <div className="flex min-h-screen flex-col gap-8 bg-background p-10">
      <h1 className="text-2xl font-bold text-white">SectionTitle 테스트</h1>

      <section>
        <p className="mb-2 text-sm text-gray-400">1. 상수들</p>
        <div className="flex flex-col gap-4">
          <SectionTitle {...COMMON_SECTION_TITLES.NEW_RELEASE} />
          <SectionTitle {...GUEST_SECTION_TITLES.INTRODUCE} />
          <SectionTitle {...USER_SECTION_TITLE.WHISHLIST} />
        </div>
      </section>

      <section>
        <p className="mb-2 text-sm text-gray-400">2. playType 적용한 타이틀</p>
        <SectionTitle
          {...GUEST_SECTION_TITLES.INTRODUCE}
          title={`${mockPlayType} 추천 리스트`}
        />
      </section>

      <section>
        <p className="mb-2 text-sm text-gray-400">3. 화살표 없이</p>
        <SectionTitle title="화살표 없는 타이틀" showArrow={false} />
      </section>

      <section>
        <p className="mb-2 text-sm text-gray-400">4. 링크 없이</p>
        <SectionTitle title="링크 없는 타이틀" />
      </section>

      <section>
        <p className="mb-2 text-sm text-gray-400">5. 둘 다 없이</p>
        <SectionTitle title="순수 텍스트 타이틀" showArrow={false} />
      </section>
    </div>
  )
}
