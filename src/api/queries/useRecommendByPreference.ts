import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/constants/queryKey'

import { getRecommendByPreference } from '../fetchers/gameFetchers'

/**
 * 선호 장르 기반 추천(로그인 필요)
 */
export const useRecommendByPreference = (isLoggedIn: boolean) => {
  return useQuery({
    queryKey: QUERY_KEYS.GAME_RECOMMEND_PREFERENCE,
    queryFn: getRecommendByPreference,
    select: (data) => data?.results ?? [],
    enabled: isLoggedIn,
  })
}
