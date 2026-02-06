'use client'

import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

import { getUserInfoApi, UserInfo } from '../fetchers/userInfoFetchers'

type UseGetUserMeOptions = {
  onSuccess?: (data: UserInfo) => void
}

export const useGetUserMe = (options?: UseGetUserMeOptions) => {
  const query = useQuery<UserInfo>({
    queryKey: ['user', 'me'],
    queryFn: getUserInfoApi,
    retry: false, // 401 에러 시 재시도 방지
    staleTime: 1000 * 60 * 5, // 5분
    enabled: typeof window !== 'undefined', // 클라이언트에서만 호출
  })

  const { onSuccess } = options ?? {}

  useEffect(() => {
    if (query.data && onSuccess) {
      onSuccess(query.data)
    }
  }, [query.data, onSuccess])

  return query
}
