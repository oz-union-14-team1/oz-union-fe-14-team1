import { Game } from '@/types/api-response/game-response'

import { MOCK_GAME_DETAIL } from './mockGameDetail'

export const MOCK_GAME: Game[] = MOCK_GAME_DETAIL.map((detail) => ({
  id: detail.id,
  name: detail.name,
  tags: detail.tags,
  image: detail.images[0],
  releasedAt: detail.releasedAt,
  platforms: detail.platforms,
}))
