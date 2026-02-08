'use client'

import Image from 'next/image'
import Link from 'next/link'

import { ROUTES_PATHS } from '@/constants'
import { FALLBACK_IMG_VERTICAL } from '@/constants/fallback'
import { cn } from '@/utils'

import { HeartButtonUi } from './ui'

type GameCardProps = {
  id: number
  name: string
  image?: string
  variant?: 'default' | 'background' | 'compact'
}

/**
 * variant
 * - default   : 기본 카드
 * - background: 배경 전용
 * - compact   : 작은 카드
 */
export default function GameCard({
  id,
  name,
  image,
  variant = 'default',
}: GameCardProps) {
  const isBackground = variant === 'background'
  const isCompact = variant === 'compact'
  const isInteractive = variant === 'default'

  const cardSize = isCompact ? 'w-56' : 'w-72'

  const Card = (
    <div
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-lg',
        'border border-white/5 bg-white/5 backdrop-blur-md',
        'transition-colors duration-300',
        cardSize,
        isInteractive &&
          'hover:bg-linear-to-br hover:from-main-purple/15 hover:to-main-fuchsia/10'
      )}
    >
      {/* 위시리스트 버튼 */}
      {!isBackground && <HeartButtonUi gameId={id} />}

      <div className="relative aspect-video w-full overflow-hidden rounded-md">
        {/* blur background */}
        <Image
          src={image || FALLBACK_IMG_VERTICAL}
          alt="fallback"
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 288px"
          className="scale-110 object-cover opacity-30 blur-xl"
        />

        {/* 실제 이미지 */}
        <Image
          src={image || FALLBACK_IMG_VERTICAL}
          alt={name || 'fallback'}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 288px"
          className={cn(
            'object-cover transition-transform duration-500',
            isInteractive && 'group-hover:scale-110'
          )}
        />
      </div>

      {!isBackground && (
        <h3
          className={cn(
            'px-2 py-3 text-center text-sm font-semibold text-text-light',
            'transition-colors duration-300',
            isInteractive && 'group-hover:text-main-violet'
          )}
        >
          {name}
        </h3>
      )}
    </div>
  )

  if (isBackground) {
    return Card
  }

  return <Link href={ROUTES_PATHS.GAME_DETAIL(id)}>{Card}</Link>
}
