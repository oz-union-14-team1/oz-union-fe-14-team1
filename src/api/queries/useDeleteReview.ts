import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'

import { deleteReview } from '@/api/fetchers/reveiwFetchers'
import { useToast } from '@/hooks'

type DeleteReviewOption = Omit<
  UseMutationOptions<unknown, AxiosError, { reviewId: string | number }>,
  'mutationFn' | 'onSuccess' | 'onError'
>

export default function useDeleteReveiw(
  gameId: string | number,
  options?: DeleteReviewOption
) {
  const { triggerToast } = useToast()
  const router = useRouter()

  return useMutation({
    mutationFn: deleteReview,
    onSuccess: () => {
      triggerToast('success', '리뷰를 성공적으로 삭제했습니다.')
      router.replace(`/review/${gameId}`)
    },
    onError: () => {
      triggerToast(
        'error',
        '리뷰 삭제에 실패했습니다. 잠시후 다시 시도해주세요.'
      )
    },
    ...options,
  })
}
