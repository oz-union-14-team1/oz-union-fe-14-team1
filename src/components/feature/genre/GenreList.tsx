'use client'

import { useGamesByGenre } from '@/api/queries/usGenres'
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
    <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
      {games.map((game) => (
        <div key={game.id}>
          <GameCard id={game.id} name={game.name} image={game.image} />
        </div>
      ))}
    </div>
  )
}
