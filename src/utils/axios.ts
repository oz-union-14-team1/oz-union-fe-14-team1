import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios'

import { ROUTES_PATHS } from '@/constants'
import { API_PATH } from '@/constants/apiPath'
import { useAuthStore } from '@/store/useAuthStore'
import { convertToCamelCase } from '@/utils/convertToCamelCase'

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
      config.headers.Authorization = `Bearer ${token}`
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

    /**
     * 응답 인터셉터
     * - 401 에러시
     */
    async (error) => {
      const original = error.config

      if (error.response?.status !== 401 || original._retry) {
        return Promise.reject(error)
      }

      original._retry = true

      try {
        if (!refreshing) {
          refreshing = api
            /**
             * refresh_api 추후 생성되면 변경예정
             */
            .post(API_PATH.LOGIN_REFRESH_API_PATH)
            .then((res) => {
              const token = res.data.accessToken
              useAuthStore.getState().setToken(token)
              return token
            })
            .finally(() => {
              refreshing = null
            })
        }

        const newToken = await refreshing

        original.headers.Authorization = `Bearer ${newToken}`

        return api(original)
      } catch (e) {
        useAuthStore.getState().clear()
        location.href = ROUTES_PATHS.LOGIN_PAGE
        return Promise.reject(e)
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
