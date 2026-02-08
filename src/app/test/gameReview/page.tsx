import { GameReview } from '@/components/layout/review/GameReview'
import { GameDetail } from '@/types/api-response/game-response'

export default function GameReviewPage() {
  const data: GameDetail = {
    id: 1,
    name: '테스트',
    images: [],
    intro: '젤다의전설은 유명한 게임입니다',
    platforms: ['닌텐도'],
    releasedAt: '2024',
    developer: '닌텐도',
    publisher: '퍼블리셔',
    genres: [],
    tags: [],
    avg_score: 0,
  }

  return (
    <div>
      <GameReview gameDetail={data} />
    </div>
  )
}
