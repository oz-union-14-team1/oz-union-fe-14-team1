import React from 'react'

import type { GameDetail } from '@/types/api-response/game-response'

type GameReviewProps = {
  gameDetail: GameDetail
}

export const GameReview = ({ gameDetail: data }: GameReviewProps) => {
  const labelStyle = 'text-sm text-gray-500'
  const valueStyle = 'text-lg text-white font-semibold'

  return (
    <div className="h-150 w-full rounded-xl border border-gray-700 bg-surface-elevated p-6 shadow-lg">
      <h2 className="mb-4 text-xl font-bold text-white">게임 정보</h2>

      <div className="grid-cols grid gap-y-4 border-t border-gray-800 pt-4">
        <div className="flex flex-col gap-1">
          <span className={labelStyle}>플랫폼</span>
          <span className={valueStyle}>{data.platforms}</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className={labelStyle}>개발사</span>
          <span className={valueStyle}>{data.developer}</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className={labelStyle}>퍼블리셔</span>
          <span className={valueStyle}>{data.publisher}</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className={labelStyle}>장르</span>
          <span className={valueStyle}>{data.genres}</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className={labelStyle}>출시일</span>
          <span className={valueStyle}>
            {new Date(data.releasedAt).toDateString()}
          </span>
        </div>
        <hr />
        <div>{data.intro}</div>
      </div>
    </div>
  )
}
