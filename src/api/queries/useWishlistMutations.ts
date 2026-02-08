import { useMutation, useQueryClient } from '@tanstack/react-query'

import {
  deleteWishlistApi,
  postWishlistApi,
} from '@/api/fetchers/wishlistFetchers'

/**
 * 위시리스트 추가 훅 (낙관적 업데이트)
 * POST /api/v1/game/wishlist
 */
export const usePostWishlist = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: postWishlistApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wishlist'] })
    },
  })
}

/**
 * 위시리스트 삭제 훅 (낙관적 업데이트)
 * DELETE /api/v1/game/wishlist/{id}
 */
export const useDeleteWishlist = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteWishlistApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wishlist'] })
    },
  })
}
