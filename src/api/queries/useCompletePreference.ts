import { useToast } from '@hooks'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { ROUTES_PATHS } from '@/constants'
import { useOnboardingStore } from '@/store/useOnboardingStore'

import {
  completeOnBoarding,
  savePreference,
} from '../fetchers/onboardingFetchers'
/**
 * 온보딩 완료
 * @param tendency: AI 분석결과
 */
export const useCompleteOnboarding = () => {
  const router = useRouter()
  const { triggerToast } = useToast()
  const { setAiTendency } = useOnboardingStore()

  return useMutation({
    mutationFn: completeOnBoarding,
    onSuccess: (tendency) => {
      setAiTendency(tendency)
      router.push(ROUTES_PATHS.RECOMMEND.RESULT)
    },
    onError: () => {
      triggerToast('error', '결과분석 중 오류가 발생했습니다.')
    },
  })
}

/**
 * 선호장르(태그/장르) 저장
 */
export const useSavePreference = () => {
  const queryClient = useQueryClient()

  useMutation({
    mutationFn: savePreference,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wishlist'] })
    },
  })
}
