'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { ROUTES_PATHS } from '@/constants'
import { searchStorage } from '@/utils/searchStorage'

const MIN_SEARCH_LENGTH = 1

export default function useSearchInputUi() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const isSearchPage = pathname === ROUTES_PATHS.SEARCH_PAGE

  const currentQuery = searchParams.get('query') || searchStorage.getQuery()
  const currentFiltersParam = searchParams.get('filters')

  const selectedFilters = useMemo(() => {
    if (!isSearchPage) {
      return []
    }

    if (currentFiltersParam) {
      return currentFiltersParam.split(',').filter(Boolean)
    }
    return searchStorage.getFilters()
  }, [currentFiltersParam, isSearchPage])

  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const [searchInputValue, setSearchInputValue] = useState(() => {
    if (isSearchPage) {
      return currentQuery
    }
    return searchStorage.getQuery()
  })

  useEffect(() => {
    if (!isSearchPage) {
      setTimeout(() => {
        setSearchInputValue('')
        searchStorage.removeFilters()
      }, 0)
    }
  }, [isSearchPage])

  useEffect(() => {
    setTimeout(() => {
      setIsFilterOpen(false)
    }, 0)
  }, [isSearchPage])

  useEffect(() => {
    searchStorage.setQuery(currentQuery)
    if (selectedFilters.length > 0) {
      searchStorage.setFilters(selectedFilters)
    } else {
      searchStorage.removeFilters()
    }
  }, [currentQuery, selectedFilters])

  useEffect(() => {
    const trimmedValue = searchInputValue.trim()

    if (!trimmedValue) {
      searchStorage.removeQuery()
      return
    }

    const timeoutId = setTimeout(() => {
      if (trimmedValue.length >= MIN_SEARCH_LENGTH) {
        searchStorage.setQuery(trimmedValue)

        const params = new URLSearchParams()
        params.set('query', trimmedValue)

        if (selectedFilters.length > 0) {
          params.set('filters', selectedFilters.join(','))
        }

        router.push(`${ROUTES_PATHS.SEARCH_PAGE}?${params.toString()}`)
      }
    }, 500)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [searchInputValue, selectedFilters, router, isSearchPage])

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

    searchStorage.setQuery(trimmedValue)
    searchStorage.setFilters(selectedFilters)

    const params = new URLSearchParams()
    if (trimmedValue) {
      params.set('query', trimmedValue)
    }

    if (selectedFilters.length > 0) {
      params.set('filters', selectedFilters.join(','))
    }

    router.push(`${ROUTES_PATHS.SEARCH_PAGE}?${params.toString()}`)
  }, [searchInputValue, selectedFilters, router])

  const handleFiltersChange = useCallback(
    (newFilters: string[]) => {
      searchStorage.setFilters(newFilters)

      const params = new URLSearchParams()
      if (currentQuery) {
        params.set('query', currentQuery)
      }

      if (newFilters.length > 0) {
        params.set('filters', newFilters.join(','))
      }

      router.push(`${ROUTES_PATHS.SEARCH_PAGE}?${params.toString()}`)
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
