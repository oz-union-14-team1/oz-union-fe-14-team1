'use client'

import { LogoUi, NavMenuUi, SearchInputUi, SearchUserUi } from '@/components/ui'
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
      <header className="fixed top-0 right-0 left-0 z-50 flex h-[85px] w-full items-center bg-background shadow-2xl">
        <div className="flex w-full max-w-[1412px] items-center justify-between gap-4 px-4 md:mx-auto lg:gap-6">
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
