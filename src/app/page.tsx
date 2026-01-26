import { GenreCarouselSection, HeroBanner } from '@/components'
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

      <GenreCarouselSection genres={genres} />
    </main>
  )
}
