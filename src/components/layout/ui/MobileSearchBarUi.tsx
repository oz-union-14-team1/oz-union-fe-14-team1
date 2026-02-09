import { ChangeEvent, KeyboardEvent } from 'react'

import { SearchInput } from '@/components/common/input'
import { FilterButtonUi } from '@/components/layout/ui'

interface MobileSearchBarProps {
  searchInputValue: string
  selectedFilters: string[]
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void
  handleSearchSubmit: () => void
  setIsFilterOpen: (value: boolean | ((prev: boolean) => boolean)) => void
}
export default function MobileSearchBarUi({
  searchInputValue,
  selectedFilters,
  handleSearchChange,
  handleKeyDown,
  handleSearchSubmit,
  setIsFilterOpen,
}: MobileSearchBarProps) {
  return (
    <div className="sticky top-21 z-40 w-full border-b border-white/10 bg-background/95 px-2 py-3 backdrop-blur-xl md:hidden">
      <div className="relative flex items-center gap-2">
        <SearchInput
          className="flex-1"
          value={searchInputValue}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          onSearch={handleSearchSubmit}
          placeholder="검색어를 입력하세요"
        />
        {/* 모바일용 필터 버튼 코드 분리 -> FilterButtonUi 컴포넌트 사용*/}
        <FilterButtonUi
          hasActiveFilters={selectedFilters.length > 0}
          onClick={() => setIsFilterOpen((prev) => !prev)}
          className="data-[filter-trigger=mobile]"
        />
      </div>
    </div>
  )
}
