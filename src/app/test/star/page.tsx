'use client'

import { useState } from 'react'

import { StarRating } from '@/components/feature/review/review/Star'

export default function StarTestPage() {
  const [rating, setRating] = useState(3.8)

  return (
    <div className="p-10">
      <h1 className="mb-4 text-xl font-bold">별점 테스트</h1>

      <StarRating value={rating} onChange={setRating} size={48} />

      <p className="mt-4">현재 점수: {rating}점</p>
    </div>
  )
}
