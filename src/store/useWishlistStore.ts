'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { GameId } from '@/types'

type WishlistState = {
  wishlistedGameIds: GameId[]
  toggleWishlist: (gameId: GameId) => void
  isWishlisted: (gameId: GameId) => boolean
  clearWishlist: () => void
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      wishlistedGameIds: [],

      toggleWishlist: (gameId: GameId) => {
        set((state) => ({
          wishlistedGameIds: state.wishlistedGameIds.includes(gameId)
            ? state.wishlistedGameIds.filter((id) => id !== gameId)
            : [...state.wishlistedGameIds, gameId],
        }))
      },

      isWishlisted: (gameId: GameId) => {
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
