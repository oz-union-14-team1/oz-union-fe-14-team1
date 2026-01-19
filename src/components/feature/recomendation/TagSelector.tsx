'use client'

import { useEffect, useState } from 'react'

import Tag from '@/components/common/tag/Tag'
import { useOnboardingStore } from '@/store/useOnboardingStore'
import { shuffle } from '@/utils/shuffle'

type TagData = {
  id: string
  name: string
}

type TagSelectorProps = {
  tags: TagData[]
}

export function TagSelector({ tags }: TagSelectorProps) {
  const [shuffledTags, setShuffledTags] = useState(tags)
  const selectedTags = useOnboardingStore((state) => state.selectedTags)
  const toggleTag = useOnboardingStore((state) => state.toggleTag)

  useEffect(() => {
    setShuffledTags(shuffle(tags))
  }, [tags])

  return (
    <>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-[clamp(32px,5vh,88px)] md:gap-x-6 md:gap-y-8 lg:gap-x-10 lg:gap-y-14">
        {shuffledTags.map((tag) => (
          <Tag
            key={tag.id}
            label={tag.name}
            isSelected={selectedTags.includes(tag.id)}
            onClick={() => toggleTag(tag.id)}
          />
        ))}
      </div>
    </>
  )
}
