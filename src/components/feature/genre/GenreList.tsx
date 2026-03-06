'use client'

import { useGamesByGenre } from '@/api/queries/useGenres'
import GameCard from '@/components/common/game-card/GameCard'
import GameLoader from '@/components/common/game-loader/GameLoader'
import { GenreSlug } from '@/types'

type GenreListProps = {
  genreSlug: GenreSlug
  genreName: string
}

export default function GenreList({ genreSlug, genreName }: GenreListProps) {
  const { data: games, isLoading, isError } = useGamesByGenre(genreSlug)

  if (isLoading) {
    return <GameLoader />
  }
  if (isError) {
    return <p>게임 목록을 불러오지 못했습니다.</p>
  }
  if (!games?.length) {
    return <p>{genreName} 장르의 게임이 없습니다.</p>
  }

  return (
    <div className="mx-4 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6 md:px-0 lg:grid-cols-4">
      {games.map((game) => (
        <div key={game.id} className="overflow-hidden">
          <GameCard
            id={game.id}
            name={game.name}
            image={game.image}
            variant="grid"
          />
        </div>
      ))}
    </div>
  )
}
