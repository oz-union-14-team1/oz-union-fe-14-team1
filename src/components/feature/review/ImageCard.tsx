import Image from 'next/image'

import { GameDetail } from '@/types/api-response/game-response'
import { cn } from '@/utils'

type ReviewPageProps = {
  game: Pick<GameDetail, 'id' | 'name' | 'images'>
  className?: string
}

export default function ImageCardHeader({
  game,
  className,
  ...props
}: ReviewPageProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <h3 className="text-lg font-bold text-white">{game.name}</h3>
      <Image
        src={game.images[0]}
        alt={game.name}
        width={200}
        height={100}
        className="rounded-5 relative aspect-video w-full max-w-200 overflow-hidden border-[3px] object-cover shadow-2xl"
        {...props}
      />
    </div>
  )
}

const ImageCard = ImageCardHeader
export { ImageCard }
