import { GameCard } from '@/components/common/game-card'
import { MOCK_GAMES } from '@/mocks'

export default function GameCardTestPage() {
  return (
    <div className="mx-auto flex max-w-(--width-container) flex-wrap justify-start gap-2">
      {MOCK_GAMES.map((game) => (
        <GameCard
          key={`grid-${game.id}`}
          id={game.id}
          name={game.name}
          imgUrl={game.images[0] || ''}
        />
      ))}
    </div>
  )
}
