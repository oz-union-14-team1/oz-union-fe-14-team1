import { HeroBanner } from '@/components'
import { MOCK_BANNERS } from '@/mocks/mockBanner'

/**
 * TODO: API연동 예정
 */
export default function Home() {
  const banners = MOCK_BANNERS.slice(0, 5)

  return (
    <main className="mx-auto my-14 max-w-345">
      <HeroBanner banners={banners} />
    </main>
  )
}
