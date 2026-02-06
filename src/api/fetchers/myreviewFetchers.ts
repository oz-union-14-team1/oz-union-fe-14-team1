'use server'

import { API_BASE_URL, API_PATH } from '@/constants/apiPath'
import { GetMyReviews } from '@/types/api-response/myreview-response'
import { api } from '@/utils'

/**
 * 내가 작성한 리뷰 목록 조회
 * GET /api/v1/community/reviews/me
 */
export const getMyReviewsApi = async (): Promise<GetMyReviews> => {
  const res = await api.get<GetMyReviews>(
    `${API_BASE_URL}${API_PATH.GET_MY_REVIEWS_API_PATH}`
  )
  return res.data
}
