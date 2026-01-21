'use client'

import { usePathname, useRouter } from 'next/navigation'

import { Button } from '@/components/common'
import { STEP_CONFIG } from '@/constants/stepConfig'
import { useToast } from '@/hooks'
import { useOnboardingStore } from '@/store/useOnboardingStore'

export function NavButton() {
  const pathname = usePathname()
  const router = useRouter()
  const { triggerToast } = useToast()
  const { selectedTags, selectedGenres } = useOnboardingStore((state) => state)

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
    if (recommendationStepConfig.next) {
      router.push(recommendationStepConfig.next.path)
    }
  }

  const isNextDisabled =
    (currentStep === 'tag' && selectedTags.length === 0) ||
    (currentStep === 'genre' && selectedGenres.length === 0)

  return (
    <>
      <div className="hidden justify-between md:flex">
        {recommendationStepConfig.prev ? (
          <button
            onClick={handlePrev}
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
            >
              {recommendationStepConfig.prev.mobileLabel ||
                recommendationStepConfig.prev.label}
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
              {recommendationStepConfig.next.mobileLabel ||
                recommendationStepConfig.next.label}
            </Button>
          )}
        </div>
      </div>
    </>
  )
}
