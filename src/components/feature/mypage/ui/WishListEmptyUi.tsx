'use client'

import { Heart, Sparkles } from 'lucide-react'
import Link from 'next/link'

import { cn } from '@/utils'

export default function WishListEmptyUi() {
  return (
    <div className="mx-4 flex min-h-64 flex-col items-center justify-center gap-4 border border-dashed border-white/20 bg-white/[0.02] px-4 py-12 md:min-h-96 md:gap-6 md:px-8 md:py-16">
      <div className="relative">
        <div className="absolute inset-0 animate-pulse rounded-full bg-pink-500/20 blur-2xl" />
        <div className="relative rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 p-4 md:p-6">
          <Heart className="h-12 w-12 text-pink-500/80 md:h-16 md:w-16" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 px-4 text-center">
        <h3 className="text-lg font-semibold text-text-light md:text-xl">
          아직 위시리스트가 비어있어요
        </h3>
        <p className="max-w-md text-xs text-text-light/60 md:text-sm">
          마음에 드는 게임을 발견하면 하트 버튼을 눌러 위시리스트에 추가해보세요
        </p>
      </div>

      <Link
        href="/"
        className={cn(
          'group relative overflow-hidden rounded-full',
          'bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-2.5 md:px-6 md:py-3',
          'text-sm font-medium text-white transition-all duration-300 md:text-base',
          'hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]'
        )}
      >
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
        <span className="relative flex items-center gap-2">
          <Sparkles className="h-4 w-4" />
          게임 둘러보기
        </span>
      </Link>
    </div>
  )
}
