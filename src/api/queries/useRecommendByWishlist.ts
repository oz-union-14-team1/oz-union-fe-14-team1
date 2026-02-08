import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/constants/queryKey'

import { getRecommendByWishlist } from '../fetchers/gameFetchers'

/**
 * Whishlist 기반 추천(로그인 필요)
 */
export const useRecommendByWhishlist = (isLoggedIn: boolean) => {
  return useQuery({
    queryKey: QUERY_KEYS.GAME_RECOMMEND_WISHLIST,
    queryFn: getRecommendByWishlist,
    select: (data) => data?.results ?? [],
    enabled: isLoggedIn,
  })
}
