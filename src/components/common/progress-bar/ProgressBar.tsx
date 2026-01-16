import { cn } from '@/utils'

type ProgressBarProps = {
  currentStep: number
  totalSteps?: number
  className?: string
}

export default function ProgressBar({
  currentStep,
  totalSteps = 3,
  className,
}: ProgressBarProps) {
  const progressPercent = (currentStep / totalSteps) * 100

  return (
    <div
      className={cn(
        'h-1.5 w-full max-w-238.5 overflow-hidden rounded-full bg-neutral-300',
        className
      )}
    >
      <div
        className={cn(
          'h-full rounded-full bg-gradient-to-r from-sub-cyan to-sub-indigo transition-all duration-300'
        )}
        style={{ width: `${progressPercent}%` }}
      />
    </div>
  )
}
