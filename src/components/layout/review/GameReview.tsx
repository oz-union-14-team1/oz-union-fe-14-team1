import React from 'react'

type GameReviewProps = {
  platform?: string // 플랫폼
  developer?: string // 개발사
  publisher?: string // 출판사
  genre?: string // 장르
  playTime?: string // 플레이타임
  releaseDate?: string // 출시일
  description?: string // 게임 설명
}

export const GameReview = (props: GameReviewProps) => {
  const labelStyle = 'text-sm text-gray-500'
  const valueStyle = 'text-lg text-white font-semibold'

  // 1. 표시할 항목들을 데이터 배열로 정리
  const infoItems = [
    { label: '플랫폼', value: props.platform },
    { label: '개발사', value: props.developer },
    { label: '퍼블리셔', value: props.publisher },
    { label: '장르', value: props.genre },
    { label: '플레이타임', value: props.playTime },
    { label: '출시일', value: props.releaseDate },
  ]

  return (
    <div className="w-100 rounded-2xl border border-gray-800 bg-[#121212] p-8 shadow-2xl">
      <h2 className="mb-8 text-2xl font-bold text-white">게임 정보</h2>

      <div className="flex flex-col gap-6">
        {infoItems.map((item) => (
          <div key={item.label} className="flex flex-col gap-1">
            <span className={labelStyle}>{item.label}</span>
            <p className={valueStyle}>{item.value || '정보 없음'}</p>
          </div>
        ))}

        <hr className="my-2 border-gray-800" />
        <p className="text-base leading-relaxed text-gray-300">
          {props.description || '게임에 대한 상세 설명이 없습니다.'}
        </p>
      </div>
    </div>
  )
}
