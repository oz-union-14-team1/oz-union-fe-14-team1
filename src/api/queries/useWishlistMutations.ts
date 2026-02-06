import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import {
  deleteWishlistApi,
  postWishlistApi,
} from '@/api/fetchers/wishlistFetchers'
import {
  DeleteWishlistResponse,
  GetWishlist,
  PostWishlistRequest,
  PostWishlistResponse,
  WishlistGame,
} from '@/types/api-response/wishlist-response'

/**
 * 위시리스트 추가 훅 (낙관적 업데이트)
 * POST /api/v1/game/wishlist
 */
export const usePostWishlist = () => {
  const queryClient = useQueryClient()

  return useMutation<
    PostWishlistResponse,
    AxiosError,
    PostWishlistRequest,
    { previousWishlist: GetWishlist | undefined }
  >({
    mutationFn: postWishlistApi,
    onMutate: async (newItem) => {
      // 진행 중인 refetch 취소
      await queryClient.cancelQueries({ queryKey: ['wishlist'] })

      // 이전 데이터 백업
      const previousWishlist = queryClient.getQueryData<GetWishlist>([
        'wishlist',
      ])

      // 낙관적 업데이트: 즉시 UI 반영
      queryClient.setQueryData<GetWishlist>(['wishlist'], (old = []) => {
        // 임시 위시리스트 항목 추가 (실제 응답으로 교체될 예정)
        const tempItem: WishlistGame = {
          id: Date.now(), // 임시 ID
          game: newItem.game,
          game_name: '',
          game_image: '',
          created_at: new Date().toISOString(),
        }
        return [...old, tempItem]
      })

      return { previousWishlist }
    },
    onSuccess: () => {
      // 실제 데이터로 refetch
      queryClient.invalidateQueries({ queryKey: ['wishlist'] })
    },
    onError: (_err, _newItem, context) => {
      // 에러 시 이전 데이터로 롤백
      if (context?.previousWishlist) {
        queryClient.setQueryData(['wishlist'], context.previousWishlist)
      }
    },
  })
}

/**
 * 위시리스트 삭제 훅 (낙관적 업데이트)
 * DELETE /api/v1/game/wishlist/{id}
 */
export const useDeleteWishlist = () => {
  const queryClient = useQueryClient()

  return useMutation<
    DeleteWishlistResponse,
    AxiosError,
    number,
    { previousWishlist: GetWishlist | undefined }
  >({
    mutationFn: deleteWishlistApi,
    onMutate: async (wishlistId) => {
      // 진행 중인 refetch 취소
      await queryClient.cancelQueries({ queryKey: ['wishlist'] })

      // 이전 데이터 백업
      const previousWishlist = queryClient.getQueryData<GetWishlist>([
        'wishlist',
      ])

      // 낙관적 업데이트: 즉시 UI에서 제거
      queryClient.setQueryData<GetWishlist>(['wishlist'], (old = []) => {
        return old.filter((item) => item.id !== wishlistId)
      })

      return { previousWishlist }
    },
    onSuccess: () => {
      // 실제 데이터로 refetch
      queryClient.invalidateQueries({ queryKey: ['wishlist'] })
    },
    onError: (_err, _wishlistId, context) => {
      // 에러 시 이전 데이터로 롤백
      if (context?.previousWishlist) {
        queryClient.setQueryData(['wishlist'], context.previousWishlist)
      }
    },
  })
}
