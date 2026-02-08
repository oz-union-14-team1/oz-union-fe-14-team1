import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/constants/queryKey'

import { getSearchParams } from '../fetchers/searchFetchers'

export const useSearchGames = (q: string, page: number) => {
  return useQuery({
    queryKey: QUERY_KEYS.GAME_SEARCH_PARAM(q, page),
    queryFn: () => getSearchParams(q, page),
    enabled: !!q,
    placeholderData: (previoseData) => previoseData,
  })
}
