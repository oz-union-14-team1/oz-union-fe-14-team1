import { OnboardingHeader, TagSelector } from '@/components'
import { MOCK_TAGS } from '@/mocks/mockTags'

async function getTags() {
  // TODO: API 연동
  return MOCK_TAGS
}

export default async function TagPage() {
  const tags = await getTags()

  return (
    <>
      <OnboardingHeader
        emoji="🎮"
        currentStep={1}
        title={
          <>
            당신의 <span className="font-bold">플레이 스타일</span>은
            어떠신가요?
          </>
        }
        description={
          <>
            선택한 태그를 기반으로{' '}
            <span className="font-bold">취향에 딱 맞는 게임을 추천</span>
            해드릴게요
          </>
        }
      />

      <TagSelector tags={tags} />
    </>
  )
}
