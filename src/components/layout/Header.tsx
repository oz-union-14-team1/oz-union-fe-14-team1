'use client'

import { usePathname } from 'next/navigation'
import { useRef } from 'react'

import { SearchInput } from '@/components/common/input'
import {
  FilterButtonUi,
  FilterDrawerUi,
  LogoUi,
  NavMenuUi,
  SearchUserUi,
} from '@/components/layout/ui'
import { useSearchInputUi } from '@/hooks'

export default function Header() {
  const pathname = usePathname()
  const isSearchPage = pathname === '/search'
  const filterTriggerRef = useRef<HTMLButtonElement>(null)

  const {
    searchInputValue,
    handleSearchChange,
    handleSearchSubmit,
    handleKeyDown,
    isFilterOpen,
    setIsFilterOpen,
    selectedFilters,
    setSelectedFilters,
  } = useSearchInputUi()

  return (
    <>
      <header className="pointer-events-auto sticky top-0 right-0 left-0 z-50 flex h-21 w-full items-center border-b border-white/10 bg-background/80 shadow-[0_8px_32px_rgba(168,85,247,0.1)] backdrop-blur-xl">
        <div className="flex w-full max-w-(--width-container) items-center justify-between gap-4 px-4 md:mx-auto lg:gap-6">
          <div className="flex shrink-0 items-center gap-4 lg:gap-6">
            <LogoUi />
            <NavMenuUi />
          </div>
          <div className="flex min-w-0 flex-1 items-center justify-end gap-4">
            {/* 데스크톱용 검색바 */}
            <div className="relative hidden items-center gap-2.5 md:flex">
              <SearchInput
                className="w-56 lg:w-72"
                value={searchInputValue}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
                onSearch={handleSearchSubmit}
                placeholder="검색어를 입력하세요"
              />
              <FilterDrawerUi
                ref={filterTriggerRef}
                isFilterOpen={isFilterOpen}
                setIsFilterOpen={setIsFilterOpen}
                selectedFilters={selectedFilters}
                setSelectedFilters={setSelectedFilters}
              />
            </div>
            <SearchUserUi />
          </div>
        </div>
      </header>

      {/* 모바일용 검색바 - 검색 페이지에서만 표시 */}
      {isSearchPage && (
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
            <div data-filter-trigger="mobile">
              <FilterButtonUi
                ref={filterTriggerRef}
                hasActiveFilters={selectedFilters.length > 0}
                className="data-[filter-trigger=mobile]"
                onClick={() => setIsFilterOpen((prev) => !prev)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
