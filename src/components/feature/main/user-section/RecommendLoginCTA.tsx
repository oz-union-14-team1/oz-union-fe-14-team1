'use client'

import Link from 'next/link'

import { useGames } from '@/api/queries/useGameQueries'
import GameCard from '@/components/common/game-card/GameCard'
import { GUEST_SECTION_TITLES } from '@/constants/sectionTitle'
// import { MOCK_GAME } from '@/mocks/data/mockGameList'
// import { Game } from '@/types/api-response/game-response'

// type RecommendLoginCTAProps = {
//   games?: Game[]
// }

export default function RecommendLoginCTA() {
  // TODO: API 연결
  const { data } = useGames()
  const games = data?.results ?? []
  const backgroundGames = games.slice(0, 6)
  const { title, href } = GUEST_SECTION_TITLES.RECOMMEND_LOGIN_CTA

  const ctaButtonStyle = [
    'mt-4 rounded-full px-6 py-2 text-md',
    'bg-gradient-main',
    'text-white font-normal',
    'border border-purple-500/60',
    'shadow-active',
    'text-shadow-crisp',
  ].join(' ')

  return (
    <section className="md:max-w-345">
      <div className="relative z-10 mb-4">
        <h2 className="text-base font-bold text-text-light md:text-xl">
          {title}
        </h2>
      </div>

      <div className="absolute grid grid-cols-6 gap-3 opacity-10 blur-sm">
        {backgroundGames.map((game) => (
          <GameCard
            key={game.id}
            id={game.id}
            name={game.name}
            image={game.image || ''}
            variant="background"
          />
        ))}
      </div>

      <div className="absolute bg-background/80" />

      <div className="relative z-10 flex flex-col items-center justify-center py-12 text-center">
        <p className="text-lg font-bold text-text-light">
          당신의 플레이 타입을 발견해보세요.
        </p>
        <p className="mt-2 mb-2 text-sm text-text-light/80">
          <span className="font-bold text-text-light">취향 분석 기반 추천</span>
          과{' '}
          <span className="font-bold text-text-light">위시리스트저장 기능</span>
          을 이용할 수 있어요.
        </p>
        <Link href={href} className={ctaButtonStyle}>
          로그인하고 맞춤 추천받기
        </Link>
      </div>
    </section>
  )
}
