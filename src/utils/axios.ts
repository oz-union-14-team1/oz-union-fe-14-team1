import axios, { InternalAxiosRequestConfig } from 'axios'

import { API_BASE_URL } from '@/constants/apiPath'
import { useAuthStore } from '@/store/useAuthStore'

import { convertToCamelCase } from './convertToCamelCase'

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
})

/**
 * 요청 인터셉터: accessToken 자동 첨부
 */
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = useAuthStore.getState().accessToken

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

api.interceptors.response.use((response) => {
  response.data = convertToCamelCase(response.data)
  return response
})

export default api
