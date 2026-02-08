import { useQuery, UseQueryOptions } from '@tanstack/react-query'

import { getAiReveiwSummary } from '@/api/fetchers/reveiwFetchers'
import { AiReviewSummary } from '@/types/api-response/review-response'

type AiSummaryOptions = Omit<
  UseQueryOptions<AiReviewSummary>,
  'queryFn' | 'queryKey'
>

export default function useAiSummary(
  gameId: string,
  options?: AiSummaryOptions
) {
  return useQuery({
    ...options,
    queryKey: ['ai-summary', gameId],
    queryFn: async () => {
      const data = await getAiReveiwSummary(gameId)

      return data
    },
  })
}
