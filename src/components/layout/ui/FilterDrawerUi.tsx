'use client'

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

import { Drawer, DrawerContent, DrawerTitle } from '@/components/ui'
import { useDrawerOutsideClick } from '@/hooks'
import { MOCK_FILTER_CATEGORIES } from '@/mocks'

import FilterButtonUi from './FilterButtonUi'
import FilterCategoryUi from './FilterCategoryUi'
import ResetFilterButtonUi from './ResetFilterButtonUi'

const FilterDrawerUi = forwardRef<
  HTMLButtonElement,
  {
    isFilterOpen: boolean
    setIsFilterOpen: (isFilterOpen: boolean) => void
    selectedFilters: string[]
    setSelectedFilters: (filters: string[]) => void
  }
>(function FilterDrawerUi(
  { isFilterOpen, setIsFilterOpen, selectedFilters, setSelectedFilters },
  ref
) {
  const drawerContentRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const [optimisticFilters, setOptimisticFilters] = useState(selectedFilters)
  const [openCategories, setOpenCategories] = useState<number[]>([1]) // 첫 번째 카테고리만 열림

  useImperativeHandle(ref, () => triggerRef.current!, [triggerRef])

  useEffect(() => {
    setOptimisticFilters(selectedFilters)
  }, [selectedFilters])

  // 필터 드로어 외부 클릭 핸들러 코드 분리 -> useDrawerOutsideClick 훅 사용
  useDrawerOutsideClick(isFilterOpen, () => setIsFilterOpen(false), {
    drawerContent: drawerContentRef as React.RefObject<HTMLElement>,
    trigger: triggerRef as React.RefObject<HTMLElement>,
  })

  const handleToggleFilter = (item: string) => {
    const newFilters = optimisticFilters.includes(item)
      ? optimisticFilters.filter((f) => f !== item)
      : [...optimisticFilters, item]
    setOptimisticFilters(newFilters)
    setSelectedFilters(newFilters)
  }

  const handleReset = () => {
    setOptimisticFilters([])
    setSelectedFilters([])
  }

  const toggleCategory = (categoryId: number) => {
    setOpenCategories((prev) => {
      if (prev.includes(categoryId)) {
        return prev.filter((id) => id !== categoryId)
      }
      return [...prev, categoryId]
    })
  }

  return (
    <Drawer
      direction="top"
      open={isFilterOpen}
      onOpenChange={setIsFilterOpen}
      modal={false}
      noBodyStyles
      dismissible={false}
      shouldScaleBackground={false}
    >
      {/* 모바일용 필터 버튼 코드 분리 -> FilterButtonUi 컴포넌트 사용*/}
      <FilterButtonUi
        ref={triggerRef}
        hasActiveFilters={optimisticFilters.length > 0}
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        className="data-[filter-trigger=mobile]"
      />
      <DrawerContent
        ref={drawerContentRef}
        className="inset-x-0 top-21 max-h-[calc(85vh-5.25rem)] border-t border-white/10 bg-background/80 backdrop-blur-xl md:max-h-[calc(80vh-5.25rem)]"
      >
        <div className="mx-auto flex w-full max-w-(--width-container) flex-col gap-4 px-3 py-4 pb-6 sm:gap-6 sm:px-4 sm:pb-8">
          <div className="flex items-center justify-between pt-4 sm:mt-10 sm:pt-8 md:mt-0">
            <DrawerTitle className="bg-gradient-to-r from-text-light via-main-violet to-text-light bg-clip-text text-xl font-bold text-transparent sm:text-2xl">
              필터
            </DrawerTitle>
            {/* 초기화 버튼 코드 분리 -> ResetFilterButtonUi 컴포넌트 사용*/}
            <ResetFilterButtonUi onReset={handleReset} />
          </div>

          {/* 필터 카테고리 목록 */}
          <div className="grid grid-cols-1 gap-5 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {MOCK_FILTER_CATEGORIES.map((category) => {
              const isOpen = openCategories.includes(category.id)
              return (
                // 모바일용 필터 카테고리 코드 분리 -> FilterCategoryUi (FilterItemUi 포함 ) 컴포넌트 사용
                <FilterCategoryUi
                  key={category.id}
                  category={category}
                  isOpen={isOpen}
                  selectedFilters={optimisticFilters}
                  onToggleCategory={toggleCategory}
                  onToggleFilter={handleToggleFilter}
                />
              )
            })}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
})

FilterDrawerUi.displayName = 'FilterDrawerUi'

export default FilterDrawerUi
