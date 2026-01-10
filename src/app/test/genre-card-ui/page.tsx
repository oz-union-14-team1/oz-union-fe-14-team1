'use client'

import GenreCard from '@/components/common/genre-card-ui/GenreCard'
import { useState } from 'react'

const GENRES = [
  { id: 1, name: '어드벤처', imgUrl: '/images/genres/adventure.png' },
  { id: 2, name: '액션', imgUrl: '/images/genres/action.png' },
  { id: 3, name: '슈팅', imgUrl: '/images/genres/shooting.png' },
  { id: 4, name: 'RPG', imgUrl: '/images/genres/rpg.png' },
  { id: 5, name: '힐링', imgUrl: '/images/genres/simulation.png' },
  { id: 6, name: '퍼즐', imgUrl: '/images/genres/puzzle.png' },
  { id: 7, name: '로그라이크', imgUrl: '/images/genres/roguelike.png' },
  { id: 8, name: '서바이벌', imgUrl: '/images/genres/survival.png' },
  { id: 9, name: '아케이드', imgUrl: '/images/genres/arcade.png' },
  { id: 10, name: '레이싱', imgUrl: '/images/genres/racing.png' },
]

export default function GenreCardTestPage() {
  const [selectedIds, setSelectedIds] = useState<number[]>([])

  const handleGenreClick = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((genreId) => genreId !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="mx-auto bg-background p-10">
      <h1 className="text-title mb-6 text-text-light">GenreCard 테스트</h1>

      <div className="flex max-w-245 flex-wrap gap-x-19 gap-y-14">
        {GENRES.map((genre) => (
          <GenreCard
            key={genre.id}
            name={genre.name}
            imgUrl={genre.imgUrl}
            isSelected={selectedIds.includes(genre.id)}
            onClick={() => handleGenreClick(genre.id)}
          />
        ))}
      </div>

      <div className="text-small mt-8 text-text-light">
        선택된 장르:{' '}
        {selectedIds.length > 0
          ? GENRES.filter((g) => selectedIds.includes(g.id))
              .map((g) => g.name)
              .join(', ')
          : '없음'}
      </div>
    </div>
  )
}
