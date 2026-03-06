import { GenreSlug } from '@/assets/genre-assets/genreData'
import { Game } from '@/types/api-response/game-response'
import { camelApi } from '@/utils'

export const getGamesByGenre = async (slug: GenreSlug): Promise<Game[]> => {
  const response = await camelApi.get(`/game/genre/${slug}`)
  return response.data
}
