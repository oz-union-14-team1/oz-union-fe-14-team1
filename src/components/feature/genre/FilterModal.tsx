'use client'

import { SlidersHorizontalIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/common'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import { PLATFORM_OPTIONS } from '@/constants/platformVallue'
import { cn, getUniqueYears } from '@/utils'

import type { Game } from '@/types/api-response/game-response'
import type { GameFilterParams } from '@/types/filter'

type FilterModalProps = {
  games: Game[]
  currentFilters: GameFilterParams
  onFilterChange: (filters: GameFilterParams) => void
}

export default function FilterModal({
  games,
  currentFilters,
  onFilterChange,
}: FilterModalProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const [tempFilters, setTempFilters] =
    useState<GameFilterParams>(currentFilters)
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])
  const [selectedYears, setSelectedYears] = useState<number[]>([])
  const [minScore, setMinScore] = useState<number>(0)

  const availableYears = getUniqueYears(games)

  const handleTogglePlatform = (platform: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    )
  }

  const handleToggleYears = (year: number) => {
    setSelectedYears((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
    )
  }

  const handleApply = () => {
    onFilterChange({
      ...tempFilters,
      platforms: selectedPlatforms.length > 0 ? selectedPlatforms : undefined,
      year: selectedYears.length > 0 ? selectedYears.join(',') : undefined,
      min_score: minScore > 0 ? String(minScore) : undefined,
    })
    setModalOpen(false)
  }

  const handleCancel = () => {
    setTempFilters(currentFilters)
    setSelectedPlatforms([])
    setSelectedYears([])
    setMinScore(0)
    setModalOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setModalOpen((prev) => !prev)}
        className="relative flex items-center gap-3 rounded-sm border border-btn-outline-stroke bg-background px-3 py-1"
      >
        <SlidersHorizontalIcon size={16} className="text-text-light" />
        <span className="text-base text-text-light">필터</span>
      </button>
      {modalOpen && (
        <div
          className={cn(
            `absolute top-10 left-0 z-50`,
            'h-auto w-81 rounded-md',
            'rounded-sm bg-text-inverse/70 shadow-[0px_4px_12px_1px_rgba(0,0,0,0.35)] backdrop-blur-md'
          )}
        >
          <div className="flex flex-col gap-8 px-4 py-12">
            <div>
              <h3 className="text-light mb-4 text-base font-semibold">
                플랫폼
              </h3>
              <div className="flex flex-col gap-2">
                {PLATFORM_OPTIONS.map((platform) => (
                  <div key={platform} className="flex items-center gap-2">
                    <Checkbox
                      id={platform}
                      checked={selectedPlatforms.includes(platform)}
                      onCheckedChange={() => handleTogglePlatform(platform)}
                      className="size-3 bg-surface-checkbox data-[state=checked]:bg-primary-active"
                    />
                    <label
                      htmlFor={platform}
                      className="cursor-pointer text-xs font-light"
                    >
                      {platform}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <hr className="border-surface-checkbox/30" />
            <div>
              <h3 className="text-light mb-4 text-base font-semibold">
                출시연도
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {availableYears.map((year) => (
                  <button
                    key={year}
                    onClick={() => handleToggleYears(year)}
                    className={cn(
                      'rounded-sm px-4 py-1 text-xs font-light text-text-light shadow-filter-default',
                      selectedYears.includes(year)
                        ? 'bg-primary-active font-normal shadow-active'
                        : 'bg-surface-muted shadow-tag-inactive hover:bg-surface-hover'
                    )}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
            <hr className="border-surface-checkbox/30" />
            <div>
              <h3 className="text-light mb-4 text-base font-semibold">
                최소평점
              </h3>
              <Slider
                min={0}
                max={5}
                step={0.1}
                defaultValue={[0]}
                value={[minScore]}
                onValueChange={([value]) => setMinScore(value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="main" onClick={handleApply}>
                적용{' '}
              </Button>
              <Button variant="empty" onClick={handleCancel}>
                취소{' '}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
