'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type WishlistState = {
  wishlistedGameIds: string[]
  toggleWishlist: (gameId: string) => void
  isWishlisted: (gameId: string) => boolean
  clearWishlist: () => void
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      wishlistedGameIds: [],

      toggleWishlist: (gameId) => {
        set((state) => ({
          wishlistedGameIds: state.wishlistedGameIds.includes(gameId)
            ? state.wishlistedGameIds.filter((id) => id !== gameId)
            : [...state.wishlistedGameIds, gameId],
        }))
      },

      isWishlisted: (gameId) => {
        return get().wishlistedGameIds.includes(gameId)
      },

      clearWishlist: () => {
        set({ wishlistedGameIds: [] })
      },
    }),
    {
      name: 'wishlist-storage',
    }
  )
)
