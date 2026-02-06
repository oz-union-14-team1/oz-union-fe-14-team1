import { useQuery } from '@tanstack/react-query'

import { getWishlistApi } from '@/api/fetchers/wishlistFetchers'

/**
 * 위시리스트 조회 훅
 * GET /api/v1/game/wishlist
 */
export const useGetWishlist = () => {
  return useQuery({
    queryKey: ['wishlist'],
    queryFn: async () => {
      try {
        return await getWishlistApi()
      } catch (error) {
        // 에러 발생 시 빈 배열 반환 (로그인하지 않은 경우 등)
        console.warn('Failed to fetch wishlist:', error)
        return []
      }
    },
    staleTime: 1000 * 60 * 5, // 5분
    retry: false, // 401/400 에러 시 재시도 방지
    enabled: typeof window !== 'undefined', // 클라이언트에서만 호출
  })
}
