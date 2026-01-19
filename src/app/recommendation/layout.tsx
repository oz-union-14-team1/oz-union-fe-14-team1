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
    <div className="flex min-h-[calc(100dvh-5.25rem)] flex-col lg:items-center lg:justify-center">
      <div
        className={cn(
          'mx-auto w-full',
          'flex-1 lg:flex-none',
          'max-w-345',
          'lg:h-185',
          'flex flex-col',
          'px-4 py-6 md:px-tablet md:py-10 lg:px-desktop lg:py-12'
        )}
      >
        <main>{children}</main>

        <footer className="mt-10 md:mt-14 lg:mt-20">
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
