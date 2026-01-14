import { GameCard } from '@/components/common/game-card/GameCard'

type GameCardData = {
  id: string
  name: string
  imgUrl: string
}

export const GAMES: GameCardData[] = [
  {
    id: '1',
    name: 'Kingdom Come: Deliverance II',
    imgUrl: '/src/assets/images/games/game1.png',
  },
  {
    id: '2',
    name: "Sid Meier's Civilization® VII",
    imgUrl: '/src/assets/images/games/game2.png',
  },
]

export default function GameCardTestPage() {
  return (
    <div className="mx-auto flex max-w-(--width-container) flex-wrap justify-start gap-2">
      {GAMES.map((game) => (
        <GameCard
          key={`grid-${game.id}`}
          id={game.id}
          name={game.name}
          imgUrl={game.imgUrl}
        />
      ))}
    </div>
  )
}
