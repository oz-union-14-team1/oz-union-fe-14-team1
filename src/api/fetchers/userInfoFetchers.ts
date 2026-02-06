import { API_BASE_URL, API_PATH } from '@/constants/apiPath'
import api from '@/utils/axios'

export type UserInfo = {
  email: string
  nickname: string
  name: string
  gender: 'M' | 'F'
  isActive: boolean
  phoneNumber: string
  birthday: string
  id?: number
}

export const getUserInfoApi = async (): Promise<UserInfo> => {
  const res = await api.get(`${API_BASE_URL}${API_PATH.USER_ME_API_PATH}`)

  return res.data
}

/**
 * PATCH 요청 타입
 */
export type UpdateUserRequest = {
  nickname: string
  name: string
  gender?: string
  phoneNumber?: string
  birthday?: string
  password?: string
}

/**
 * PATCH 응답 타입
 */
export type UpdateUserResponse = {
  email: string
  nickname: string
  name: string
  gender: string
  isActive: boolean
  phoneNumber: string
}

/**
 * 회원정보 수정 API
 */
export const updateUserInfoApi = async (
  body: UpdateUserRequest
): Promise<UpdateUserResponse> => {
  const res = await api.patch(
    `${API_BASE_URL}${API_PATH.USER_ME_API_PATH}`,
    body
  )

  return res.data
}
