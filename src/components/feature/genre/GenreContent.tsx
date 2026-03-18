'use client'

import { useState } from 'react'

import { useGamesByGenre } from '@/api/queries/useGenres'
import { SORT_OPTIONS } from '@/constants/sortOptions'
import { GenreSlug } from '@/types'
import { GameFilterParams } from '@/types/filter'
import { SortValue } from '@/types/sort'

import FilterModal from './FilterModal'
import GenreList from './GenreList'
import SortDropdown from './SortDropdown'

type GenreContentProps = {
  genreSlug: GenreSlug
  genreName: string
}

export default function GenreContent({
  genreSlug,
  genreName,
}: GenreContentProps) {
  const [sort, setSort] = useState<SortValue>('')
  const [filters, setFilters] = useState<GameFilterParams>({
    genreId: genreSlug,
    page: 1,
    platforms: undefined,
    year: undefined,
    min_score: undefined,
  })

  const {
    data: games,
    isLoading,
    isError,
  } = useGamesByGenre(genreSlug, sort, filters)

  return (
    <div className="flex flex-col gap-3 md:gap-5">
      <div className="mb-3 flex items-center justify-between px-4 md:mb-5">
        <SortDropdown
          options={SORT_OPTIONS}
          value={sort}
          onChange={(value) => setSort(value as SortValue)}
        />
        <FilterModal
          games={games ?? []}
          currentFilters={filters}
          onFilterChange={(newFilters) => setFilters(newFilters)}
        />
      </div>

      <GenreList
        games={games ?? []}
        isLoading={isLoading}
        isError={isError}
        genreName={genreName}
      />
    </div>
  )
}
