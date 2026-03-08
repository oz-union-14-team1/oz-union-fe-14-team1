'use client'

/**
 * Zustand 기반 위시리스트 관리
 * useWishlistStore로 위시리스트 관리 진행.
 *
 * [백엔드서버api로 위시리스트 관리 및 사용법]
 * - 조회: useGetWishlist() from '@/api/queries/useGetWishlist'
 * - 추가: usePostWishlist() from '@/api/queries/useWishlistMutations'
 * - 삭제: useDeleteWishlist() from '@/api/queries/useWishlistMutations'
 *
 * [참고 구현]
 * - HeartButtonUi.tsx
 * - WishList.tsx
 * ==========================================
 */

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { GameId } from '@/types'
import { WishlistGame } from '@/types/api-response/wishlist-response'

type WishlistState = {
  wishlistGames: WishlistGame[]
  addWishlist: (game: WishlistGame) => void
  removeWishlist: (gameId: GameId) => void
  // toggleWishlist: (gameId: GameId) => void
  isWishlisted: (gameId: GameId) => boolean
  clearWishlist: () => void
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      wishlistGames: [],

      addWishlist: (game) => {
        const exists = get().wishlistGames.some((g) => g.game === game.game)
        if (exists) {
          return
        }

        set((state) => ({
          wishlistGames: [...state.wishlistGames, game],
        }))
      },

      removeWishlist: (gameId) => {
        set((state) => ({
          wishlistGames: state.wishlistGames.filter((g) => g.game !== gameId),
        }))
      },

      isWishlisted: (gameId: GameId) => {
        return get().wishlistGames.some((g) => g.game === gameId)
      },

      clearWishlist: () => {
        set({ wishlistGames: [] })
      },
    }),
    {
      name: 'wishlist-storage',
    }
  )
)
