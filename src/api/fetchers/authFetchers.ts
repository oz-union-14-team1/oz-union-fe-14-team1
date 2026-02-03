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

type RefreshResponse = {
  accessToken: string
}

/**
 * refresh 토큰 api
 */
export const refreshTokenApi = async () => {
  const res = await api.post<RefreshResponse>(
    `${API_BASE_URL}${API_PATH.LOGIN_REFRESH_API_PATH}`
  )

  return res.data.accessToken
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

type DeleteUserRequest = {
  password: string
}

export const deleteUserApi = (data: DeleteUserRequest) => {
  return api.post<void>(`${API_BASE_URL}${API_PATH.USER_DELETE_API_PATH}`, data)
}
