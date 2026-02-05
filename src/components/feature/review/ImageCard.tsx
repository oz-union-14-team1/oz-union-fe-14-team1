import Image from 'next/image'

import { GameDetail } from '@/types/api-response/game-response'

type ReviewPageProps = {
  game: Pick<GameDetail, 'id' | 'name' | 'images'>
}

export default function ImageCardHeader({ game, ...props }: ReviewPageProps) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-bold text-white">{game.name}</h3>
      <div className="rounded-5 relative h-121 w-200 overflow-hidden border-[3px] shadow-2xl">
        <Image
          src={game.images[0]}
          alt={game.name}
          fill
          className="object-cover"
          unoptimized
          {...props}
        />
      </div>
    </div>
  )
}

const ImageCard = ImageCardHeader
export { ImageCard }
