import { useQuery } from '@tanstack/react-query'

import {
  getGameDetail,
  getGames,
  getRecommendByPreference,
  getRecommendByWishlist,
} from '@/api/fetchers/gameFetchers'

const QUERY_KEYS = {
  GAMES: ['game'] as const,
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
    retry: false,
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

/**
 * 선호 장르 기반 추천(로그인 필요)
 */
export const useRecommendByPreference = (isLoggedIn: boolean) => {
  return useQuery({
    queryKey: QUERY_KEYS.GAME_RECOMMEND_PREFERENCE,
    queryFn: getRecommendByPreference,
    enabled: isLoggedIn,
  })
}

/**
 * Whishlist 기반 추천(로그인 필요)
 */
export const useRecommendByWhishlist = (isLoggedIn: boolean) => {
  return useQuery({
    queryKey: QUERY_KEYS.GAME_RECOMMEND_WISHLIST,
    queryFn: getRecommendByWishlist,
    enabled: isLoggedIn,
  })
}
