import React from 'react'

import type { GameDetail } from '@/types/api-response/game-response'

type GameReviewProps = {
  gameDetail: GameDetail
}

export const GameReview = ({ gameDetail }: GameReviewProps) => {
  const labelStyle = 'text-sm text-gray-500'
  const valueStyle = 'text-lg text-white font-semibold'

  const infoItems = [
    { label: '플랫폼', value: gameDetail.platforms[0] },
    { label: '개발사', value: gameDetail.developer },
    { label: '퍼블리셔', value: gameDetail.publisher },
    { label: '출시일', value: gameDetail.releasedAt.toDateString() },
  ]

  return (
    <div className="w-100 rounded-2xl border border-gray-800 bg-surface-elevated p-8">
      <h2 className="mb-8 text-2xl font-bold text-white">게임 정보</h2>

      <div className="flex flex-col gap-6">
        {infoItems.map((item) => (
          <div key={item.label} className="flex flex-col gap-1">
            <span className={labelStyle}>{item.label}</span>
            <p className={valueStyle}>{item.value || '정보 없음'}</p>
          </div>
        ))}

        <hr className="my-2 border-text-light" />
        <p className="text-base leading-relaxed text-gray-300">
          {gameDetail.intro || '게임에 대한 상세 설명이 없습니다.'}
        </p>
      </div>
    </div>
  )
}
