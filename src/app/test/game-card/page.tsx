import { GameCard } from '@/components/common/game-card'
import Game1Image from '@/assets/images/games/game1.png'
import Game2Image from '@/assets/images/games/game2.png'
import { StaticImageData } from 'next/image'

type GameCardData = {
  id: string
  name: string
  imgUrl: string | StaticImageData
}

export const GAMES: GameCardData[] = [
  {
    id: '1',
    name: 'Kingdom Come: Deliverance II',
    imgUrl: Game1Image,
  },
  {
    id: '2',
    name: "Sid Meier's Civilization® VII",
    imgUrl: Game2Image,
  },
  {
    id: '3',
    name: 'Kingdom Come: Deliverance II',
    imgUrl: Game1Image,
  },
  {
    id: '4',
    name: "Sid Meier's Civilization® VII",
    imgUrl: Game2Image,
  },
  {
    id: '5',
    name: 'Kingdom Come: Deliverance II',
    imgUrl: Game1Image,
  },
  {
    id: '6',
    name: "Sid Meier's Civilization® VII",
    imgUrl: Game2Image,
  },
  {
    id: '7',
    name: 'Kingdom Come: Deliverance II',
    imgUrl: Game1Image,
  },
  {
    id: '8',
    name: "Sid Meier's Civilization® VII",
    imgUrl: Game2Image,
  },
  {
    id: '9',
    name: 'Kingdom Come: Deliverance II',
    imgUrl: Game1Image,
  },
  {
    id: '10',
    name: "Sid Meier's Civilization® VII",
    imgUrl: Game2Image,
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
          imgUrl={game.imgUrl as StaticImageData}
        />
      ))}
    </div>
  )
}
