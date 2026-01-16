import { cn } from '@/utils'
import { ChevronDown } from 'lucide-react'
import FilterItemUi from './FilterItemUi'
import type { FilterCategory } from '@/mocks/mockFilterCategories'

interface FilterCategoryProps {
  category: FilterCategory
  isOpen: boolean
  selectedFilters: string[]
  onToggleCategory: (id: number) => void
  onToggleFilter: (item: string) => void
}

export default function FilterCategoryUi({
  category,
  isOpen,
  selectedFilters,
  onToggleCategory,
  onToggleFilter,
}: FilterCategoryProps) {
  return (
    <div key={category.id} className="flex flex-col gap-3 sm:gap-4">
      <button
        type="button"
        onClick={() => onToggleCategory(category.id)}
        className="group relative inline-flex w-full items-center justify-between text-left transition-all sm:pointer-events-none"
      >
        <h3 className="relative inline-block w-fit text-base font-bold text-text-light sm:text-lg">
          {category.name}
          <div className="absolute -bottom-0.5 left-0 h-0.5 w-full overflow-hidden rounded-full sm:-bottom-1">
            <div className="h-full w-full bg-gradient-to-r from-main-purple via-main-violet to-main-fuchsia opacity-60" />
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </div>
        </h3>
        <ChevronDown
          className={cn(
            'size-5 text-text-light/60 transition-transform duration-300 sm:hidden',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'flex flex-wrap gap-2 p-1 transition-all duration-300 sm:gap-2.5',
          isOpen
            ? 'max-h-[500px] opacity-100'
            : 'max-h-0 overflow-hidden opacity-0 sm:max-h-[500px] sm:opacity-100'
        )}
      >
        {category.list.map((item: FilterCategory['list'][number]) => {
          const isSelected = selectedFilters.includes(item)
          return (
            <FilterItemUi
              key={item}
              item={item}
              isSelected={isSelected}
              onToggleFilter={onToggleFilter}
            />
          )
        })}
      </div>
    </div>
  )
}
