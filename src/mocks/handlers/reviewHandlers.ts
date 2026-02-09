import { http, HttpResponse } from 'msw'

import { API_PATH, MSW_BASE_URL } from '@/constants/apiPath'
import { MOCK_REVIEW_DETAIL } from '@/mocks/data/mockReviewDetail'

const getReviewDetail = http.get(
  `${MSW_BASE_URL}${API_PATH.REVIEW_DETAIL_API_PATH(':review_id')}`,
  ({ params }) => {
    const { review_id } = params

    if (!review_id) {
      HttpResponse.json(
        { error_detail: '유효하지 않은 조회 요청입니다.' },
        { status: 400 }
      )
    }

    return HttpResponse.json(MOCK_REVIEW_DETAIL)
  }
)

const putReview = http.patch(
  `${MSW_BASE_URL}${API_PATH.REVIEW_PATCH_DELETE_API_PATH(`:review_id`)}`,
  async ({ request }) => {
    const { content } = (await request.clone().json()) as { content: string }

    if (!content) {
      return HttpResponse.json({}, { status: 400 })
    }

    return HttpResponse.json({}, { status: 200 })
  }
)

const deleteReview = http.delete(
  `${MSW_BASE_URL}${API_PATH.REVIEW_PATCH_DELETE_API_PATH(`:review_id`)}`,
  () => HttpResponse.json({}, { status: 204 })
)

const postReviewComment = http.post(
  `${MSW_BASE_URL}${API_PATH.REVIEW_DETAIL_API_PATH(':review_id')}`,
  async ({ request }) => {
    const { content } = (await request.clone().json()) as { content: string }

    if (!content) {
      return HttpResponse.json({}, { status: 400 })
    }

    return HttpResponse.json({}, { status: 201 })
  }
)

export const reviewHandlers = [
  getReviewDetail,
  postReviewComment,
  putReview,
  deleteReview,
]
