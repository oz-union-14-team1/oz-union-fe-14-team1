'use client'

import { useOnboardingStore } from '@/store/useOnboardingStore'
import { generatePlayType } from '@/utils/generatePlayType'

import { ResponsiveText } from './ResponsiveText'

type ResultContentProps = {
  userName: string
}

export default function ResultContent({ userName }: ResultContentProps) {
  const { selectedTags, selectedGenres } = useOnboardingStore()
  const result = generatePlayType(selectedTags, selectedGenres)

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <p className="text-[clamp(1.25rem,2vw,1.75rem)] text-text-light">
        {userName}님의 플레이 타입은
      </p>
      <h1 className="mt-4 text-[clamp(1.5rem,3vw,2rem)] font-bold">
        {`" ${result.emoji} ${result.title} "`}
      </h1>

      <p className="mt-4 max-w-md text-[clamp(1rem,1.5vw,1.25rem)] text-text-light">
        <ResponsiveText mobile="취향에 딱 맞는 게임을 추천할게요.">
          {result.description}
        </ResponsiveText>
      </p>

      <p className="mt-6 hidden text-[clamp(0.875rem,1.5vw,1.25rem)] text-text-light md:block">
        선택한 태그와 장르를 기반으로
        <span className="font-bold text-white">취향에 딱 맞는 게임을 추천</span>
        해드릴게요
      </p>
    </div>
  )
}
