'use client'

import Image from 'next/image'
import { MouseEventHandler, useState } from 'react'

import useDeleteReveiw from '@/api/queries/useDeleteReview'
import DefaultProfile from '@/assets/images/profile/profile.jpg'
import { Button } from '@/components/common'
import { ReviewCard } from '@/components/feature/review'
import ReveiwDetailCommentArea from '@/components/feature/review/review-detail/ReveiwDetailCommentArea'
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

  const { mutate: deleteReview, isPending: isDeleteReviewPending } =
    useDeleteReveiw(gameId)

  const {
    created_at: createdAt,
    author: { nickname, profile_image_url: profileImageUrl },
    content,
    id: reviewId,
  } = reviewDetail

  const handleReviewDeleteButtonClick: MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    e.preventDefault()
    deleteReview({ reviewId })
  }

  return (
    <ReviewCard className="flex w-full flex-col items-start gap-4 p-4">
      <div className="flex w-full flex-row items-center justify-start gap-4">
        <Image
          src={profileImageUrl || DefaultProfile}
          alt={`${nickname}의 프로필 이미지`}
          width={50}
          height={50}
          className="rounded-full"
        />

        <div className="flex flex-1 flex-col items-start justify-center gap-2 text-neutral-500">
          <span className="text-sm">{nickname}</span>
          <span className="text-sm">{`${getDayDiffFromNow(createdAt)}일 전`}</span>
        </div>

        <div className="flex flex-row items-center justify-center gap-2">
          <Button
            variant={'gray'}
            size="sm"
            onClick={() => {
              setIsEditing(true)
            }}
          >
            수정
          </Button>
          <Button
            variant={'gray'}
            size="sm"
            onClick={handleReviewDeleteButtonClick}
            disabled={isDeleteReviewPending}
          >
            삭제
          </Button>
        </div>
      </div>

      {isEditing ? (
        // 리뷰 수정 기능
        <ReviewDetailReviewEditForm
          reviewId={reviewId}
          defaultValue={content}
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
