'use client'

import { usePathname, useRouter } from 'next/navigation'

import { useCompleteOnboarding } from '@/api/queries/useCompletePreference'
import { Button } from '@/components/common'
import GameLoader from '@/components/common/game-loader/GameLoader'
import { STEP_CONFIG } from '@/constants/stepConfig'
import { useToast } from '@/hooks'
import { useOnboardingStore } from '@/store/useOnboardingStore'

export function NavButton() {
  const router = useRouter()
  const pathname = usePathname()
  const { triggerToast } = useToast()
  const { selectedTags, selectedGenres } = useOnboardingStore()
  const { mutate: completeOnBoarding, isPending } = useCompleteOnboarding()

  const currentStep = pathname.split('/').pop() as keyof typeof STEP_CONFIG
  const recommendationStepConfig = STEP_CONFIG[currentStep]

  if (!recommendationStepConfig) {
    return null
  }

  const handlePrev = () => {
    if (recommendationStepConfig.prev) {
      router.push(recommendationStepConfig.prev.path)
    }
  }

  const handleNext = () => {
    if (currentStep === 'tag' && selectedTags.length === 0) {
      triggerToast('error', '최소 한 개 이상의 태그를 선택해주세요.')
      return
    }
    if (currentStep === 'genre' && selectedGenres.length === 0) {
      triggerToast('error', '최소 한 개 이상의 장르를 선택해주세요.')
      return
    }

    /**
     * 장르페이지: API호출
     * */
    if (currentStep === 'genre') {
      completeOnBoarding({
        Tags: selectedTags.map((t) => t.id),
        Genres: selectedGenres.map((g) => g.id),
      })
      return
    }

    if (recommendationStepConfig.next) {
      router.push(recommendationStepConfig.next.path)
    }
  }

  /**
   * 데스크톱/PC 버튼 텍스트 분기처리
   */
  const getButtonContent = () => {
    if (isPending && currentStep === 'genre') {
      return <GameLoader />
    }
    return (
      recommendationStepConfig.next?.mobileLabel ||
      recommendationStepConfig.next?.label
    )
  }

  const isNextDisabled =
    (currentStep === 'tag' && selectedTags.length === 0) ||
    (currentStep === 'genre' && selectedGenres.length === 0) ||
    isPending

  return (
    <>
      <div className="hidden justify-between md:flex">
        {recommendationStepConfig.prev ? (
          <button
            onClick={handlePrev}
            disabled={isPending}
            className="text-sm font-bold text-text-light hover:opacity-80 lg:text-base"
          >
            ← {recommendationStepConfig.prev.label}
          </button>
        ) : (
          <div />
        )}

        {recommendationStepConfig.next && (
          <button
            onClick={handleNext}
            disabled={isNextDisabled}
            className="text-sm font-bold hover:opacity-80 lg:text-base"
          >
            {recommendationStepConfig.next.label} →
          </button>
        )}
      </div>

      <div className="fixed bottom-4 left-1/2 z-50 w-full max-w-md -translate-x-1/2 px-4 pb-[env(safe-area-inset-bottom)] md:hidden">
        <div className="flex gap-3">
          {recommendationStepConfig.prev && (
            <Button
              size="big"
              variant="outline"
              className="flex-1 text-[1rem]"
              onClick={handlePrev}
              disabled={isPending}
            >
              {getButtonContent()}
            </Button>
          )}

          {recommendationStepConfig.next && (
            <Button
              size="big"
              variant="sub"
              className="flex-1 text-[1rem]"
              disabled={isNextDisabled}
              onClick={handleNext}
            >
              {getButtonContent()}
            </Button>
          )}
        </div>
      </div>
    </>
  )
}
