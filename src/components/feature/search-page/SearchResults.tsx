'use client'

import { useSearchParams } from 'next/navigation'

import { useSearchGames } from '@/api/queries/useSearchGame'
import Badge from '@/components/common/badge/Badge'
import GameCard from '@/components/common/game-card/GameCard'
import { SearchEmptyUi } from '@/components/feature/search-page'
import { getTagVariant } from '@/utils/getTagVariant'

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('query') ?? ''

  const page = Number(searchParams.get('page') ?? 1)

  const { data, isLoading } = useSearchGames(query, page)
  const games = data?.results ?? []

  if (!query || !games.length) {
    return <SearchEmptyUi />
  }
  if (isLoading) {
    return <div>로딩중...</div>
  }

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

        {query && (
          <div className="flex flex-wrap gap-2">
            {query.split(',').map((q, index) => (
              <Badge
                key={`search-${q}-${index}`}
                variant={getTagVariant(index)}
                size="md"
              >
                #{q}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {games.length > 0 ? (
        <div className="flex flex-wrap justify-start gap-x-2 gap-y-8">
          {games.map((game) => (
            <div key={game.id} className="w-[calc(50%-4px)] sm:w-auto">
              <div className="-mb-22.5 origin-top-left scale-[0.78] transition-transform duration-300 sm:mb-0 sm:scale-100">
                <GameCard
                  id={game.id}
                  name={game.name}
                  image={game.image || ''}
                />
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
