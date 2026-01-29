import axios from 'axios'

import { convertToCamelCase } from '@/utils/convertToCamelCase'

export const camelApi = axios.create({
  withCredentials: true,
})

camelApi.interceptors.response.use((response) => {
  response.data = convertToCamelCase(response.data)
  return response
})
