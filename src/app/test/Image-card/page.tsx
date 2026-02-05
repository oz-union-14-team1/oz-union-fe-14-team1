import { ImageCard } from '@/components/feature/review/ImageCard'
import { GameDetail } from '@/types/api-response/game-response'

const GameData: Pick<GameDetail, 'images' | 'id' | 'name'> = {
  images: ['imageUrl'],
  id: 1,
  name: '젤다',
}

export default function Page() {
  return <ImageCard game={GameData} />
}
