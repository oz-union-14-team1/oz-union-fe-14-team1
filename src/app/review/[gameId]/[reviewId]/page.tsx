import Image from 'next/image'

import { getReviewDetail } from '@/api/fetchers/reveiwFetchers'
import DefaultProfile from '@/assets/images/profile/profile.jpg'
import { ReviewCard } from '@/components/feature/review'
import ReviewDetail from '@/components/feature/review/ReviewDetail'
import { ReviewDetail as ReviewDetailType } from '@/types/api-response/review-response'
import { getDayDiffFromNow } from '@/utils'

type ReviewDetailPageProps = {
  params: Promise<{ gameId: string; reviewId: string }>
}

export default async function ReviewDetailPage({
  params,
}: ReviewDetailPageProps) {
  const { reviewId } = await params

  let reviewDetail: ReviewDetailType

  try {
    reviewDetail = await getReviewDetail(reviewId)
  } catch (e) {
    console.error(e)

    return (
      <div className="p-10">
        리뷰 정보를 불러오는데 실패했습니다. 잠시후 다시 시도해주세요.
      </div>
    )
  }

  const { comments } = reviewDetail

  return (
    <div className="flex justify-center gap-4 p-10">
      <div className="flex max-w-xl flex-1 flex-col items-center gap-2">
        {/* 리뷰 상세*/}
        <ReviewDetail reviewDetail={reviewDetail} />

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
      {/* TODO: 반응형 */}
      <div className="flex flex-col items-center gap-3">
        <Image
          src="/images/games/game2.png"
          alt="게임 이미지"
          width={200}
          height={300}
          className="rounded-2xl"
        />
        <span className="text-3xl font-bold">문명</span>
      </div>
    </div>
  )
}
