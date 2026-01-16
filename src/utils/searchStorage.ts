const STORAGE_KEY_QUERY = 'playtype_search_query'
const STORAGE_KEY_FILTERS = 'playtype_search_filters'

export const searchStorage = {
  // 검색어 관련
  getQuery: (): string => {
    if (typeof window === 'undefined') {
      return ''
    }
    return localStorage.getItem(STORAGE_KEY_QUERY) || ''
  },

  setQuery: (query: string): void => {
    if (typeof window === 'undefined') {
      return
    }
    if (query) {
      localStorage.setItem(STORAGE_KEY_QUERY, query)
    } else {
      localStorage.removeItem(STORAGE_KEY_QUERY)
    }
  },

  removeQuery: (): void => {
    if (typeof window === 'undefined') {
      return
    }
    localStorage.removeItem(STORAGE_KEY_QUERY)
  },

  // 필터 관련
  getFilters: (): string[] => {
    if (typeof window === 'undefined') {
      return []
    }
    const stored = localStorage.getItem(STORAGE_KEY_FILTERS)
    return stored ? stored.split(',').filter(Boolean) : []
  },

  setFilters: (filters: string[]): void => {
    if (typeof window === 'undefined') {
      return
    }
    if (filters.length > 0) {
      localStorage.setItem(STORAGE_KEY_FILTERS, filters.join(','))
    } else {
      localStorage.removeItem(STORAGE_KEY_FILTERS)
    }
  },

  removeFilters: (): void => {
    if (typeof window === 'undefined') {
      return
    }
    localStorage.removeItem(STORAGE_KEY_FILTERS)
  },

  // 모두 초기화
  clear: (): void => {
    if (typeof window === 'undefined') {
      return
    }
    localStorage.removeItem(STORAGE_KEY_QUERY)
    localStorage.removeItem(STORAGE_KEY_FILTERS)
  },
}
