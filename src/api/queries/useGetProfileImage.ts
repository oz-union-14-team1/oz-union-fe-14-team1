'use client'

import { useQuery } from '@tanstack/react-query'

import { getProfileImageApi } from '@/api/fetchers/profileFetchers'
import { useAuthStore } from '@/store/useAuthStore'

/**
 * 프로필 이미지 조회 Query Hook
 */
export const useGetProfileImage = () => {
  const { accessToken } = useAuthStore()

  return useQuery({
    queryKey: ['profileImage'],
    queryFn: getProfileImageApi,
    enabled: !!accessToken,
    staleTime: 1000 * 60 * 5, // 5분
    retry: 1,
  })
}

export default useGetProfileImage
