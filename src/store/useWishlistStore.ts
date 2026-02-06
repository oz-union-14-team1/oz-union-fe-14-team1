'use client'

/**
 * ==========================================
 * ⚠️ DEPRECATED: 이 파일은 더 이상 사용되지 않습니다
 * ==========================================
 *
 * [마이그레이션 안내]
 * Zustand 기반 위시리스트 관리에서 백엔드 API 기반으로 전환되었습니다.
 *
 * [새로운 사용법]
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

/**
 * @deprecated 백엔드 API 기반 훅으로 전환되었습니다.
 * useGetWishlist, usePostWishlist, useDeleteWishlist 사용을 권장합니다.
 */
type WishlistState = {
  wishlistedGameIds: GameId[]
  toggleWishlist: (gameId: GameId) => void
  isWishlisted: (gameId: GameId) => boolean
  clearWishlist: () => void
}

/**
 * @deprecated 백엔드 API 기반 훅으로 전환되었습니다.
 * useGetWishlist, usePostWishlist, useDeleteWishlist 사용을 권장합니다.
 */
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
