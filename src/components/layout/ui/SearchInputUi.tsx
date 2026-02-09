'use client'

import { SearchInput } from '@/components/common/input'
import { FilterDrawerUi } from '@/components/layout/ui'

import type { ChangeEvent, KeyboardEvent } from 'react'

type SearchInputUiProps = {
  searchInputValue: string
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void
  handleSearchSubmit: () => void
  isFilterOpen: boolean
  setIsFilterOpen: (isFilterOpen: boolean) => void
  selectedFilters: string[]
  setSelectedFilters: (filters: string[]) => void
}

export default function SearchInputUi({
  searchInputValue,
  handleSearchChange,
  handleKeyDown,
  handleSearchSubmit,
  isFilterOpen,
  setIsFilterOpen,
  selectedFilters,
  setSelectedFilters,
}: SearchInputUiProps) {
  return (
    <div className="relative flex items-center gap-2.5">
      <SearchInput
        className="w-full md:w-56 lg:w-72"
        value={searchInputValue}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
        onSearch={handleSearchSubmit}
        placeholder="검색어를 입력하세요"
      />
      <FilterDrawerUi
        isFilterOpen={isFilterOpen}
        setIsFilterOpen={setIsFilterOpen}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
    </div>
  )
}
