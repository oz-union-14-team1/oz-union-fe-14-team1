import { useQuery } from '@tanstack/react-query'

import { getWishlistApi } from '@/api/fetchers/wishlistFetchers'
import { useAuthStore } from '@/store/useAuthStore'

/**
 * 위시리스트 조회 훅
 * GET /api/v1/game/wishlist
 */
export const useGetWishlist = () => {
  const { accessToken, isInitialized } = useAuthStore()
  const isLoggedIn = isInitialized && !!accessToken

  return useQuery({
    queryKey: ['wishlist'],
    queryFn: getWishlistApi,
    enabled: isLoggedIn,
    staleTime: 1000 * 60 * 5,
    retry: false,
  })
}
