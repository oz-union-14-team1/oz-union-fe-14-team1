import { API_BASE_URL, API_PATH } from '@/constants/apiPath'
import {
  GetProfileImage,
  PostProfileImage,
} from '@/types/api-response/user-response'
import api from '@/utils/axios'

/**
 * ==========================================
 * 🔧 프로필 이미지 Mock 모드 설정
 * ==========================================
 *
 * [현재 상태]: Mock 모드 활성화 (localStorage 사용)
 *
 * [백엔드 준비 완료 시]:
 * 1. 아래 USE_MOCK을 false로 변경
 * 2. 백엔드 Django MEDIA 설정 완료 확인
 *    - settings.py: MEDIA_URL, MEDIA_ROOT 설정
 *    - urls.py: static() 설정
 * 3. 테스트: 이미지 업로드 → 새로고침 → 이미지 유지 확인
 *
 * [참고]: docs/DJANGO_MEDIA_SETUP.md
 * ==========================================
 */
const USE_MOCK = true // ← 백엔드 준비 완료 시 false로 변경

/**
 * 프로필 이미지 조회
 */
export const getProfileImageApi = async (): Promise<GetProfileImage> => {
  if (USE_MOCK) {
    const { getProfileImageApiMock } = await import('./profileFetchers.mock')
    return getProfileImageApiMock()
  }

  const res = await api.get<GetProfileImage>(
    `${API_BASE_URL}${API_PATH.GET_PROFILE_IMAGE_API_PATH}`
  )
  return res.data
}

/**
 * 프로필 이미지 업로드
 */
export const postProfileApi = async (
  data: FormData
): Promise<PostProfileImage> => {
  if (USE_MOCK) {
    const { postProfileApiMock } = await import('./profileFetchers.mock')
    return postProfileApiMock(data)
  }

  const res = await api.post<PostProfileImage>(
    `${API_BASE_URL}${API_PATH.POST_PROFILE_IMAGE_API_PATH}`,
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  )
  return res.data
}
