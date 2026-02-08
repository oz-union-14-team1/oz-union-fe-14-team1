import { useQuery } from '@tanstack/react-query'

import { getMyReviewsApi } from '@/api/fetchers/myreviewFetchers'
import { useAuthStore } from '@/store/useAuthStore'

/**
 * 내가 작성한 리뷰 목록 조회 훅
 * GET /api/v1/community/reviews/me
 */
export const useGetMyReviews = () => {
  const { isInitialized, accessToken } = useAuthStore()
  return useQuery({
    queryKey: ['myReviews'],
    queryFn: async () => {
      const data = await getMyReviewsApi()
      return data.results
    },
    staleTime: 1000 * 60 * 5, // 5분
    retry: false, // 401/400 에러 시 재시도 방지
    enabled: isInitialized && !!accessToken,
  })
}
