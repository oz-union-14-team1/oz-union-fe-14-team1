'use client'

import { Heart } from 'lucide-react'

type WishListTitleUiProps = {
  wishlistCount: number
}

export default function WishListTitleUi({
  wishlistCount,
}: WishListTitleUiProps) {
  return (
    <div className="flex min-w-0 flex-1 items-center gap-2 md:gap-4">
      <div className="flex items-center gap-2 md:gap-3">
        <div className="shrink-0 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 p-1.5 md:p-2">
          <Heart className="h-4 w-4 fill-pink-500 text-pink-500 md:h-6 md:w-6" />
        </div>
        <h2 className="truncate text-lg font-bold text-text-light md:text-2xl">
          위시리스트
        </h2>
      </div>
      {wishlistCount > 0 && (
        <span className="shrink-0 rounded-full bg-white/10 px-2 py-0.5 text-xs font-medium text-text-light/80 backdrop-blur-sm md:px-3 md:py-1 md:text-sm">
          <span className="md:hidden">{wishlistCount}</span>
          <span className="hidden md:inline">{wishlistCount}개의 게임</span>
        </span>
      )}
    </div>
  )
}
