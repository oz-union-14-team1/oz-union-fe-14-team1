import { API_BASE_URL, API_PATH } from '@/constants/apiPath'
import {
  AiReviewSummary,
  ReviewDetail,
  ReviewList,
} from '@/types/api-response/review-response'
import { api } from '@/utils'

export const getReviewDetail = async (reviewId: string) => {
  const res = await api.get<ReviewDetail>(
    `${API_BASE_URL}${API_PATH.REVIEW_DETAIL_API_PATH(reviewId)}`
  )

  return res.data
}

export const getReviewList = async (gameId: string, page = 1) => {
  const res = await api.get<ReviewList>(
    `${API_BASE_URL}${API_PATH.REVIEWS(gameId)}?page=${page}`
  )

  return res.data
}

export const getAiReveiwSummary = async (gameId: string) => {
  const res = await api.get<AiReviewSummary>(
    `${API_BASE_URL}${API_PATH.AI_SUMMARY(gameId)}`
  )

  return res.data
}

export const postReview = async (
  gameId: string,
  content: string,
  rating: number
) => {
  await api.post(`${API_BASE_URL}${API_PATH.REVIEWS(gameId)}`, {
    content,
    rating,
  })
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
