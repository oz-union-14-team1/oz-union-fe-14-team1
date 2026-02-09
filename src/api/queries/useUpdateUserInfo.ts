import { useMutation, useQueryClient } from '@tanstack/react-query'

import { useToast } from '@/hooks'

import {
  updateUserInfoApi,
  UpdateUserRequest,
} from '../fetchers/userInfoFetchers'

export const useUpdateUserInfo = () => {
  const queryClient = useQueryClient()
  const { triggerToast } = useToast()

  return useMutation({
    mutationFn: (body: UpdateUserRequest) => updateUserInfoApi(body),

    onSuccess: () => {
      triggerToast('success', '회원정보가 수정되었습니다.')

      queryClient.invalidateQueries({
        queryKey: ['user', 'me'],
      })
    },

    onError: () => {
      triggerToast('error', '회원정보 수정에 실패했습니다. 다시 시도해주세요.')
    },
  })
}
