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
  const res = await api.get<RefreshResponse>(
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

/**
 * 회원탈퇴 api
 */
export const deleteUserApi = async (data: DeleteUserRequest) => {
  const res = await api.post<void>(
    `${API_BASE_URL}${API_PATH.USER_DELETE_API_PATH}`,
    data
  )

  return res
}

/**
 * 로그아웃 api
 */
export const logoutApi = async (): Promise<void> => {
  await api.post(`${API_BASE_URL}${API_PATH.USER_LOGOUT_API_PATH}`)
}

type CheckEmailRequest = {
  email: string
}

type CheckEmailResponse = {
  available: boolean
  message: string
}

/**
 * 이메일 중복 확인 API
 */
export const checkEmailApi = async (
  data: CheckEmailRequest
): Promise<CheckEmailResponse> => {
  const res = await api.post<CheckEmailResponse>(
    `${API_BASE_URL}${API_PATH.CHECK_EMAIL_API_PATH}`,
    data
  )
  return res.data
}

type CheckNickNameRequest = {
  nickname: string
}

type CheckNickNameResponse = {
  available: boolean
  message: string
}

/**
 * 닉네임 중복 확인 API
 */
export const checkNickNameApi = async (
  data: CheckNickNameRequest
): Promise<CheckNickNameResponse> => {
  const res = await api.post<CheckNickNameResponse>(
    `${API_BASE_URL}${API_PATH.CHECK_NICKNAME_API_PATH}`,
    data
  )

  return res.data
}

export type FindPasswordRequest = {
  identifier: string
  phone_number: string
  code?: string
}

export type FindPasswordResponse = {
  message: string
}

/**
 * 비밀번호 재설정 요청 API
 */
export const findPasswordRequestApi = async (
  data: FindPasswordRequest
): Promise<FindPasswordResponse> => {
  const res = await api.post<FindPasswordResponse>(
    `${API_BASE_URL}${API_PATH.PASSWORD_RESET_REQUEST_API_PATH}`,
    data
  )
  return res.data
}

export type ResetPasswordConfirmRequest = {
  new_password: string
  new_password_confirm: string
}

export type ResetPasswordConfirmResponse = {
  message: string
}

/**
 * 비밀번호 재설정 확정 API
 */
export const findPasswordConfirmApi = async (
  data: ResetPasswordConfirmRequest
): Promise<ResetPasswordConfirmResponse> => {
  const res = await api.post<ResetPasswordConfirmResponse>(
    `${API_BASE_URL}${API_PATH.PASSWORD_RESET_CONFIRM_API_PATH}`,
    data
  )

  return res.data
}

export type SendCodeRequest = {
  phone_number: string
  purpose: 'find_account' | 'password_reset' | 'update_phone'
}

export type SendCodeResponse = {
  message: string
  code: string
}

/**
 * 인증번호 전송 버튼에 대한 api
 */
export const sendCodeApi = async (
  data: SendCodeRequest
): Promise<SendCodeResponse> => {
  const res = await api.post<SendCodeResponse>(
    `${API_BASE_URL}${API_PATH.PHONENUMBER_SEND_API_PATH}`,
    data
  )

  return res.data
}

export type VerifyCodeRequest = {
  phone_number: string
  code: string
  purpose: SendCodeRequest['purpose']
}

export type VerifyCodeResponse = {
  message: string
}

/**
 * 인증번호 확인 버튼에 대한 api
 */
export const verifyCodeApi = async (
  data: VerifyCodeRequest
): Promise<VerifyCodeResponse> => {
  const res = await api.post<VerifyCodeResponse>(
    `${API_BASE_URL}${API_PATH.CODE_VERIFY_API_PATH}`,
    data
  )

  return res.data
}
