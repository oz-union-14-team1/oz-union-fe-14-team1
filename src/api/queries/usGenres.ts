import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/constants/queryKey'
import { GenreSlug } from '@/types'

import { getGames } from '../fetchers/gameFetchers'
import { getGenres } from '../fetchers/onboardingFetchers'

/**
 * 장르목록(캐러셀용)
 */
export const useGenres = () => {
  return useQuery({
    queryKey: ['genres'] as const,
    queryFn: getGenres,
  })
}

/**
 * 장르별 게임리스트(장르상세페이지용)
 */
export const useGamesByGenre = (genreSlug: GenreSlug) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.GAMES, 'genre', genreSlug] as const,
    queryFn: getGames,
    select: (data) =>
      data.filter((game) =>
        game.tags?.some(
          (tag) =>
            tag.toLowerCase().includes(genreSlug) ||
            genreSlug.includes(tag.toLowerCase())
        )
      ),
  })
}
