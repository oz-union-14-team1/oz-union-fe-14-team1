'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

import { GameCard } from '@/components/common/game-card'
import { MOCK_GAMES, type MockGame } from '@/mocks'

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('query')
  const filters = searchParams.get('filters')

  const filterList = filters ? filters.split(',').filter(Boolean) : []

  const games = MOCK_GAMES.filter((game: MockGame) => {
    const matchesQuery =
      !query || game.name.toLowerCase().includes(query.toLowerCase())

    const matchesFilters =
      filterList.length === 0 ||
      filterList.some(
        (filter) =>
          game.genres.includes(filter) ||
          game.platforms.includes(filter) ||
          game.players.includes(filter) ||
          game.price === filter ||
          game.mood.includes(filter)
      )

    return matchesQuery && matchesFilters
  })

  return (
    <main className="mx-auto w-full max-w-(--width-container) grow px-4 py-8 text-text-light">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">검색 결과</h1>
        {(query || filters) && (
          <p className="text-text-light/80">
            {query && `‘${query}’에 대한 검색 결과입니다.`}
            {filters && ` (적용된 필터: ${filters.split(',').join(', ')})`}
          </p>
        )}
      </div>

      {games.length > 0 ? (
        <div className="grid grid-cols-2 justify-items-center gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {games.map((game) => (
            <GameCard
              key={game.id}
              id={game.id}
              name={game.name}
              imgUrl={game.imgUrl}
            />
          ))}
        </div>
      ) : (
        <div className="flex h-64 items-center justify-center text-text-light/60">
          <p>검색 결과가 없습니다.</p>
        </div>
      )}
    </main>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchResults />
    </Suspense>
  )
}
