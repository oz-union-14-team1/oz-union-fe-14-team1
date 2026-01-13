'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useMemo, useState, useCallback } from 'react'

const MIN_SEARCH_LENGTH = 1

export default function useSearchInputUi() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // URL에서 현재 검색어와 필터 가져오기
  const currentQuery = searchParams.get('query') || ''
  const currentFiltersParam = searchParams.get('filters')

  const selectedFilters = useMemo(
    () =>
      currentFiltersParam
        ? currentFiltersParam.split(',').map(Number).filter(Boolean)
        : [],
    [currentFiltersParam]
  )

  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // 검색 입력값 - 검색 페이지에서는 URL 쿼리를 기본값으로 사용
  const [searchInputValue, setSearchInputValue] = useState(() =>
    pathname === '/search' ? currentQuery : ''
  )

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInputValue(e.target.value)
    },
    []
  )

  const handleSearchSubmit = useCallback(() => {
    const trimmedValue = searchInputValue.trim()

    if (
      trimmedValue.length < MIN_SEARCH_LENGTH &&
      selectedFilters.length === 0
    ) {
      return
    }

    // 검색 시 현재 필터도 함께 URL에 포함
    const params = new URLSearchParams()
    if (trimmedValue) {
      params.set('query', trimmedValue)
    }

    if (selectedFilters.length > 0) {
      params.set('filters', selectedFilters.join(','))
    }

    router.push(`/search?${params.toString()}`)
  }, [searchInputValue, selectedFilters, router])

  // 필터 변경 핸들러
  const handleFiltersChange = useCallback(
    (newFilters: number[]) => {
      const params = new URLSearchParams()
      if (currentQuery) {
        params.set('query', currentQuery)
      }

      if (newFilters.length > 0) {
        params.set('filters', newFilters.join(','))
      }

      router.push(`/search?${params.toString()}`)
    },
    [currentQuery, router]
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleSearchSubmit()
      }
    },
    [handleSearchSubmit]
  )

  return {
    searchInputValue,
    setSearchInputValue,
    handleSearchChange,
    handleSearchSubmit,
    handleFiltersChange,
    handleKeyDown,
    isFilterOpen,
    setIsFilterOpen,
  }
}
