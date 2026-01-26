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

export const reviewHandlers = [getReviewDetail]
