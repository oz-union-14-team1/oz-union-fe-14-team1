import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'

import { patchReview } from '@/api/fetchers/reveiwFetchers'
import { useToast } from '@/hooks'

type PatchReviewOption = Omit<
  UseMutationOptions<
    unknown,
    AxiosError,
    { reviewId: string | number; content: string; rating: number }
  >,
  'mutationFn'
>

export default function usePatchReview(options?: PatchReviewOption) {
  const { triggerToast } = useToast()
  const router = useRouter()

  return useMutation({
    mutationFn: patchReview,
    onSuccess: () => {
      triggerToast('success', '리뷰를 성공적으로 수정했습니다.')
      router.refresh()
    },
    onError: () => {
      triggerToast(
        'error',
        '리뷰 수정에 실패했습니다. 잠시후 다시 시도해주세요.'
      )
    },
    ...options,
  })
}
