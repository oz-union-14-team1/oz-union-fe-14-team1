import { CarouselSection } from '@/components/common/carousel-section/CarouselSection'
import {
  COMMON_SECTION_TITLES,
  GUEST_SECTION_TITLES,
  USER_SECTION_TITLE,
} from '@/constants'
import { DUMMY_GAMES } from '@/mocks'

export default function CarouselTestPage() {
  return (
    <main className="min-h-screen bg-neutral-900 p-8">
      <h1 className="mb-10 text-2xl font-bold text-white">
        CarouselSection 테스트
      </h1>

      <div className="mb-12">
        <p className="mb-4 text-sm text-neutral-400">1. 기본(arrow 있음)</p>
        <CarouselSection
          {...COMMON_SECTION_TITLES.NEW_RELEASE}
          games={DUMMY_GAMES}
        />
      </div>

      <div className="mb-12">
        <p className="mb-4 text-sm text-neutral-400">2. 동적타이틀(선호기반)</p>
        <CarouselSection
          {...GUEST_SECTION_TITLES.POPULAR}
          games={DUMMY_GAMES}
        />
      </div>

      <div className="mb-12">
        <p className="mb-4 text-sm text-neutral-400">3. arrow 없음</p>
        <CarouselSection
          {...USER_SECTION_TITLE.WHISHLIST}
          showArrow={false}
          games={DUMMY_GAMES}
        />
      </div>

      <div className="mb-12">
        <p className="mb-4 text-sm text-neutral-400">4. 게임이 적은 경우</p>
        <CarouselSection
          title="게임 6개미만인 경우"
          games={DUMMY_GAMES.slice(0, 2)}
        />
      </div>
    </main>
  )
}
