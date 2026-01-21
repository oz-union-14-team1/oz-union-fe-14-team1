import { cn } from '@/utils'

type DashBoardCardUiProps = {
  title: string
  value: number | string
  subtitle: string
  glowColor: string
  gradientColors: string
  isButton?: boolean
}

export default function DashBoardCardUi({
  title,
  value,
  subtitle,
  glowColor,
  gradientColors,
  isButton = false,
}: DashBoardCardUiProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center py-10 lg:mx-3">
      <div className="mb-1 flex items-center gap-1 sm:mb-2">
        <h2 className="font-game-over text-xs whitespace-nowrap text-text-primary sm:text-sm md:text-base">
          {title}
        </h2>
      </div>

      <div className="relative flex items-center justify-center py-2">
        <div className={cn('absolute inset-0 rounded blur-2xl', glowColor)} />
        <span
          className={cn(
            'font-game-over relative',
            'text-2xl sm:text-3xl md:text-5xl lg:text-6xl',
            'bg-linear-to-b bg-clip-text text-transparent',
            'drop-shadow-[0_0_20px_rgba(168,85,247,0.9)]',
            gradientColors,
            isButton &&
              'animate-bounce transition-all duration-500 group-hover:translate-x-3 group-hover:scale-110 group-hover:animate-none'
          )}
        >
          {value}
        </span>
      </div>

      <p className="font-game-over mt-1 text-center text-[0.5rem] whitespace-nowrap text-text-secondary sm:text-[0.6rem] md:mt-2 md:text-[0.625rem] lg:text-xs">
        {subtitle}
      </p>
    </div>
  )
}
