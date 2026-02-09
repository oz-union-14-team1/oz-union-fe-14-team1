import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from 'axios'

import { API_BASE_URL, API_PATH } from '@/constants/apiPath'
import { useAuthStore } from '@/store/useAuthStore'
import { convertToCamelCase } from '@/utils/convertToCamelCase'

type CustomAxiosRequestConfig = InternalAxiosRequestConfig & {
  _retry?: boolean
}

/**
 * 공통 response interceptor
 */
const attachDefaultResponseInterceptor = (instance: AxiosInstance) => {
  /**
   * 요청 인터셉터: accessToken 자동 첨부
   */
  instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = useAuthStore.getState().accessToken

    if (token) {
      config.headers?.set('Authorization', `Bearer ${token}`)
    }

    return config
  })

  let refreshing: Promise<string> | null = null

  /**
   * 응답 인터셉터
   */
  instance.interceptors.response.use(
    (response) => {
      response.data = convertToCamelCase(response.data)

      return response
    },

    async (error: AxiosError) => {
      const original = error.config as CustomAxiosRequestConfig
      if (error.response?.status !== 401 || original._retry) {
        return Promise.reject(error)
      }

      original._retry = true

      try {
        const res = await refreshApi.get(API_PATH.LOGIN_REFRESH_API_PATH)
        const newToken = res.data.accessToken ?? res.data.access_token
        if (!newToken) {
          throw new Error('no accessToken')
        }
        console.log('intercep : ' + newToken)
        useAuthStore.getState().setToken(newToken)
        original.headers?.set('Authorization', `Bearer ${newToken}`)

        return instance(original)
      } catch {
        return Promise.reject(error)
      } finally {
        refreshing = null
      }
    }
  )
}

/**
 *  base API
 */
export const api = axios.create({
  withCredentials: true,
})

export default api

attachDefaultResponseInterceptor(api)

/**
 * camelCase API
 */
export const camelApi = axios.create({
  withCredentials: true,
})

attachDefaultResponseInterceptor(camelApi)

camelApi.interceptors.response.use((res) => {
  res.data = convertToCamelCase(res.data)
  return res
})

/**
 * refresh API
 */
export const refreshApi = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
})
