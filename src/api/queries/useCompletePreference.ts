import { useToast } from '@hooks'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { ROUTES_PATHS } from '@/constants'
import { useOnboardingStore } from '@/store/useOnboardingStore'

import { completeOnBoarding } from '../fetchers/onboardingFetchers'
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
