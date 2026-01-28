import { API_PATH, MSW_BASE_URL } from '@/constants/apiPath'
import { ReviewDetail } from '@/types/api-response/review-response'
import { api } from '@/utils'

export const getReviewDetail = async (reviewId: string) => {
  const res = await api.get<ReviewDetail>(
    `${MSW_BASE_URL}${API_PATH.REVIEW_DETAIL_API_PATH(reviewId)}`
  )

  return res.data
}

export const postReviewComment = async ({
  reviewId,
  content,
}: {
  reviewId: number | string
  content: string
}) => {
  await api.post(
    `${MSW_BASE_URL}${API_PATH.REVIEW_DETAIL_API_PATH(String(reviewId))}`,
    { content }
  )
}
