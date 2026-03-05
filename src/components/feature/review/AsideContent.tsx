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
  const avgRating = review?.results?.length
    ? review.results.reduce((sum, r) => sum + r.rating, 0) /
      review.results.length
    : 0

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-1 rounded-card bg-gradient-main py-5">
        <p className="text-4xl font-bold text-white">{avgRating}</p>
        <Star size={24} readonly value={avgRating} />
        <span className="text-sm text-white">
          ({review?.results?.length || 0} 리뷰)
        </span>
      </div>
      {game && <GameInfo gameDetail={game} />}
    </>
  )
}
