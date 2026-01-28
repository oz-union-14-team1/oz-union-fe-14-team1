import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'

import { postReviewComment } from '@/api/fetchers/reveiwFetchers'
import { useToast } from '@/hooks'

type PostReviewCommentOptions = Omit<
  UseMutationOptions<
    unknown,
    AxiosError,
    { reviewId: number | string; content: string }
  >,
  'mutationFn' | 'onSuccess' | 'onError'
>

export default function usePostReviewComment(
  options?: PostReviewCommentOptions
) {
  const { triggerToast } = useToast()
  const router = useRouter()

  return useMutation({
    mutationFn: postReviewComment,
    onSuccess: () => {
      triggerToast('success', '답글 작성을 완료했습니다.')
      router.refresh()
    },
    onError: () => {
      triggerToast(
        'error',
        '답글 작성에 실패했습니다. 잠시후 다시 시도해주세요.'
      )
    },
    ...options,
  })
}
