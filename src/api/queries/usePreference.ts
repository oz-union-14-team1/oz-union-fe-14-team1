import { useQuery } from '@tanstack/react-query'

import { Genre, Tag } from '@/types/api-response/onboarding-response'

import {
  getAiTendency,
  getGenres,
  getTags,
} from '../fetchers/onboardingFetchers'

export const useAllTags = () => {
  console.log('Tag api 호출@!')
  return useQuery<Tag[]>({
    queryKey: ['preference', 'tags'],
    queryFn: getTags,
  })
}

export const useAllGenres = () => {
  return useQuery<Genre[]>({
    queryKey: ['preference', 'genres'],
    queryFn: getGenres,
  })
}

export const useUserTendency = () => {
  return useQuery<string | null>({
    queryKey: ['user', 'tendency'],
    queryFn: getAiTendency,
    staleTime: 1000 * 60 * 5,
    retry: false,
  })
}
