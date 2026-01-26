export const MSW_BASE_URL = 'https://msw/api/v1'

export const API_PATH = {
  REVIEW_DETAIL_API_PATH: (review_id: string) =>
    `${MSW_BASE_URL}/community/reviews/${review_id}/comments`,
} as const
