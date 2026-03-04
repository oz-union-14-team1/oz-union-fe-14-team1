import { GameInfo } from '@/components/feature/review/GameInfo'
import { GameDetail } from '@/types/api-response/game-response'
import { ReviewList } from '@/types/api-response/review-response'

import { Star } from './Star'

export default function AsideContent({
  game,
  review,
}: {
  game: GameDetail | undefined
  review: ReviewList | undefined
}) {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-1 rounded-card bg-gradient-main py-5">
        <p className="text-4xl font-bold text-white">{game?.avgScore}</p>
        <Star size={24} readonly value={game?.avgScore} />
        <span className="text-sm text-white">
          ({review?.results?.length || 0} 리뷰)
        </span>
      </div>
      {game && <GameInfo gameDetail={game} />}
    </>
  )
}
