import Image from 'next/image'

import { getGameDetail } from '@/api/fetchers/gameFetchers'
import { getReviewDetail } from '@/api/fetchers/reveiwFetchers'
import DefaultProfile from '@/assets/images/profile/profile.jpg'
import { ReviewCard } from '@/components/feature/review'
import ReviewDetail from '@/components/feature/review/review-detail/ReviewDetail'
import { GameDetail } from '@/types/api-response/game-response'
import { ReviewDetail as ReviewDetailType } from '@/types/api-response/review-response'
import { getDayDiffFromNow } from '@/utils'

type ReviewDetailPageProps = {
  params: Promise<{ gameId: string; reviewId: string }>
}

export default async function ReviewDetailPage({
  params,
}: ReviewDetailPageProps) {
  const { reviewId, gameId } = await params

  let reviewDetail: ReviewDetailType
  let gameDetail: GameDetail

  try {
    reviewDetail = await getReviewDetail(reviewId)
    gameDetail = await getGameDetail(Number(gameId))
  } catch (e) {
    console.error(e)

    return (
      <div className="p-10">
        리뷰 정보를 불러오는데 실패했습니다. 잠시후 다시 시도해주세요.
      </div>
    )
  }

  const { comments } = reviewDetail
  const { id: gameIdFromAPI } = gameDetail

  return (
    <div className="flex flex-col-reverse justify-center gap-4 p-10 sm:flex-row">
      <div className="flex max-w-xl flex-1 flex-col items-center gap-2">
        {/* 리뷰 상세*/}
        <ReviewDetail reviewDetail={reviewDetail} gameId={gameIdFromAPI} />

        {/* 리뷰 댓글*/}
        {comments.map((comment) => {
          const {
            content,
            id,
            author: { profile_image_url: profileImageUrl, nickname },
            created_at: createdAt,
          } = comment

          return (
            <ReviewCard
              className="flex w-full flex-row items-center justify-start gap-4 p-4"
              key={id}
            >
              <Image
                src={profileImageUrl || DefaultProfile}
                alt={`${nickname}의 프로필 이미지`}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex flex-col items-center justify-center gap-2 text-neutral-500">
                <span className="text-xs">{nickname}</span>
                <span className="text-xs">{`${getDayDiffFromNow(createdAt)}일 전`}</span>
              </div>

              <span className="flex-1 text-sm">{content}</span>
            </ReviewCard>
          )
        })}
      </div>

      {/* TODO: api 연결 */}
      <div className="flex w-full flex-col items-center gap-3 sm:w-60">
        <Image
          src={gameDetail.images[0]}
          alt="게임 이미지"
          width={200}
          height={300}
          className="w-full max-w-2xs rounded-2xl"
        />
        <span className="text-center text-3xl font-bold">
          {gameDetail.name}
        </span>
      </div>
    </div>
  )
}
