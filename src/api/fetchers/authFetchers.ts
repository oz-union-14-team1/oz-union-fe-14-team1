import { API_BASE_URL } from '@/constants/apiPath'
import { API_PATH } from '@/constants/apiPath'
import api from '@/utils/axios'

type LoginRequest = {
  email: string
  password: string
}

type LoginResponse = {
  accessToken: string
}

export const loginApi = async (data: LoginRequest) => {
  const res = await api.post<LoginResponse>(
    `${API_BASE_URL}${API_PATH.LOGIN_API_PATH}`,
    data
  )

  return res.data
}

/**
 * TODO: 리프래쉬 api 추가 될 예정
 * LOGIN_REFRESH_API_PATH 값 변경 예정
 */
export const refreshApi = async () => {
  const res = await api.post(
    `${API_BASE_URL}${API_PATH.LOGIN_REFRESH_API_PATH}`
  )

  return res.data
}

export type SignupRequest = {
  email: string
  password: string
  name: string
  nickname: string
  gender: string
  phone_number: string
}

export const signupApi = async (data: SignupRequest) => {
  const res = await api.post(`${API_BASE_URL}${API_PATH.SIGNUP_API_PATH}`, data)

  return res.data
}

export type FindIdRequest = {
  phone_number: string
}

export type FindIdResponse = {
  exists: boolean
  identifier?: string
  message: string
}

/**
 * 계정 아이디 찾기 api
 */
export const findIdApi = async (data: FindIdRequest) => {
  const res = await api.post<FindIdResponse>(
    `${API_BASE_URL}${API_PATH.FIND_ID_API_PATH}`,
    data
  )

  return res.data
}
