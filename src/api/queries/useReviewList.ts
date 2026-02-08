import { useQuery, UseQueryOptions } from '@tanstack/react-query'

import { getReviewList } from '@/api/fetchers/reveiwFetchers'
import { ReviewList } from '@/types/api-response/review-response'

type ReviewListOptions = Omit<
  UseQueryOptions<ReviewList>,
  'queryFn' | 'queryKey'
>

export default function useReviewList(
  gameId: string,
  page = 1,
  options?: ReviewListOptions
) {
  return useQuery({
    ...options,
    queryKey: ['review', 'list', page],
    queryFn: async () => {
      const data = await getReviewList(gameId, page)
      return data
    },
  })
}
