import { useRouter } from 'next/navigation'

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
export default function useUserInfoUpdate() {
  const router = useRouter()
  const { triggerToast } = useToast()

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

    try {
      /**
       * TODO: api 연결 예정
       * updateUserInfoAPI(cleanedForm)
       */

      triggerToast('success', '회원정보가 수정되었습니다.')
      router.push(ROUTES_PATHS.MY_PAGE)
    } catch {
      triggerToast('error', '회원정보 수정에 실패했습니다.')
    }
  }

  return {
    submit,
  }
}
