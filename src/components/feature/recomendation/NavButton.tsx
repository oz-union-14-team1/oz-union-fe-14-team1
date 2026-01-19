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
      triggerToast('error', '최소 1개의 태그를 선택해주세요.')
      return
    }

    if (currentStep === 'genre' && selectedGenres.length === 0) {
      triggerToast('error', '최소 1개의 장르를 선택해주세요')
      return
    }

    if (recommendationStepConfig.next) {
      router.push(recommendationStepConfig.next.path)
    }
  }

  const isNextDisabled =
    (currentStep === 'tag' && selectedTags.length === 0) ||
    (currentStep === 'genre' && selectedGenres.length === 0)

  const prevButton = recommendationStepConfig.prev && (
    <button
      onClick={handlePrev}
      className="text-sm font-bold text-text-light hover:opacity-80 lg:text-base"
    >
      <span className="mr-1">←</span> {recommendationStepConfig.prev.label}
    </button>
  )

  return (
    <>
      <div className="mt-6 hidden justify-between md:flex lg:mt-8">
        {prevButton ?? <div />}

        {recommendationStepConfig.next && (
          <button
            onClick={handleNext}
            className="text-sm font-bold transition-opacity hover:opacity-80 lg:text-base"
          >
            {recommendationStepConfig.next.label}{' '}
            <span className="ml-1">→</span>
          </button>
        )}
      </div>

      {recommendationStepConfig.next && (
        <div className="fixed bottom-4 left-1/2 z-50 w-full max-w-md -translate-x-1/2 px-4 pb-[env(safe-area-inset-bottom)] md:hidden">
          <Button
            size="big"
            variant="sub"
            className="w-full"
            disabled={isNextDisabled}
            onClick={handleNext}
          >
            {recommendationStepConfig.next.label.replace('로 이동', '')}
          </Button>
        </div>
      )}
    </>
  )
}
