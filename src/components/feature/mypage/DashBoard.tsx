import { Press_Start_2P } from 'next/font/google'
import Link from 'next/link'

import { cn } from '@/utils'

type DashBoardProps = {
  wishlistCount: number
  reviewCount: number
}

type DashBoardCardProps = {
  title: string
  value: number | string
  subtitle: string
  glowColor: string
  gradientColors: string
  isButton?: boolean
}

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
})

export default function DashBoard({
  wishlistCount,
  reviewCount,
}: DashBoardProps) {
  return (
    <div
      className={cn(
        pressStart2P.className,
        'flex w-full flex-row items-stretch overflow-x-auto rounded-lg',
        'border border-main-purple/30 bg-surface-elevated',
        'shadow-[0_0_20px_rgba(168,85,247,0.3)]',
        'grid grid-cols-3 px-5 lg:px-15'
      )}
    >
      {/* 찜한 게임 */}
      <div className="min-w-27.5 flex-1 sm:min-w-32.5 md:min-w-0">
        <DashBoardCard
          title="WISHLIST"
          value={wishlistCount}
          subtitle="GAMES SAVED"
          glowColor="bg-main-purple/20"
          gradientColors="from-main-purple via-main-violet to-main-fuchsia"
        />
      </div>

      {/* 리뷰 */}
      <div className="min-w-27.5 flex-1 sm:min-w-32.5 md:min-w-0">
        <DashBoardCard
          title="REVIEWS"
          value={reviewCount}
          subtitle="WRITTEN"
          glowColor="bg-sub-cyan/20"
          gradientColors="from-sub-cyan via-sub-indigo to-sub-cyan"
        />
      </div>

      {/* 선호 장르 조사 페이지 이동 버튼 */}
      <div className="min-w-27.5 flex-1 sm:min-w-32.5 md:min-w-0">
        <Link href="/recommendation/tag" className="block h-full">
          <button
            type="button"
            className="group flex h-full w-full flex-col items-center transition-all duration-300 hover:scale-110 active:scale-95"
            title="GO TO MY TYPE TEST"
          >
            <DashBoardCard
              title="LET'S GO !"
              value={'>'}
              subtitle="TO MY TYPE"
              glowColor="bg-orange-500/20"
              gradientColors="from-orange-400 via-orange-500 to-orange-600"
              isButton
            />
          </button>
        </Link>
      </div>
    </div>
  )
}

function DashBoardCard({
  title,
  value,
  subtitle,
  glowColor,
  gradientColors,
  isButton = false,
}: DashBoardCardProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center py-10 lg:mx-3">
      {/* 타이틀 */}
      <div className="mb-1 flex items-center gap-1 sm:mb-2">
        <h2 className="font-game-over text-xs whitespace-nowrap text-text-primary sm:text-sm md:text-base">
          {title}
        </h2>
      </div>

      {/* 값 (숫자 또는 화살표) */}
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

      {/* 설명 */}
      <p className="font-game-over mt-1 text-center text-[0.5rem] whitespace-nowrap text-text-secondary sm:text-[0.6rem] md:mt-2 md:text-[0.625rem] lg:text-xs">
        {subtitle}
      </p>
    </div>
  )
}
