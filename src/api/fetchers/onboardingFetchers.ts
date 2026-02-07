import { API_BASE_URL, API_PATH } from '@/constants/apiPath'
import {
  Genre,
  PreferenceRequest,
  Tag,
} from '@/types/api-response/onboarding-response'
import { camelApi } from '@/utils'
import { getRandomItems } from '@/utils/shuffle'

export const getTags = async (): Promise<Tag[]> => {
  const response = await camelApi.get<Tag[]>(
    `${API_BASE_URL}${API_PATH.ONBOARDING_TAGS}`
  )

  return getRandomItems(response.data, 30)
}

export const getGenres = async (): Promise<Genre[]> => {
  const response = await camelApi.get<Genre[]>(
    `${API_BASE_URL}${API_PATH.ONBOARDING_GENRES}`
  )
  return getRandomItems(response.data, 12)
}

/*
 * 선택한 태그/장르 저장
 */
export const savePreference = async (data: PreferenceRequest) => {
  const response = await camelApi.post(
    `${API_BASE_URL}${API_PATH.ONBOARDING_PREFERENCE}`,
    data
  )
  return response.data
}

/*
 * AI 성향 분석 결과 조회
 */
export const getAiTendency = async (): Promise<string> => {
  const response = await camelApi.get(
    `${API_BASE_URL}${API_PATH.ONBOARDING_AI_TENDENCY}`
  )
  return response.data.tendency
}

/*
 * 온보딩 완료 (preference 저장 + AI 분석)
 */
export const completeOnBoarding = async (
  data: PreferenceRequest
): Promise<string> => {
  await savePreference(data)
  const tendency = await getAiTendency()
  return tendency
}
