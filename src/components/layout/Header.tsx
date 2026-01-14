'use client'

import {
  LogoUi,
  NavMenuUi,
  SearchInputUi,
  SearchUserUi,
} from '@/components/layout/ui'
import { useSearchInputUi } from '@/hooks'

export default function Header() {
  const {
    searchInputValue,
    handleSearchChange,
    handleSearchSubmit,
    handleKeyDown,
    isFilterOpen,
    setIsFilterOpen,
  } = useSearchInputUi()
  return (
    <>
      <header className="sticky top-0 right-0 left-0 z-50 flex h-21 w-full items-center bg-background shadow-2xl">
        <div className="flex w-full max-w-(--width-container) items-center justify-between gap-4 px-4 md:mx-auto lg:gap-6">
          <div className="flex shrink-0 items-center gap-4 lg:gap-6">
            <LogoUi />
            <NavMenuUi />
          </div>
          <div className="flex min-w-0 flex-1 items-center justify-end gap-4">
            <SearchInputUi
              searchInputValue={searchInputValue}
              handleSearchChange={handleSearchChange}
              handleKeyDown={handleKeyDown}
              handleSearchSubmit={handleSearchSubmit}
              isFilterOpen={isFilterOpen}
              setIsFilterOpen={setIsFilterOpen}
              selectedFilters={[]}
            />
            <SearchUserUi />
          </div>
        </div>
      </header>
    </>
  )
}
