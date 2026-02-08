'use client'

import Link from 'next/link'
import { use, useEffect, useState } from 'react'

import useAiSummary from '@/api/queries/useAiSummary'
import { useGameDetail } from '@/api/queries/useGameQueries'
import { useGetUserMe } from '@/api/queries/useGetUserMe'
import useReviewList from '@/api/queries/useReviewList'
import { Button } from '@/components'
import { Avatar, ReviewCard } from '@/components/feature/review'
import AiSummary from '@/components/feature/review/Aisummary'
import { ImageCard } from '@/components/feature/review/ImageCard'
import { Star } from '@/components/feature/review/Star'
import { Textarea } from '@/components/feature/review/Textarea'
import { GameReview } from '@/components/layout/review/GameReview'
import { useToast } from '@/hooks'
import { useAuthStore } from '@/store/useAuthStore'

type ReviewPageProps = {
  params: Promise<{ gameId: string }>
}

export default function ReviewPage({ params }: ReviewPageProps) {
  const [isEditing, setIsEditing] = useState(false)
  const { triggerToast } = useToast()

  const { gameId } = use(params)

  const gameQuery = useGameDetail(Number(gameId))
  const reviewQuery = useReviewList(gameId, 1)
  const aiSummaryQuery = useAiSummary(gameId)
  const userMeQuery = useGetUserMe()

  const { isInitialized } = useAuthStore()

  if (!isInitialized) {
    return null
  }

  const { data: game } = gameQuery
  const { data: review } = reviewQuery
  const { data: aiData, status: aiReviewStatus } = aiSummaryQuery
  const { data: userData } = userMeQuery

  return (
    <div className="mx-auto flex w-full flex-col-reverse items-center justify-center gap-10 px-4 py-10 lg:flex-row lg:items-start">
      <div className="flex w-full max-w-200 flex-col gap-5">
        <div className="flex w-full flex-col items-center">
          {game && <ImageCard game={game} className="w-full" />}

          <aside className="flex w-full flex-col gap-2 lg:hidden">
            <div className="flex h-43.75 w-full flex-col items-center justify-center rounded-card bg-gradient-main">
              <p className="text-12 font-bold text-white">{game?.avgScore}</p>
              <Star size={24} readonly value={game?.avgScore} />
            </div>
            {game && <GameReview gameDetail={game} />}
          </aside>
        </div>

        <div className="flex items-center gap-2">
          <Star size={16} value={game?.avgScore} readonly />
          <span className="font-bold text-white">{game?.avgScore}</span>
          <span className="text-sm text-gray-400">
            ({review?.results?.length || 0} 리뷰)
          </span>
        </div>

        <h1 className="text-4xl font-bold text-white">{game?.name}</h1>

        <AiSummary
          content={
            !aiData || aiReviewStatus === 'error'
              ? '리뷰가 부족하여 요약을 생성할 수 없습니다. (최소 10개 필요)'
              : [
                  ...aiData?.goodPoints,
                  ...aiData?.badPoints,
                  aiData?.totalReview,
                ].join(' ')
          }
          className="flex-2 flex-col gap-2 rounded-xl border p-6"
        />

        <Button
          variant="main"
          onClick={() => {
            if (userData) {
              setIsEditing((prev) => !prev)
            } else {
              triggerToast('warning', '로그인 이후 이용 할 수 있습니다!')
            }
          }}
          className="w-fit rounded-xl bg-gray-700 px-4 py-2 text-white"
        >
          {isEditing ? '닫기' : '리뷰 추가'}
        </Button>

        <Textarea
          name="review-content"
          className="w-full rounded-xl border-none p-4"
          placeholder="리뷰 내용을 입력해주세요..."
          rows={4}
          gameId={gameId}
          isOpen={isEditing}
          setIsOpen={setIsEditing}
        />

        {review?.results?.map((comment) => (
          <Link href={`/review/${gameId}/${comment.id}`} key={comment.id}>
            <ReviewCard className="h-50 w-full max-w-200 rounded-xl border p-8">
              <div className="flex items-center gap-1">
                <Avatar
                  avatar={comment.author}
                  className="mt-1 h-12 w-12 self-start"
                />
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-white">
                      {comment.author.nickname}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex">
                    <Star size={18} value={comment.rating} readonly />
                  </div>
                  <p className="mt-2 text-sm text-gray-300">
                    {comment.content}
                  </p>
                </div>
              </div>
            </ReviewCard>
          </Link>
        ))}
      </div>

      <aside className="hidden w-80 flex-col gap-2 lg:flex">
        <div className="flex h-43.75 w-full flex-col items-center justify-center rounded-card bg-gradient-main">
          <p className="text-12 font-bold text-white">{game?.avgScore}</p>
          <Star size={24} readonly value={game?.avgScore} />
        </div>
        {game && <GameReview gameDetail={game} />}
      </aside>
    </div>
  )
}
