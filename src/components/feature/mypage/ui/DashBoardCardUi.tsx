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
      <div className="mb-2 flex items-center gap-1">
        <h2 className="font-game-over text-base whitespace-nowrap text-text-primary">
          {title}
        </h2>
      </div>

      <div className="relative flex items-center justify-center py-2">
        <div className={cn('absolute inset-0 rounded blur-2xl', glowColor)} />
        <span
          className={cn(
            'font-game-over relative',
            'text-6xl',
            'bg-linear-to-b bg-clip-text text-transparent',
            'drop-shadow-[0_0_20px_rgba(168,85,247,0.9)]',
            gradientColors,
            isButton &&
              'animate-bounce transition-all duration-500 group-hover:translate-x-1 group-hover:scale-105 group-hover:animate-none'
          )}
        >
          {value}
        </span>
      </div>

      <p className="font-game-over mt-1 text-center text-xs whitespace-nowrap text-text-secondary md:mt-2">
        {subtitle}
      </p>
    </div>
  )
}
