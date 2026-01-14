'use client'

import { useState } from 'react'

import Tag from '@/components/common/tag/Tag'

const TAGS = [
  { id: 1, label: '#아케이드' },
  { id: 2, label: '#스토리중심' },
  { id: 3, label: '#전략적인' },
  { id: 4, label: '#긴장감있는' },
  { id: 5, label: '#RPG' },
]

export default function TagTestPage() {
  const [selectedIds, setSelectedIds] = useState<number[]>([])

  const handleTagClick = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((tagId) => tagId !== id) : [...prev, id]
    )
  }

  return (
    <div className="p-10">
      <h1 className="text-title mb-6">Tag 컴포넌트 테스트</h1>

      <div className="flex gap-4">
        {TAGS.map((tag) => (
          <Tag
            key={tag.id}
            label={tag.label}
            isSelected={selectedIds.includes(tag.id)}
            onClick={() => handleTagClick(tag.id)}
          />
        ))}
      </div>

      <div className="text-small mt-8">
        선택된 ID: {selectedIds.join(', ') || '없음'}
      </div>
    </div>
  )
}
