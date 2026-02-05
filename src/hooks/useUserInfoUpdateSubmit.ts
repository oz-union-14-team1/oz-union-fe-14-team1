import { useRouter } from 'next/navigation'

import { useUpdateUserInfo } from '@/api/queries/useUpdateUserInfo'
import { userInfoUpdateSchema, UserInfoUpdateSchemaValues } from '@/components'
import { ROUTES_PATHS } from '@/constants'
import { useToast } from '@/hooks'

type Params = {
  form: UserInfoUpdateSchemaValues
  baseUserInfo: UserInfoUpdateSchemaValues
  isNickNameChecked: boolean
  isPhoneVerified: boolean
}

/**
 * 회원정보 업데이트 submit 훅
 */
export default function useUserInfoUpdateSubmit() {
  const router = useRouter()
  const { triggerToast } = useToast()

  const { mutateAsync, isPending } = useUpdateUserInfo()

  const normalize = (value?: string) => (value === '' ? undefined : value)

  const submit = async ({
    form,
    baseUserInfo,
    isNickNameChecked,
    isPhoneVerified,
  }: Params) => {
    const cleanedForm = {
      ...form,
      password: form.password || undefined,
      passwordConfirm: form.passwordConfirm || undefined,
      phoneCode: form.phoneCode || undefined,
    }

    const result = userInfoUpdateSchema.safeParse(cleanedForm)

    if (!result.success) {
      triggerToast('error', result.error.issues[0].message)
      return
    }

    const hasChanged = (Object.keys(form) as Array<keyof typeof form>).some(
      (key) => normalize(form[key]) !== normalize(baseUserInfo[key])
    )

    if (!hasChanged) {
      triggerToast('success', '변경된 내용이 없습니다.')
      return
    }

    const isNickNameChanged =
      normalize(form.nickName) !== normalize(baseUserInfo.nickName)

    if (isNickNameChanged && !isNickNameChecked) {
      triggerToast('error', '닉네임 중복 확인을 해주세요.')
      return
    }

    const isPhoneChanged =
      normalize(form.phone) !== normalize(baseUserInfo.phone)

    if (isPhoneChanged && !isPhoneVerified) {
      triggerToast('error', '휴대폰 인증을 완료해 주세요.')
      return
    }

    const payload = {
      nickname: form.nickName,
      name: form.name,
      phoneNumber: form.phone,
      birthday: form.birthday,
      gender: form.gender === '여성' ? 'F' : 'M',
      password: form.password || undefined,
    }

    try {
      await mutateAsync(payload)

      router.push(ROUTES_PATHS.MY_PAGE)
    } catch {
      /**
       * mutation에서 처리
       * */
    }
  }

  return {
    submit,
    isPending,
  }
}
