'use client'

import Link from 'next/link'

import { RECOMMEND_PATHS } from '@/constants/routesPaths'

import { DashBoardCardUi } from './index'

type DashBoardProps = {
  wishlistCount: number
  reviewCount: number
}

export default function DashBoard({
  wishlistCount,
  reviewCount,
}: DashBoardProps) {
  return (
    <div className="flex w-full flex-row items-center overflow-hidden">
      <div className="flex-1">
        <DashBoardCardUi
          title="WISHLIST"
          value={wishlistCount}
          subtitle="GAMES SAVED"
          glowColor="bg-main-purple/20"
          gradientColors="from-main-purple via-main-violet to-main-fuchsia"
        />
      </div>

      <div className="flex-1">
        <DashBoardCardUi
          title="REVIEWS"
          value={reviewCount}
          subtitle="WRITTEN"
          glowColor="bg-sub-cyan/20"
          gradientColors="from-sub-cyan via-sub-indigo to-sub-cyan"
        />
      </div>

      <div className="flex-1">
        <Link href={RECOMMEND_PATHS.TAG} className="block h-full">
          <button
            type="button"
            className="group flex h-full w-full flex-col items-center transition-all duration-300 hover:scale-105 active:scale-95"
            title="GO TO MY TYPE TEST"
          >
            <DashBoardCardUi
              title="GO !"
              value={'→'}
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
