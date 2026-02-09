'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { getAiTendency } from '@/api/fetchers/onboardingFetchers'
import GameLoader from '@/components/common/game-loader/GameLoader'
import { ROUTES_PATHS } from '@/constants'
import { useAuthStore } from '@/store/useAuthStore'

export default function ResultContent() {
  const router = useRouter()
  const user = useAuthStore((state) => state.user)
  const [tendency, setTendency] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let attempts = 0
    const maxAttemps = 15

    const checkTendency = async () => {
      try {
        const result = await getAiTendency()

        if (result) {
          console.log('tendency 성공')
          setTendency(result)
          setIsLoading(false)
          return
        }
      } catch (error) {
        console.log('tendency 블링중:', error)
      }

      if (attempts < maxAttemps) {
        attempts++
        setTimeout(checkTendency, 1000)
      } else {
        console.error('AI 분석 시간 초과')
        router.push(ROUTES_PATHS.RECOMMEND.GENRE)
      }
    }
    checkTendency()
  }, [router])

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center">
        <GameLoader />
        <p className="mt-4 text-text-light">
          AI가 당신의 성향을 분석하고 있습니다...
        </p>
      </div>
    )
  }

  if (!tendency) {
    return null
  }
  const userName = user?.name || user?.nickname

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <p className="text-[clamp(1.25rem,2vw,1.75rem)] text-text-light">
        {userName}님의 플레이 타입은
      </p>
      <h1 className="mt-4 text-[clamp(1.5rem,3vw,2rem)] font-bold">
        {`" ${tendency} "`}
      </h1>

      <p className="mt-6 hidden text-[clamp(0.875rem,1.5vw,1.25rem)] text-text-light md:block">
        선택한 태그와 장르를 기반으로
        <span className="font-bold text-white">취향에 딱 맞는 게임을 추천</span>
        해드릴게요
      </p>
    </div>
  )
}
