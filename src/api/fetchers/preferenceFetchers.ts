import { API_BASE_URL, API_PATH } from '@/constants/apiPath'
import { camelApi } from '@/utils'

export const getPrefernece = async () => {
  const res = await camelApi.get(`${API_BASE_URL}${API_PATH.USER_PREFERENCE}`)
  console.log('preference 호출')
  return res.data
}
