'use client'

import { useCallback, useEffect, useState } from 'react'

import { Button } from '@/components'
import { Avatar, ReviewCard } from '@/components/feature/review'
import AiSummary from '@/components/feature/review/Aisummary'
import { ImageCard } from '@/components/feature/review/ImageCard'
import { Star } from '@/components/feature/review/Star'
import { Textarea } from '@/components/feature/review/Textarea'
import { GameReview } from '@/components/layout/review/GameReview'
import { API_BASE_URL, API_PATH } from '@/constants/apiPath'
import { GameDetail } from '@/types/api-response/game-response'
import { ReviewDetail } from '@/types/api-response/review-response'

export default function ReviewPage({ params }: { params: { gameId: string } }) {
  const [isEditing, setIsEditing] = useState(false)
  const [text, setText] = useState('')
  const [game, setGame] = useState<GameDetail | null>(null)
  const [review, setReview] = useState<ReviewDetail | null>(null)
  const [aiData, setAiData] = useState({
    good_points: [] as string[],
    bad_points: [] as string[],
    total_review: '',
  })

  const fetchData = useCallback(async () => {
    try {
      const [resAi, resReview, resGame] = await Promise.all([
        fetch(`${API_BASE_URL}${API_PATH.AI_SUMMARY(params.gameId)}`),
        fetch(`${API_BASE_URL}${API_PATH.REVIEWS(params.gameId)}`),
        fetch(`${API_BASE_URL}${API_PATH.GAME_DETAIL(Number(params.gameId))}`),
      ])

      if (resAi.ok) {
        setAiData(await resAi.json())
      }
      if (resReview.ok) {
        setReview(await resReview.json())
      }
      if (resGame.ok) {
        setGame(await resGame.json())
      }
    } catch (error) {
      console.error('데이터 로드 실패:', error)
    }
  }, [params.gameId])

  useEffect(() => {
    let isSubscribed = true

    const executeFetch = async () => {
      if (params.gameId && isSubscribed) {
        await fetchData()
      }
    }

    executeFetch()

    return () => {
      isSubscribed = false
    }
  }, [fetchData, params.gameId])

  const handleButtonClick = () => setIsEditing(!isEditing)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!text.trim()) {
      alert('내용을 입력해주세요')
      return
    }

    try {
      const response = await fetch(
        `${API_BASE_URL}${API_PATH.REVIEWS(params.gameId)}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            content: text,
          }),
        }
      )

      if (response.ok) {
        alert('리뷰가 성공적으로 등록되었습니다!')
        setText('')
        setIsEditing(false)
        fetchData()
      } else {
        const errorData = await response.json()
        alert(`등록 실패: ${errorData.message || '알 수 없는 오류'}`)
      }
    } catch (error) {
      console.error('리뷰 등록 중 에러 발생:', error)
      alert('서버와 통신 중 문제가 발생했습니다.')
    }
  }

  return (
    <div className="mx-auto flex w-full max-w-300 gap-10 px-4 py-10">
      <div className="flex flex-1 flex-col gap-5">
        {game && <ImageCard game={game} />}

        <div className="flex items-center gap-2">
          <Star size={16} />
          <span className="font-bold text-white">
            {game?.avg_score ? Number(game.avg_score).toFixed(1) : '0.0'}
          </span>
          <span className="text-sm text-gray-400">
            ({review?.comments?.length || 0} 리뷰)
          </span>
        </div>

        <h1 className="text-4xl font-bold text-white">{game?.name}</h1>

        <AiSummary
          {...aiData}
          className="flex w-200 flex-col gap-2 rounded-xl border p-6"
        />

        <Button
          variant="main"
          onClick={handleButtonClick}
          className="w-fit rounded-xl bg-gray-700 px-4 py-2 text-white"
        >
          {isEditing ? '닫기' : '댓글 추가'}
        </Button>

        {isEditing && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <Textarea
              name="review-content"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full rounded-xl border-none p-4"
              placeholder="리뷰 내용을 입력해주세요..."
              rows={4}
            />
            <div className="flex justify-end"></div>
          </form>
        )}

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
          <p className="text-12 font-bold text-white">
            {game?.avg_score ? Number(game.avg_score).toFixed(1) : ''}
          </p>
          <Star size={24} />
        </div>
        {game && <GameReview gameDetail={game} />}
      </aside>
    </div>
  )
}
