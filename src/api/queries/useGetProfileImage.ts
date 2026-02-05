import { useQuery } from '@tanstack/react-query'

import { getProfileImageApi } from '@/api/fetchers/profileFetchers'

/**
 * 프로필 이미지 조회 Query Hook
 */
export const useGetProfileImage = () => {
  return useQuery({
    queryKey: ['profileImage'],
    queryFn: getProfileImageApi,
    staleTime: 1000 * 60 * 5, // 5분
    retry: 1,
  })
}

export default useGetProfileImage
