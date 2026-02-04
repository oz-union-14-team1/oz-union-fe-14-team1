import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios'

import { ROUTES_PATHS } from '@/constants'
import { API_PATH } from '@/constants/apiPath'
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
      const original = error.config as CustomAxiosRequestConfig

      if (error.response?.status !== 401) {
        return Promise.reject(error)
      }

      if (original._retry) {
        return Promise.reject(error)
      }

      if (
        error.response?.status === 401 &&
        original.url === API_PATH.LOGIN_REFRESH_API_PATH
      ) {
        useAuthStore.getState().clear()
        location.href = ROUTES_PATHS.LOGIN_PAGE
        return Promise.reject(error)
      }

      original._retry = true

      try {
        if (!refreshing) {
          refreshing = api
            .get(API_PATH.LOGIN_REFRESH_API_PATH)
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

        original.headers?.set('Authorization', `Bearer ${newToken}`)

        return api(original)
      } catch (error) {
        const store = useAuthStore.getState()

        store.clear()
        location.href = ROUTES_PATHS.LOGIN_PAGE

        return Promise.reject(error)
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
