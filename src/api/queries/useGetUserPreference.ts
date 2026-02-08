import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/constants/queryKey'
import { useAuthStore } from '@/store/useAuthStore'
import {
  GenreItem,
  TagItem,
  UserPreferenceResponse,
} from '@/types/api-response/user-preference-response'

import { getPrefernece } from '../fetchers/preferenceFetchers'

export const useGetPrefernece = () => {
  const { accessToken, isInitialized } = useAuthStore()
  const isLoggedIn = isInitialized && !!accessToken

  return useQuery<
    UserPreferenceResponse,
    Error,
    {
      genres: GenreItem[]
      tags: TagItem[]
    }
  >({
    queryKey: QUERY_KEYS.USER_PREFERENCE,
    queryFn: getPrefernece,
    enabled: isLoggedIn,
    staleTime: 1000 * 60 * 5,
    select: (data) => ({
      genres: data?.Genres ?? [],
      tags: data?.Tags ?? [],
    }),
  })
}
