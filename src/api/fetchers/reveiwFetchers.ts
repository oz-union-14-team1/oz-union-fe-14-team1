import { API_PATH } from '@/constants/apiPath'
import { ReviewDetail } from '@/types/api-response/review-response'
import { api } from '@/utils'

export const getReviewDetail = async (reviewId: string) => {
  const res = await api.get<ReviewDetail>(
    API_PATH.REVIEW_DETAIL_API_PATH(reviewId)
  )

  return res.data
}
