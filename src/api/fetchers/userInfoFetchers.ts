import { API_BASE_URL, API_PATH } from '@/constants/apiPath'
import api from '@/utils/axios'

export type UserInfo = {
  id: number
  email: string
  nickname: string
  name: string
  gender: string
  isActive: true
}

export const getUserInfoApi = async (): Promise<UserInfo> => {
  const res = await api.get(`${API_BASE_URL}${API_PATH.USER_INFO_GET_API_PATH}`)

  return res.data
}
