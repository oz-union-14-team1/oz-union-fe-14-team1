import { API_BASE_URL, API_PATH } from '@/constants/apiPath'
import { ReviewDetail } from '@/types/api-response/review-response'
import { api } from '@/utils'

export const getReviewDetail = async (reviewId: string) => {
  const res = await api.get<ReviewDetail>(
    `${API_BASE_URL}${API_PATH.REVIEW_DETAIL_API_PATH(reviewId)}`
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
    `${API_BASE_URL}${API_PATH.REVIEW_DETAIL_API_PATH(String(reviewId))}`,
    { content }
  )
}

export const deleteReview = async ({
  reviewId,
}: {
  reviewId: string | number
}) => {
  await api.delete(
    `${API_BASE_URL}${API_PATH.REVIEW_PATCH_DELETE_API_PATH(String(reviewId))}`
  )
}

export const patchReview = async ({
  reviewId,
  content,
  rating,
}: {
  reviewId: string | number
  content: string
  rating: number
}) => {
  await api.patch(
    `${API_BASE_URL}${API_PATH.REVIEW_PATCH_DELETE_API_PATH(String(reviewId))}`,
    {
      content,
      rating,
    }
  )
}
