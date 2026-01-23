'use client'

import { Suspense } from 'react'

import { SearchResults } from '@/components/feature/search-page'

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchResults />
    </Suspense>
  )
}
