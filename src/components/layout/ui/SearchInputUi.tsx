import { Funnel } from 'lucide-react'

import { SearchInput } from '@/components/common/input'
import { cn } from '@/utils/cn'

export default function SearchInputUi({
  searchInputValue,
  handleSearchChange,
  handleKeyDown,
  handleSearchSubmit,
  isFilterOpen,
  setIsFilterOpen,
  selectedFilters,
}: {
  searchInputValue: string
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
  handleSearchSubmit: () => void
  isFilterOpen: boolean
  setIsFilterOpen: (isFilterOpen: boolean) => void
  selectedFilters: number[]
}) {
  return (
    <div className="relative hidden items-center gap-2.5 md:flex">
      <SearchInput
        className="w-72"
        value={searchInputValue}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
        onSearch={handleSearchSubmit}
        placeholder="검색어를 입력하세요"
      />

      <button
        type="button"
        aria-label={isFilterOpen ? '필터 닫기' : '필터 열기'}
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        className={cn(
          'pointer-events-auto relative size-10 rounded-default transition-all duration-200',
          'flex shrink-0 items-center justify-center',
          selectedFilters.length > 0
            ? 'bg-linear-to-r from-main-purple via-main-violet to-main-fuchsia'
            : 'bg-btn-outline-stroke from-main-purple via-main-violet to-main-fuchsia hover:bg-linear-to-r'
        )}
      >
        <Funnel
          fill="currentColor"
          className="size-5.5 stroke-0 text-text-light"
        />
      </button>
    </div>
  )
}
