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
  })

  const { onSuccess } = options ?? {}

  useEffect(() => {
    if (query.data && onSuccess) {
      onSuccess(query.data)
    }
  }, [query.data, onSuccess])

  return query
}
