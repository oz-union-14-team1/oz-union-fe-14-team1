'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { searchStorage } from '@/utils/searchStorage'

const MIN_SEARCH_LENGTH = 1

export default function useSearchInputUi() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // URL에서 현재 검색어와 필터 가져오기, 없으면 localStorage에서 가져오기
  const currentQuery = searchParams.get('query') || searchStorage.getQuery()
  const currentFiltersParam = searchParams.get('filters')

  const selectedFilters = useMemo(() => {
    if (currentFiltersParam) {
      return currentFiltersParam.split(',').filter(Boolean)
    }
    return searchStorage.getFilters()
  }, [currentFiltersParam])

  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // 검색 입력값 - 검색 페이지에서는 URL 쿼리를 기본값으로 사용, 없으면 localStorage
  const [searchInputValue, setSearchInputValue] = useState(() => {
    if (pathname === '/search') {
      return currentQuery
    }
    return searchStorage.getQuery()
  })

  // 홈 페이지로 이동하면 검색창 비우기 + 필터 닫기
  useEffect(() => {
    if (pathname === '/') {
      setTimeout(() => {
        setSearchInputValue('')
      }, 0)
    }
  }, [pathname])

  // 페이지 이동 시 필터 닫기
  useEffect(() => {
    setTimeout(() => {
      setIsFilterOpen(false)
    }, 0)
  }, [pathname])

  // 검색어와 필터를 localStorage에 동기화 (단일 책임)
  useEffect(() => {
    searchStorage.setQuery(currentQuery)
    if (selectedFilters.length > 0) {
      searchStorage.setFilters(selectedFilters)
    } else {
      searchStorage.removeFilters()
    }
  }, [currentQuery, selectedFilters])

  // 디바운스된 자동 검색
  useEffect(() => {
    const trimmedValue = searchInputValue.trim()

    // 검색어가 비어있으면 localStorage에서 삭제
    if (!trimmedValue) {
      searchStorage.removeQuery()
      return
    }

    // 500ms 후에 자동으로 검색 실행
    const timeoutId = setTimeout(() => {
      if (trimmedValue.length >= MIN_SEARCH_LENGTH) {
        searchStorage.setQuery(trimmedValue)

        // 검색 시 현재 필터도 함께 URL에 포함
        const params = new URLSearchParams()
        params.set('query', trimmedValue)

        if (selectedFilters.length > 0) {
          params.set('filters', selectedFilters.join(','))
        }

        router.push(`/search?${params.toString()}`)
      }
    }, 500)

    // cleanup: 다음 타이핑이 일어나면 이전 타이머 취소
    return () => {
      clearTimeout(timeoutId)
    }
  }, [searchInputValue, selectedFilters, router])

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

    // localStorage에 저장
    searchStorage.setQuery(trimmedValue)
    searchStorage.setFilters(selectedFilters)

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
    (newFilters: string[]) => {
      // localStorage에 저장
      searchStorage.setFilters(newFilters)

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
    setSelectedFilters: handleFiltersChange,
    handleKeyDown,
    isFilterOpen,
    setIsFilterOpen,
    selectedFilters,
  }
}
