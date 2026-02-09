import { useQuery } from '@tanstack/react-query'

import { getGameDetail, getGames } from '@/api/fetchers/gameFetchers'
import { getRandomItems } from '@/utils/shuffle'

const QUERY_KEYS = {
  GAMES: ['games', 'all'] as const,
  GAME_DETAIL: (gameId: number) => ['game', gameId],
  GAME_RECOMMEND_PREFERENCE: ['game', 'recommend', 'preference'] as const,
  GAME_RECOMMEND_WISHLIST: ['game', 'recommend', 'whishlist'] as const,
} as const

/**
 * 전체 게임 목록
 */
export const useGames = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GAMES,
    queryFn: getGames,
    staleTime: 1000 * 60 * 5,
  })
}

/**
 * 게임 상세
 */
export const useGameDetail = (gameId: number) => {
  return useQuery({
    queryKey: QUERY_KEYS.GAME_DETAIL(gameId),
    queryFn: () => getGameDetail(gameId),
    enabled: !!gameId,
  })
}

export const useRandomGames = (excludeIds: number[] = []) => {
  return useQuery({
    queryKey: ['games', 'all'] as const,
    queryFn: getGames,
    select: (data) => {
      const filtered = data.filter((g) => !excludeIds.includes(g.id))
      return getRandomItems(filtered, 6)
    },
  })
}
