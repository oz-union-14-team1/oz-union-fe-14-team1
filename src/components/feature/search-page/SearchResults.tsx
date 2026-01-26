'use client'

import { useSearchParams } from 'next/navigation'

import Badge from '@/components/common/badge/Badge'
import { GameCard } from '@/components/common/game-card'
import { SearchEmptyUi } from '@/components/feature/search-page'
import { MOCK_GAMES, type MockGame } from '@/mocks'
import { getTagVariant } from '@/utils/getTagVariant'

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
    <main className="mx-auto my-14 max-w-345 px-4">
      <div className="mb-10 space-y-4">
        <h1 className="text-3xl font-bold text-text-primary">검색 결과</h1>

        {query && (
          <div className="flex items-center gap-2 text-lg">
            <span className="text-text-secondary">검색어:</span>
            <span className="text-gradient-main font-semibold text-shadow-crisp">
              &apos;{query}&apos;
            </span>
          </div>
        )}

        {filters && filterList.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm text-text-secondary">적용된 필터</p>
            <div className="flex flex-wrap gap-2">
              {filterList.map((filter, index) => (
                <Badge
                  key={`${filter}-${index}`}
                  variant={getTagVariant(index + 1)}
                  size="md"
                >
                  {filter}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>

      {games.length > 0 ? (
        <div className="flex flex-wrap justify-start gap-x-2 gap-y-8">
          {games.map((game) => (
            <div key={game.id} className="w-[calc(50%-4px)] sm:w-auto">
              <div className="-mb-[90px] origin-top-left scale-[0.78] transition-transform duration-300 sm:mb-0 sm:scale-100">
                <GameCard id={game.id} name={game.name} imgUrl={game.imgUrl} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <SearchEmptyUi />
      )}
    </main>
  )
}

export default SearchResults
