'use client'

import { SearchInput } from '@/components/common/input/SearchInput'
import { useState } from 'react'

export default function BaseInputTestPage() {
  const [value, setValue] = useState('')

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">SearchInput</h1>

      <section className="flex flex-col gap-4">
        <SearchInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="searchinput 컴포넌트"
        />
      </section>
    </div>
  )
}
