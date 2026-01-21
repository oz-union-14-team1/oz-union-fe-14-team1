'use client'

import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

import { cn } from '@/utils'

import { HeartButtonUi } from './ui'

export type GameCardProps = {
  id: string
  name: string
  imgUrl: string | StaticImageData
}

export default function GameCard({ id, name, imgUrl }: GameCardProps) {
  return (
    <Link href={`/game/${id}`} className="relative justify-start">
      <div
        className={cn(
          'group rounded-0 relative h-90 w-54 overflow-hidden border border-white/0 bg-white/0 p-3 backdrop-blur-md transition-all duration-500',
          'flex flex-col items-center justify-start',
          'hover:scale-105 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_8px_32px_rgba(168,85,247,0.3)]'
        )}
      >
        {/* 배경 그라데이션 효과 */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-main-purple/10 via-transparent to-main-fuchsia/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        {/* Glow 효과 */}
        <div className="rounded-0 pointer-events-none absolute -inset-1 -z-10 bg-gradient-to-r from-main-purple via-main-violet to-main-fuchsia opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30" />
        {/* 위시리스트 버튼 코드 분리 -> HeartButtonUi 컴포넌트 사용*/}
        <HeartButtonUi gameId={id} />
        <div className="flex flex-col items-start justify-center gap-3">
          {/* <div className="relative flex w-full flex-col items-center justify-center gap-3 text-text-light"> */}
          <div className="rounded-0 relative h-67.5 w-50 overflow-hidden">
            <Image
              src={imgUrl}
              alt={name}
              fill
              className="transition-transform duration-500 group-hover:scale-110"
            />
            {/* 이미지 오버레이 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
          {/* </div> */}
          <div>
            <h1 className="relative z-10 text-lg font-bold text-text-light transition-all duration-300 group-hover:text-main-purple group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">
              {name}
            </h1>
          </div>
        </div>

        {/* 반짝이는 테두리 효과 */}
        <div className="rounded-0 pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </Link>
  )
}
