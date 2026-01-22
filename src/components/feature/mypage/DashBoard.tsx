'use client'

import { Press_Start_2P } from 'next/font/google'
import Link from 'next/link'

import { cn } from '@/utils'

import { DashBoardCardUi } from './index'

type DashBoardProps = {
  wishlistCount: number
  reviewCount: number
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
        'shadow-[0_0_20px_rgba(168,85,247,0.3)]'
      )}
    >
      <div className="min-w-27.5 flex-1 sm:min-w-32.5 md:min-w-0">
        <DashBoardCardUi
          title="WISHLIST"
          value={wishlistCount}
          subtitle="GAMES SAVED"
          glowColor="bg-main-purple/20"
          gradientColors="from-main-purple via-main-violet to-main-fuchsia"
        />
      </div>

      <div className="min-w-27.5 flex-1 sm:min-w-32.5 md:min-w-0">
        <DashBoardCardUi
          title="REVIEWS"
          value={reviewCount}
          subtitle="WRITTEN"
          glowColor="bg-sub-cyan/20"
          gradientColors="from-sub-cyan via-sub-indigo to-sub-cyan"
        />
      </div>

      <div className="min-w-27.5 flex-1 sm:min-w-32.5 md:min-w-0">
        <Link href="/recommendation/tag" className="block h-full">
          <button
            type="button"
            className="group flex h-full w-full flex-col items-center transition-all duration-300 hover:scale-110 active:scale-95"
            title="GO TO MY TYPE TEST"
          >
            <DashBoardCardUi
              title="GO !"
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
