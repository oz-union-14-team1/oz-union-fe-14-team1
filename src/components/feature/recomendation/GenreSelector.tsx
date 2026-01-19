'use client'

import { GenreCard } from '@/components/common'
import { useOnboardingStore } from '@/store/useOnboardingStore'
import { Genre } from '@/types/game'

type GenreSelectorProps = {
  genres: Genre[]
}

export default function GenreSelector({ genres }: GenreSelectorProps) {
  const { selectedGenres, toggleGenre } = useOnboardingStore((state) => state)

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-3 gap-y-14 md:grid-cols-4 md:gap-x-12 md:gap-y-8 lg:grid-cols-6 lg:gap-x-19 lg:gap-y-14">
        {genres.map((genre) => (
          <GenreCard
            key={genre.id}
            name={genre.name}
            imgUrl={genre.imgUrl}
            isSelected={selectedGenres.includes(genre.id)}
            onClick={() => toggleGenre(genre.id)}
          />
        ))}
      </div>
    </div>
  )
}
