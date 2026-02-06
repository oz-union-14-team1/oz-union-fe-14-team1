'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { deleteProfileImageApi } from '@/api/fetchers/profileFetchers'
import { IMAGE_ERROR_MESSAGES } from '@/constants'
import useToast from '@/hooks/useToast'

/**
 * 프로필 이미지 삭제 Mutation Hook
 */
export const useDeleteProfileImage = () => {
  const queryClient = useQueryClient()
  const { triggerToast } = useToast()

  return useMutation({
    mutationFn: deleteProfileImageApi,
    onSuccess: () => {
      triggerToast('success', IMAGE_ERROR_MESSAGES.DELETE_SUCCESS)
      // 프로필 이미지 캐시 무효화하여 빈 이미지 상태로 업데이트
      queryClient.invalidateQueries({ queryKey: ['profileImage'] })
    },
    onError: (error) => {
      console.error('이미지 삭제 실패:', error)
      triggerToast('error', IMAGE_ERROR_MESSAGES.DELETE_FAILED)
    },
  })
}

export default useDeleteProfileImage
