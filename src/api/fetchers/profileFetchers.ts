import { API_BASE_URL, API_PATH } from '@/constants/apiPath'
import {
  DeleteProfileImage,
  GetProfileImage,
  PostProfileImage,
} from '@/types/api-response/user-response'
import api from '@/utils/axios'

/**
 * ==========================================
 * 🔧 프로필 이미지 Mock 모드 설정
 * ==========================================
 *
 * [현재 상태]: 실제 API 사용 (백엔드 연동)
 *
 * [테스트 시 Mock 모드로 전환]:
 * 1. 아래 USE_MOCK을 true로 변경
 * 2. localStorage를 사용한 로컬 테스트 가능
 *
 * [백엔드 API 경로]:
 * - GET    /api/v1/user/me/image (프로필 이미지 조회)
 * - POST   /api/v1/user/me/image (프로필 이미지 업로드)
 * - DELETE /api/v1/user/me/image (프로필 이미지 삭제)
 * ==========================================
 */
const USE_MOCK = true

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

  if (!res.data) {
    throw new Error('프로필 이미지 정보를 불러올 수 없습니다.')
  }

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

  if (!res.data) {
    throw new Error('프로필 이미지 업로드에 실패했습니다.')
  }

  return res.data
}

/**
 * 프로필 이미지 삭제
 */
export const deleteProfileImageApi = async (): Promise<DeleteProfileImage> => {
  if (USE_MOCK) {
    const { deleteProfileImageApiMock } = await import('./profileFetchers.mock')
    return deleteProfileImageApiMock()
  }

  const res = await api.delete<DeleteProfileImage>(
    `${API_BASE_URL}${API_PATH.DELETE_PROFILE_IMAGE_API_PATH}`
  )
  return res.data
}
