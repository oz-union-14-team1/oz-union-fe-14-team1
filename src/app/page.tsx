import { GenreCarouselSection, HeroBanner } from '@/components'
import { GuestSection } from '@/components/feature/main/user-section/GuestSection'
import { MemberSection } from '@/components/feature/main/user-section/MemberSection'
import { MOCK_GENRES } from '@/mocks'
import { MOCK_BANNERS } from '@/mocks/mockBanner'

/**
 * TODO: API연동 예정
 */
export default function Home() {
  const banners = MOCK_BANNERS.slice(0, 5)
  const genres = MOCK_GENRES

  return (
    <main className="mx-auto my-5 max-w-345 md:my-16">
      <section className="my-5 md:my-16">
        <HeroBanner banners={banners} />
      </section>

      <div className="mb-5">
        <GenreCarouselSection genres={genres} />
      </div>

      <div className="flex flex-col gap-5 md:gap-10">
        <GuestSection />
        <MemberSection />
      </div>
    </main>
  )
}
