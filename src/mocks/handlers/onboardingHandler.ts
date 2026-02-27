import { delay, http, HttpResponse } from 'msw'

import { API_PATH, MSW_BASE_URL } from '@/constants/apiPath'
import { PreferenceRequest } from '@/types/api-response/onboarding-response'
import { generatePlayType } from '@/utils/generatePlayType'

import { MOCK_GENRES } from '../data/mockGenres'
import { MOCK_TAGS } from '../data/mockTags'

let savedTagIds: number[] = []
let savedGenreIds: number[] = []

export const onboardingHandlers = [
  http.get(`${MSW_BASE_URL}${API_PATH.ONBOARDING_TAGS}`, async () => {
    await delay(300)

    return HttpResponse.json(MOCK_TAGS)
  }),

  http.get(`${MSW_BASE_URL}${API_PATH.ONBOARDING_GENRES}`, async () => {
    await delay(300)

    return HttpResponse.json(MOCK_GENRES)
  }),

  http.post(
    `${MSW_BASE_URL}${API_PATH.ONBOARDING_PREFERENCE}`,
    async ({ request }) => {
      const body = (await request.json()) as PreferenceRequest
      console.log('MSW: savePreference 호출됨', body)

      // tendency 에서 쓸 값 저장
      ;((savedTagIds = body.Tags ?? []), (savedGenreIds = body.Genres ?? []))

      await delay(300)

      return HttpResponse.json({ success: true })
    }
  ),

  http.get(`${MSW_BASE_URL}${API_PATH.ONBOARDING_AI_TENDENCY}`, async () => {
    const result = generatePlayType(savedTagIds, savedGenreIds)
    console.log('MSW: AI Tendency 핸들러 실행됨', result)

    // ai 분석 딜레이
    await delay(2000)
    return HttpResponse.json({
      tendency: `${result.emoji}${result.title}`,
    })
  }),
]
