'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

import { Button } from '@/components/common'
import Toast from '@/components/common/toast/Toast'
import { STEP_CONFIG } from '@/constants/stepConfig'
import { useOnboardingStore } from '@/store/useOnboardingStore'

export function NavButton() {
  const pathname = usePathname()
  const router = useRouter()
  const [toast, setToast] = useState<{ type: 'error'; message: string } | null>(
    null
  )
  const selectedTags = useOnboardingStore((state) => state.selectedTags)
  const selectedGenres = useOnboardingStore((state) => state.selectedGenres)
  const currentStep = pathname.split('/').pop() as keyof typeof STEP_CONFIG
  const config = STEP_CONFIG[currentStep]

  if (!config) {
    return null
  }

  const handlePrev = () => {
    if (config.prev) {
      router.push(config.prev.path)
    }
  }

  const handleNext = () => {
    if (currentStep === 'tag' && selectedTags.length === 0) {
      // TODO: toast 컴포넌트 리팩토링 후 변경예정
      setToast({ type: 'error', message: '최소 1개의 태그를 선택해주세요.' })
      setTimeout(() => setToast(null), 1500)
      return
    }

    if (currentStep === 'genre' && selectedGenres.length === 0) {
      return
    }

    if (config.next) {
      router.push(config.next.path)
    }
  }

  const isNextDisabled =
    (currentStep === 'tag' && selectedTags.length === 0) ||
    (currentStep === 'genre' && selectedGenres.length === 0)

  const prevButton = config.prev && (
    <button
      onClick={handlePrev}
      className="text-sm font-bold text-text-light hover:opacity-80 lg:text-base"
    >
      <span className="mr-1">←</span> {config.prev.label}
    </button>
  )

  return (
    <>
      {toast && (
        <div className="fixed top-20 right-8 z-50">
          <Toast type={toast.type} message={toast.message} />
        </div>
      )}

      <div className="mt-6 hidden justify-between md:flex lg:mt-8">
        {prevButton ?? <div />}

        {config.next && (
          <button
            onClick={handleNext}
            className="text-sm font-bold transition-opacity hover:opacity-80 lg:text-base"
          >
            {config.next.label} <span className="ml-1">→</span>
          </button>
        )}
      </div>

      {config.next && (
        <div className="fixed bottom-4 left-1/2 z-50 w-full max-w-md -translate-x-1/2 px-4 pb-[env(safe-area-inset-bottom)] md:hidden">
          <Button
            size="big"
            variant="sub"
            className="w-full"
            disabled={isNextDisabled}
            onClick={handleNext}
          >
            {config.next.label.replace('로 이동', '')}
          </Button>
        </div>
      )}
    </>
  )
}
