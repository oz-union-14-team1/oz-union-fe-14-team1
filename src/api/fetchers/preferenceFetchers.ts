import { API_PATH, MSW_BASE_URL } from '@/constants/apiPath'
import { camelApi } from '@/utils'

export const getPrefernece = async () => {
  const res = await camelApi.get(`${MSW_BASE_URL}${API_PATH.USER_PREFERENCE}`)
  return res.data
}
