'use client'

import { useAllTags } from '@/api/queries/usePreference'
import { OnboardingHeader, TagSelector } from '@/components'

export default function TagPage() {
  const { data: tags = [] } = useAllTags()

  return (
    <>
      <OnboardingHeader
        emoji="🎮"
        currentStep={1}
        title={
          <>
            당신의 <span className="font-bold text-white">플레이 스타일</span>은
            어떠신가요?
          </>
        }
        mobileTitle={
          <>
            어떤 <span className="font-bold text-white">스타일</span>로
            플레이하시나요?
          </>
        }
        description={
          <>
            선택한 태그를 기반으로
            <span className="font-bold text-white">
              취향에 딱 맞는 게임을 추천
            </span>
            해드릴게요
          </>
        }
        mobileDescription="많이 선택할수록 추천이 더 정확해요."
      />

      <div className="flex flex-1 items-center justify-center">
        <TagSelector tags={tags} />
      </div>
    </>
  )
}
