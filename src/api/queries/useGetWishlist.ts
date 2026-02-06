import { useQuery } from '@tanstack/react-query'

import { getWishlistApi } from '@/api/fetchers/wishlistFetchers'

/**
 * 위시리스트 조회 훅
 * GET /api/v1/game/wishlist
 */
export const useGetWishlist = () => {
  return useQuery({
    queryKey: ['wishlist'],
    queryFn: getWishlistApi,
    staleTime: 1000 * 60 * 5, // 5분
  })
}
