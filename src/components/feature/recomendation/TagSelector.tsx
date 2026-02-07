'use client'

import { useEffect, useState } from 'react'

import { Tag as TagButton } from '@/components/common'
import { useOnboardingStore } from '@/store/useOnboardingStore'
import { cn } from '@/utils'
import { shuffle } from '@/utils/shuffle'

import type { Tag } from '@/types/api-response/onboarding-response'

type TagSelectorProps = {
  tags: Tag[]
}

export function TagSelector({ tags }: TagSelectorProps) {
  const [shuffledTags, setShuffledTags] = useState(tags)
  const { selectedTags, toggleTag } = useOnboardingStore((state) => state)

  useEffect(() => {
    setShuffledTags(shuffle(tags))
  }, [tags])

  const isTagSelected = (tagId: number) => {
    return selectedTags.some((t) => t.id === tagId)
  }

  return (
    <>
      <div
        className={cn(
          'flex flex-wrap justify-center gap-x-4 gap-y-[clamp(32px,5vh,88px)]',
          'md:gap-x-6 md:gap-y-8 lg:gap-x-10 lg:gap-y-14'
        )}
      >
        {shuffledTags.map((tag) => (
          <TagButton
            key={tag.id}
            label={tag.tag}
            isSelected={isTagSelected(tag.id)}
            onClick={() => toggleTag(tag)}
          />
        ))}
      </div>
    </>
  )
}
