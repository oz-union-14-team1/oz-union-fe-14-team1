import { create } from 'zustand'

import type { Genre, Tag } from '@/types/api-response/onboarding-response'

type OnboardingState = {
  selectedTags: Tag[]
  selectedGenres: Genre[]
  aiTendency: string | null

  toggleTag: (tag: Tag) => void
  toggleGenre: (genre: Genre) => void
  setAiTendency: (tendency: string) => void
  reset: () => void
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  selectedTags: [],
  selectedGenres: [],
  aiTendency: null,

  toggleTag: (tag) =>
    set((state) => {
      const tagExists = state.selectedTags.find((t) => t.id === tag.id)
      if (tagExists) {
        return {
          selectedTags: state.selectedTags.filter((t) => t.id !== tag.id),
        }
      }
      return { selectedTags: [...state.selectedTags, tag] }
    }),

  toggleGenre: (genre) =>
    set((state) => {
      const genreExists = state.selectedGenres.find((g) => g.id === genre.id)
      if (genreExists) {
        return {
          selectedGenres: state.selectedGenres.filter((g) => g.id !== genre.id),
        }
      }
      return { selectedGenres: [...state.selectedGenres, genre] }
    }),

  setAiTendency: (tendency) => set({ aiTendency: tendency }),

  reset: () =>
    set({
      selectedTags: [],
      selectedGenres: [],
      aiTendency: null,
    }),
}))
