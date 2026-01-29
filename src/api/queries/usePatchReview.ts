import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { patchReview } from '@/api/fetchers/reveiwFetchers'

type PatchReviewOption = Omit<
  UseMutationOptions<
    unknown,
    AxiosError,
    { reviewId: string | number; content: string; rating: number }
  >,
  'mutationFn'
>

export default function usePatchReview(options?: PatchReviewOption) {
  return useMutation({
    mutationFn: patchReview,
    ...options,
  })
}
