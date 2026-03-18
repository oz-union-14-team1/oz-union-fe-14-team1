import { GenreSlug } from '@/assets/genre-assets/genreData'
import { Game } from '@/types/api-response/game-response'
import { GameFilterParams } from '@/types/filter'
import { SortValue } from '@/types/sort'
import { camelApi } from '@/utils'

export const getGamesByGenre = async (
  slug: GenreSlug,
  sort: SortValue = '',
  filters: GameFilterParams
): Promise<Game[]> => {
  const params = new URLSearchParams()
  if (sort) {
    params.set('sort', sort)
  }

  if (filters.platforms?.length) {
    params.set('platforms', filters.platforms.join(','))
  }
  if (filters.year) {
    params.set('year', filters.year)
  }
  if (filters.min_score) {
    params.set('min_score', filters.min_score)
  }

  const query = params.toString()
  const response = await camelApi.get(
    `/game/genre/${slug}${query ? `?${query}` : ''}`
  )
  return response.data
}
