import { ProgressBar } from '@/components/common'

type OnboardingHeaderProps = {
  emoji: string
  title: React.ReactNode
  description: React.ReactNode
  currentStep: number
  totalSteps?: number
}

export function OnboardingHeader({
  emoji,
  title,
  description,
  currentStep,
  totalSteps = 3,
}: OnboardingHeaderProps) {
  return (
    <header className="mb-10 md:mb-8 lg:mb-10">
      <h1 className="inline-flex items-center gap-2 text-[clamp(1.125rem,2.5vw,2rem)] text-text-light">
        <span>{emoji}</span>
        <span>{title}</span>
      </h1>
      <p className="mt-2 text-[clamp(0.875rem,1.5vw,1.5rem)] text-text-light">
        {description}
      </p>

      <div className="mt-10 md:hidden">
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      </div>
    </header>
  )
}
