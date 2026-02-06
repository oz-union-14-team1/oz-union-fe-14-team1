'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import { getUserInfoApi, UserInfo } from '@/api/fetchers/userInfoFetchers'
import DefaultProfile from '@/assets/images/profile/profile.jpg'
import { Button } from '@/components/common'
import { ReviewCard } from '@/components/feature/review'
import ReveiwDetailCommentArea from '@/components/feature/review/review-detail/ReveiwDetailCommentArea'
import ReviewDeleteButton from '@/components/feature/review/review-detail/ReviewDeleteButton'
import ReviewDetailReviewEditForm from '@/components/feature/review/review-detail/ReviewDetailReviewEditForm'
import { getDayDiffFromNow } from '@/utils'

import type { ReviewDetail } from '@/types/api-response/review-response'

type ReviewDetailProps = {
  reviewDetail: ReviewDetail
  gameId: string | number
}

export default function ReviewDetail({
  reviewDetail,
  gameId,
}: ReviewDetailProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [isImageError, setIsImageError] = useState(false)
  const [userData, setUserData] = useState<UserInfo>()

  const {
    createdAt,
    author: { nickname, profileImgUrl, id: authorId },
    content,
    id: reviewId,
    rating,
  } = reviewDetail

  useEffect(() => {
    // useQuery를 사용한 훅을 사용하니 캐싱된 데이터와 충돌이 일어나 그냥 fetch 했습니다.
    getUserInfoApi().then((data) => {
      setUserData(data)
    })
  }, [])

  const isAuthor = userData?.id === authorId

  return (
    <ReviewCard className="flex w-full flex-col items-start gap-4 p-4">
      <div className="flex w-full flex-row items-center justify-start gap-4">
        <Image
          src={!profileImgUrl || isImageError ? DefaultProfile : profileImgUrl}
          alt={`${nickname}의 프로필 이미지`}
          width={50}
          height={50}
          className="rounded-full"
          onError={() => {
            setIsImageError(true)
          }}
        />

        <div className="flex flex-1 flex-col items-start justify-center gap-2 text-neutral-500">
          <span className="text-sm">{nickname}</span>
          <span className="text-sm">{`${getDayDiffFromNow(createdAt)}일 전`}</span>
        </div>

        {isAuthor ? (
          <div className="flex flex-row items-center justify-center gap-2">
            <Button
              variant={'gray'}
              size="sm"
              onClick={() => {
                if (isAuthor) {
                  setIsEditing(true)
                }
              }}
            >
              수정
            </Button>
            <ReviewDeleteButton
              reviewId={reviewId}
              gameId={gameId}
              isAuthor={isAuthor}
            />
          </div>
        ) : null}
      </div>

      {isEditing ? (
        // 리뷰 수정 기능
        <ReviewDetailReviewEditForm
          reviewId={reviewId}
          defaultContent={content}
          defaultRating={rating}
          setIsEditing={setIsEditing}
        />
      ) : (
        <p>{content}</p>
      )}

      {/* 답글달기 기능*/}
      <ReveiwDetailCommentArea reviewId={reviewId} />
    </ReviewCard>
  )
}
