import axios from 'axios'

import { convertToCamelCase } from './convertToCamelCase'

const api = axios.create({
  withCredentials: true,
})

api.interceptors.response.use((response) => {
  response.data = convertToCamelCase(response.data)
  return response
})

export default api
