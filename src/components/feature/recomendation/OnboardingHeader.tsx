import { ProgressBar } from '@/components/common'

import { ResponsiveText } from './ResponsiveText'

type OnboardingHeaderProps = {
  emoji: string
  title: React.ReactNode
  mobileTitle?: React.ReactNode
  description: React.ReactNode
  mobileDescription?: React.ReactNode
  currentStep: number
  totalSteps?: number
}

export function OnboardingHeader({
  emoji,
  title,
  mobileTitle,
  description,
  mobileDescription,
  currentStep,
  totalSteps = 3,
}: OnboardingHeaderProps) {
  return (
    <header className="shrink-0">
      <h1 className="inline-flex items-center gap-2 text-[clamp(1.125rem,2.5vw,2rem)] text-text-light">
        {emoji && <span>{emoji}</span>}
        <ResponsiveText mobile={mobileTitle}>{title}</ResponsiveText>
      </h1>

      {(description || mobileDescription) && (
        <p className="mt-2 text-[clamp(0.875rem,1.5vw,1.25rem)] text-text-light">
          <ResponsiveText mobile={mobileDescription}>
            {description}
          </ResponsiveText>
        </p>
      )}

      <div className="-mx-4 mt-4 md:hidden">
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      </div>
    </header>
  )
}
