'use client'

import { usePathname } from 'next/navigation'

import { NavButton } from '@/components'
import { ProgressBar } from '@/components/common'
import { cn } from '@/utils'

const steps = ['tag', 'genre', 'result']

export default function RecommendationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const currentStep = pathname.split('/').pop() || ''
  const stepIndex = steps.indexOf(currentStep) + 1

  return (
    <div
      className={cn(
        'flex flex-col',
        'min-h-[calc(100dvh-5.25rem)]',
        'lg:h-[calc(100dvh-5.25rem)]'
      )}
    >
      <div
        className={cn(
          'mx-auto w-full',
          'max-w-345',
          'flex flex-1 flex-col items-center justify-center',
          'px-4 py-6 md:px-tablet md:py-8 lg:px-desktop lg:py-6'
        )}
      >
        <main className="flex h-[60vh] w-full flex-col gap-6 md:h-125 md:gap-0 lg:h-137.5">
          {children}
        </main>

        <footer className="w-full shrink-0 pt-6 pb-24 md:pt-8 md:pb-0 lg:pt-8">
          <ProgressBar
            currentStep={stepIndex}
            totalSteps={3}
            className="mb-3 hidden md:block"
          />
          <NavButton />
        </footer>
      </div>
    </div>
  )
}
