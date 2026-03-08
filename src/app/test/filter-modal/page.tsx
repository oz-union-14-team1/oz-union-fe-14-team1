'use client'

import { useState } from 'react'

import FilterModal from '@/components/feature/genre/FilterModal'
import { MOCK_GAME } from '@/mocks'

import type { GameFilterParams } from '@/types/filter'

export default function FilterModalTestPage() {
  const [filters, setFilters] = useState<GameFilterParams>({
    genreId: 'test',
    page: 1,
  })

  return (
    <main className="min-h-screen bg-neutral-900 p-10 text-white">
      <h1 className="mb-10 text-2xl font-bold">FilterModal UI Test</h1>

      <section className="space-y-8">
        <h2 className="text-lg font-semibold">Default</h2>
        <div className="flex items-center gap-6 rounded-lg bg-neutral-800 p-10">
          <FilterModal
            games={MOCK_GAME}
            currentFilters={filters}
            onFilterChange={(newFilters) => setFilters(newFilters)}
          />
        </div>

        {/* 적용된 필터 확인용 */}
        <div className="rounded-lg bg-neutral-800 p-6">
          <h2 className="mb-3 text-lg font-semibold">적용된 필터 상태</h2>
          <pre className="text-sm text-green-400">
            {JSON.stringify(filters, null, 2)}
          </pre>
        </div>
      </section>
    </main>
  )
}
