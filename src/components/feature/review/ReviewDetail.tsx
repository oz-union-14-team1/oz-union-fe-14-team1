'use client'

import Image from 'next/image'
import { useState } from 'react'

import DefaultProfile from '@/assets/images/profile/profile.jpg'
import { Button } from '@/components/common'
import { ReviewCard } from '@/components/feature/review/review'
import { getDayDiffFromNow } from '@/utils'

import type { ReviewDetail } from '@/types/api-response/review-response'

interface ReviewDetailProps {
  reviewDetail: ReviewDetail
}

export default function ReviewDetail({ reviewDetail }: ReviewDetailProps) {
  const [isCommentAreaOpen, setIsCommentAreaOpen] = useState(false)

  const {
    created_at: createdAt,
    author: { nickname, profile_image_url: profileImageUrl },
    content,
  } = reviewDetail

  return (
    <ReviewCard className="flex w-full flex-col items-start gap-4 p-4">
      <div className="flex flex-row items-center justify-start gap-4">
        <Image
          src={profileImageUrl || DefaultProfile}
          alt={`${nickname}의 프로필 이미지`}
          width={50}
          height={50}
          className="rounded-full"
        />

        <div className="flex flex-col items-center justify-center gap-2 text-neutral-500">
          <span className="text-sm">{nickname}</span>
          <span className="text-sm">{`${getDayDiffFromNow(createdAt)}일 전`}</span>

          {/* TODO: 수정 & 삭제 기능*/}
        </div>
      </div>

      <p>{content}</p>

      {/* 답글달기 기능*/}
      {isCommentAreaOpen ? (
        <>
          <hr className="w-full bg-white" />
          <textarea className="w-full rounded bg-neutral-700 p-2 focus:outline-none" />
          <div className="flex w-full items-center justify-end gap-2">
            <Button
              variant={'main'}
              onClick={() => {
                setIsCommentAreaOpen(false)
              }}
              size={'sm'}
              className="px-4"
            >
              완료
            </Button>
            <Button
              variant={'outline'}
              onClick={() => {
                setIsCommentAreaOpen(false)
              }}
              size={'sm'}
              className="px-4"
            >
              취소
            </Button>
          </div>
        </>
      ) : (
        <div className="flex w-full items-center justify-end">
          <Button
            variant={'gray'}
            onClick={() => {
              setIsCommentAreaOpen(true)
            }}
            size={'sm'}
          >
            답글달기
          </Button>
        </div>
      )}
    </ReviewCard>
  )
}
