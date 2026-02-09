import GameCard from '@/components/common/game-card/GameCard'
import { MOCK_GAME } from '@/mocks/data/mockGameList'

export default function GameCardTestPage() {
  return (
    <div className="mx-auto flex max-w-(--width-container) flex-wrap justify-start gap-2">
      {MOCK_GAME.map((game) => (
        <GameCard
          key={`grid-${game.id}`}
          id={game.id}
          name={game.name}
          image={game.image || ''}
        />
      ))}
    </div>
  )
}
