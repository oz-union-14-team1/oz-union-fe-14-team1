'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import {
  BaseInput,
  Button,
  DuplicateCheckField,
  FormField,
  PhoneVerificationField,
  userInfoUpdateSchema,
  UserInfoUpdateSchemaValues,
} from '@/components'
import {
  PASSWORD_CONFIRM_FIELDS,
  ROUTES_PATHS,
  SIGNUP_FIELDS,
} from '@/constants'
import { usePhoneVerificationTimer, useToast } from '@/hooks'
import { MOCK_USERINFO } from '@/mocks/data/mockUserInfo'
import { cn } from '@/utils'

export const INPUT_CLASS =
  'h-9 text-xs placeholder:text-xs md:h-10 md:text-sm md:placeholder:text-sm placeholder:text-btn-main-disabled/40'

/**
 * 회원가입 폼
 */
export default function UserInfoUpdateClient() {
  const router = useRouter()
  const { triggerToast } = useToast()
  const baseUserInfo = MOCK_USERINFO
  /**
   * TODO: MOCK_USERINFO -> 나중에 서버에서 내려줄 값
   * */
  const [isNickNameChecked, setIsNickNameChecked] = useState(false)
  const [form, setForm] = useState<UserInfoUpdateSchemaValues>({
    nickName: baseUserInfo.nickName,
    name: baseUserInfo.name,
    birthday: baseUserInfo.birthday,
    phone: baseUserInfo.phone,
    password: '',
    passwordConfirm: '',
    phoneCode: '',
  })
  const USER_INFO_FIELD_KEYS = ['name', 'birthday'] as const
  const USER_INFO_FIELDS = SIGNUP_FIELDS.filter((field) =>
    USER_INFO_FIELD_KEYS.includes(
      field.key as (typeof USER_INFO_FIELD_KEYS)[number]
    )
  )

  const phoneTimer = usePhoneVerificationTimer({
    duration: 10 /** TODO: 180초 */,
    onExpire: () => triggerToast('error', '인증 시간이 만료되었습니다.'),
  })

  const handleChange = (
    field: keyof UserInfoUpdateSchemaValues,
    value: string
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }))

    if (field === 'nickName') {
      setIsNickNameChecked(false)
    }
  }

  const normalize = (value?: string) => (value === '' ? undefined : value)

  const handleSubmit = async () => {
    /**
     * TODO : 회원가입 API 연동
     */
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

    const isPhoneChanged =
      normalize(form.phone) !== normalize(baseUserInfo.phone)

    if (isNickNameChanged && !isNickNameChecked) {
      triggerToast('error', '닉네임 중복 확인을 해주세요.')
      return
    }

    if (isPhoneChanged && !phoneTimer.isCodeVerified) {
      triggerToast('error', '휴대폰 인증을 완료해 주세요.')
      return
    }

    try {
      /**
       * TODO:
       * - 회원정보 수정 API 호출
       */

      triggerToast('success', '회원정보가 수정되었습니다.')
      router.push(ROUTES_PATHS.MY_PAGE)
    } catch {
      triggerToast('error', '회원정보 수정에 실패했습니다.')
    }
  }

  const handleNickNameCheckClick = () => {
    /**
     * TODO: 닉네임 중복체크 이벤트 API 연동
     * toast 진행 예정
     */
    setIsNickNameChecked(true)

    alert('닉네임 중복체크')
  }

  return (
    <div className="flex w-full flex-col gap-5">
      <form
        className="flex flex-col gap-2.5 md:gap-5"
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        <DuplicateCheckField
          id="userInfoUpdate-id"
          label="아이디"
          value={baseUserInfo.id}
          placeholder="아이디를 입력해 주세요."
          onChange={() => {}}
          onCheck={() => {}}
          isUserUpdateMode={true}
        />
        <DuplicateCheckField
          id="userInfoUpdate-nickName"
          label="닉네임"
          value={form.nickName}
          placeholder="닉네임을 입력헤 주세요."
          onChange={(value) => handleChange('nickName', value)}
          onCheck={handleNickNameCheckClick}
          isChecked={isNickNameChecked}
        />
        {PASSWORD_CONFIRM_FIELDS.map((field) => (
          <FormField
            key={field.key}
            label={`NEW ` + field.label}
            required={field.required}
            password={field.password}
          >
            <BaseInput
              id={`userInfoUpdate-${field.key}`}
              type={field.type}
              placeholder={field.placeholder}
              value={form[field.key]}
              className={cn(INPUT_CLASS, 'w-full')}
              onChange={(e) => handleChange(field.key, e.target.value)}
            />
          </FormField>
        ))}
        {USER_INFO_FIELDS.map((field) => (
          <FormField
            key={field.key}
            label={field.label}
            required={field.required}
            password={field.password}
          >
            <BaseInput
              id={`userInfoUpdate-${field.key}`}
              type={field.type}
              placeholder={field.placeholder}
              value={form[field.key as 'name' | 'birthday']}
              className={cn(INPUT_CLASS, 'w-full')}
              onChange={(e) =>
                handleChange(field.key as 'name' | 'birthday', e.target.value)
              }
            />
          </FormField>
        ))}
        <PhoneVerificationField
          phone={form.phone}
          code={form.phoneCode ?? ''}
          onPhoneChange={(value) => handleChange('phone', value)}
          onCodeChange={(value) => handleChange('phoneCode', value)}
          isCodeSent={phoneTimer.isCodeSent}
          isCodeVerified={phoneTimer.isCodeVerified}
          remainingTime={phoneTimer.remainingTime}
          formatTime={phoneTimer.formatTime}
          handleSendCode={phoneTimer.handleSendCode}
          handleVerifyCode={phoneTimer.handleVerifyCode}
          idValue="userInfoUpdate"
        />
        <div className="mt-10 flex w-full gap-4">
          <Button
            type="submit"
            variant="purple"
            className="w-full cursor-pointer text-sm shadow-tag-inactive md:text-lg"
          >
            변경 완료
          </Button>
          <Button
            type="button"
            variant="purple"
            onClick={() => router.push(ROUTES_PATHS.MY_PAGE)}
            className="w-full cursor-pointer text-sm shadow-tag-inactive md:text-lg"
          >
            취소
          </Button>
        </div>
      </form>
    </div>
  )
}
