import { create } from 'zustand'

type OnboardingState = {
  selectedTags: string[]
  selectedGenres: number[]

  toggleTag: (tagId: string) => void
  toggleGenre: (genreId: number) => void
  reset: () => void
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  selectedTags: [],
  selectedGenres: [],

  toggleTag: (tagId) =>
    set((state) => ({
      selectedTags: state.selectedTags.includes(tagId)
        ? state.selectedTags.filter((id) => id !== tagId)
        : [...state.selectedTags, tagId],
    })),

  toggleGenre: (genreId) =>
    set((state) => ({
      selectedGenres: state.selectedGenres.includes(genreId)
        ? state.selectedGenres.filter((id) => id !== genreId)
        : [...state.selectedGenres, genreId],
    })),

  reset: () => set({ selectedTags: [], selectedGenres: [] }),
}))
