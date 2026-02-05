'use client'

import { useState } from 'react'

import { Button } from '@/components'
import { Avatar, ReviewCard } from '@/components/feature/review'
import AiSummary from '@/components/feature/review/Aisummary'
import { ImageCard } from '@/components/feature/review/ImageCard'
import { Star } from '@/components/feature/review/Star'
import { Textarea } from '@/components/feature/review/Textarea'
import { GameReview } from '@/components/layout/review/GameReview'
import { ReviewDetail } from '@/types/api-response/review-response'

const MOCK_DETAIL_DATA = {
  id: 1,
  name: '젤다의 전설',
  intro: '이게임은 정말 좋은게임입니다',
  developer: '닌텐도',
  genres: ['어드밴처'],
  tags: ['모험'],
  publisher: '퍼블릭',
  platforms: ['닌텐도'],
  created_at: '2026-02-03T07:04:51.094Z',
  releasedAt: '2026-02-03',
  images: ['https://...'],
}

const MOCK_REVIEW_DATA: ReviewDetail = {
  id: 1,
  content: '리뷰 테스트',
  rating: 5,
  likeCount: 0,
  author: {
    id: 2000,
    nickname: 'anonyumouise',
    profileImgUrl: '',
  },
  createdAt: new Date('2026-02-02T17:01:05.010484+09:00'),
  comments: [
    {
      id: 101,
      content: '정말 최고의 게임입니다!',
      author: {
        id: 4,
        nickname: '댓글러1',
        profileImgUrl: '',
      },
      createdAt: new Date('2026-02-02T17:01:05.010484+09:00'),
    },
  ],
}

export default function ReviewPage() {
  const game = MOCK_DETAIL_DATA
  const review = MOCK_REVIEW_DATA
  const [isEditing, setIsEditing] = useState(false)
  const handleButtonClick = () => {
    setIsEditing(!isEditing)
  }

  return (
    <div className="mx-auto flex w-full max-w-300 gap-10 px-4 py-10">
      <div className="flex flex-1 flex-col gap-5">
        <ImageCard game={game} />
        <div className="flex items-center gap-2">
          <Star size={16} />
          <span className="font-bold text-white">4.8</span>
          <span className="text-sm text-gray-400"></span>
          {review.rating}리뷰
        </div>

        {/* 게임이름 */}
        <h1 className="text-4xl font-bold text-white">{game.name}</h1>

        {/* AI답변 */}
        <AiSummary className="flex w-200 flex-col gap-2 rounded-xl border p-6" />
        <Button
          variant="main"
          onClick={handleButtonClick}
          className="w-fit rounded-xl bg-gray-700 px-4 py-2 text-white"
        >
          {isEditing ? '닫기' : '댓글 추가'}
        </Button>
        {isEditing && (
          <Textarea
            className="w-full rounded-xl border-none p-4"
            placeholder="리뷰 내용을 입력해주세요..."
            rows={4}
          />
        )}

        {/* 리뷰카드 */}
        {review?.comments?.map((comment) => (
          <ReviewCard
            key={comment.id}
            className="h-50 w-200 rounded-xl border p-8"
          >
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
                  <Star size={18} />
                </div>
                <p className="mt-2 text-sm text-gray-300">{comment.content}</p>
              </div>
            </div>
          </ReviewCard>
        ))}
      </div>
      <aside className="w-80 shrink-0">
        <div className="mt-7 flex h-43.75 w-90 flex-col items-center justify-center rounded-card bg-gradient-main">
          <Star size={24} />
        </div>
        <GameReview gameDetail={game} />
      </aside>
    </div>
  )
}
