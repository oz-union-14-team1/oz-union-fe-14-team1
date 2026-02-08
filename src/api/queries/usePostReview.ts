import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { postReview } from '@/api/fetchers/reveiwFetchers'
import { useToast } from '@/hooks'

type PostReviewOptions = Omit<
  UseMutationOptions<
    unknown,
    AxiosError,
    { content: string; rating: number; gameId: string }
  >,
  'mutationFn' | 'onSuccess' | 'onError'
>

export default function usePostReview(options?: PostReviewOptions) {
  const { triggerToast } = useToast()

  return useMutation({
    ...options,
    mutationFn: async ({ content, gameId, rating }) => {
      await postReview(gameId, content, rating)
    },
    onSuccess: () => {
      triggerToast('success', '리뷰 작성에 성공했습니다.')
      window.location.reload()
    },
    onError: () => {
      triggerToast(
        'error',
        '리뷰 작성에 실패했습니다. 잠시 후 다시 시도해주세요.'
      )
    },
  })
}
