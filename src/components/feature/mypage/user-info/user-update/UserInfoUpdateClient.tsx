'use client'

import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'

import {
  checkNickNameApi,
  sendCodeApi,
  verifyCodeApi,
} from '@/api/fetchers/authFetchers'
import { UserInfo } from '@/api/fetchers/userInfoFetchers'
import { useGetUserMe } from '@/api/queries/useGetUserMe'
import {
  BaseInput,
  Button,
  DuplicateCheckField,
  FormField,
  INPUT_CLASS,
  phoneOnlySchema,
  PhoneVerificationField,
  UserInfoUpdateSchemaValues,
} from '@/components'
import {
  PASSWORD_CONFIRM_FIELDS,
  ROUTES_PATHS,
  SIGNUP_FIELDS,
} from '@/constants'
import {
  usePhoneVerificationTimer,
  useToast,
  useUserInfoUpdateSubmit,
} from '@/hooks'
import { useAuthStore } from '@/store/useAuthStore'
import { cn } from '@/utils'

const EMPTY_FORM: UserInfoUpdateSchemaValues = {
  nickName: '',
  name: '',
  phone: '',
  gender: '남성',
  password: '',
  passwordConfirm: '',
  phoneCode: '',
}

/**
 * 내 정보 수정 폼
 */
export default function UserInfoUpdateClient() {
  const router = useRouter()
  const { triggerToast } = useToast()
  const { submit, isPending } = useUserInfoUpdateSubmit()
  const { isInitialized } = useAuthStore()
  const [isNickNameChecked, setIsNickNameChecked] = useState(false)
  const [form, setForm] = useState<UserInfoUpdateSchemaValues>(EMPTY_FORM)

  /**
   * 백엔드팀에서 생년월일은 생성하지 않았다고 함
   * const USER_INFO_FIELD_KEYS = ['name', 'birthday'] as const
   */
  const USER_INFO_FIELD_KEYS = ['name'] as const

  const USER_INFO_FIELDS = SIGNUP_FIELDS.filter((field) =>
    USER_INFO_FIELD_KEYS.includes(
      field.key as (typeof USER_INFO_FIELD_KEYS)[number]
    )
  )

  const handleGetSuccess = useCallback((data: UserInfo) => {
    setForm({
      ...EMPTY_FORM,
      nickName: data.nickname,
      name: data.name,
      phone: data.phoneNumber,
      // birthday: data.birthday ?? '',
      gender: data.gender === 'F' ? '여성' : '남성',
    })
  }, [])

  const { data: userMe, isLoading } = useGetUserMe({
    onSuccess: handleGetSuccess,
  })
  const baseUserInfo = userMe

  const phoneTimer = usePhoneVerificationTimer({
    duration: 180,
    onExpire: () => triggerToast('error', '인증 시간이 만료되었습니다.'),
  })

  const handleChange = (
    field: keyof UserInfoUpdateSchemaValues,
    value: string
  ) => {
    setForm((prev) => {
      if (!prev) {
        return prev
      }

      return { ...prev, [field]: value }
    })

    if (field === 'nickName') {
      setIsNickNameChecked(false)
    }
  }

  const handleSubmit = async () => {
    if (!baseUserInfo) {
      triggerToast('error', '유저 정보를 불러오지 못했습니다.')
      return
    }

    const mappedBaseUserInfo: UserInfoUpdateSchemaValues = {
      nickName: baseUserInfo.nickname,
      name: baseUserInfo.name,
      // birthday: baseUserInfo.birthday ?? '',
      phone: baseUserInfo.phoneNumber,
      gender: baseUserInfo.gender === 'M' ? '남성' : '여성',
    }

    await submit({
      form,
      baseUserInfo: mappedBaseUserInfo,
      isNickNameChecked,
      isPhoneVerified: phoneTimer.isCodeVerified,
    })
  }

  const handleNickNameCheckClick = async () => {
    if (!form.nickName) {
      triggerToast('error', '닉네임을 입력해 주세요.')
    }

    try {
      const res = await checkNickNameApi({
        nickname: form.nickName,
      })

      if (res.available) {
        triggerToast('success', res.message)
        setIsNickNameChecked(true)
      } else {
        triggerToast('error', res.message)
        setIsNickNameChecked(false)
      }
    } catch {
      triggerToast('error', '닉네임 중복 확인에 실패했습니다.')
      setIsNickNameChecked(false)
    }
  }

  const handleSendCodeWithValidation = async () => {
    const result = phoneOnlySchema.safeParse({
      phone: form.phone,
    })

    if (!result.success) {
      triggerToast('error', result.error.issues[0].message)
      return
    }

    try {
      const res = await sendCodeApi({
        phone_number: form.phone,
        purpose: 'update_phone',
      })
      setForm((prev) => ({ ...prev, phoneCode: res.code }))

      phoneTimer.handleSendCode()

      triggerToast('success', '인증번호가 전송되었습니다.')
    } catch {
      phoneTimer.reset()

      triggerToast('error', '인증번호 전송이 실패하였습니다.')
    }
  }

  const handleVerifyCode = async () => {
    try {
      await verifyCodeApi({
        phone_number: form.phone,
        code: form.phoneCode ?? '',
        purpose: 'update_phone',
      })

      phoneTimer.handleVerifyCode()
    } catch {
      phoneTimer.reset()

      setForm((prev) => ({ ...prev, phoneCode: '' }))

      triggerToast('error', '인증번호가 올바르지 않습니다.')
    }
  }

  if (!isInitialized) {
    return <div>인증 확인중...</div>
  }

  if (isLoading) {
    return <div>로딩중...</div>
  }

  if (!baseUserInfo) {
    return <div>유저 정보를 불러올 수 없습니다.</div>
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
          value={baseUserInfo.email}
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
          required={false}
        />
        {PASSWORD_CONFIRM_FIELDS.map((field) => (
          <FormField
            key={field.key}
            label={`NEW ` + field.label}
            required={false}
            password={field.password}
          >
            <BaseInput
              id={`userInfoUpdate-${field.key}`}
              type="password"
              name={`new-${field.key}`}
              placeholder={field.placeholder}
              value={form[field.key] ?? ''}
              className={cn(INPUT_CLASS, 'w-full')}
              onChange={(e) => handleChange(field.key, e.target.value)}
            />
          </FormField>
        ))}
        <FormField label="성별" required={false}>
          <div className="flex gap-5">
            {['남성', '여성'].map((gender) => (
              <button
                key={gender}
                type="button"
                onClick={() =>
                  handleChange('gender', gender as '남성' | '여성')
                }
                className={cn(
                  `font-semibold, w-full cursor-pointer rounded-default px-6 py-2 text-xs shadow-tag-inactive md:px-8 md:py-2 md:text-sm`,
                  `${
                    form.gender === gender
                      ? 'bg-main-purple text-text-light shadow-tag-inactive'
                      : 'bg-neutral-100/10 text-text-light shadow-tag-inactive'
                  }`
                )}
              >
                {gender}
              </button>
            ))}
          </div>
        </FormField>
        {USER_INFO_FIELDS.map((field) => (
          <FormField
            key={field.key}
            label={field.label}
            required={false}
            password={field.password}
          >
            <BaseInput
              id={`userInfoUpdate-${field.key}`}
              type={field.type}
              placeholder={field.placeholder}
              // value={form[field.key as 'name' | 'birthday']}
              value={form[field.key as 'name']}
              className={cn(INPUT_CLASS, 'w-full')}
              onChange={(e) =>
                // handleChange(field.key as 'name' | 'birthday', e.target.value)
                handleChange(field.key as 'name', e.target.value)
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
          handleSendCode={handleSendCodeWithValidation}
          handleVerifyCode={handleVerifyCode}
          idValue="userInfoUpdate"
          required={false}
        />
        <div className="mt-5 flex w-full gap-4">
          <Button
            type="submit"
            variant="purple"
            className="w-full cursor-pointer text-sm shadow-tag-inactive md:text-lg"
          >
            {isPending ? '저장 중' : '변경 완료'}
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
      <Button
        type="button"
        onClick={() => router.push(ROUTES_PATHS.RECOMMEND.TAG)}
        variant="purple"
        className="mt-5 w-full cursor-pointer bg-gradient-main text-sm shadow-tag-inactive hover:bg-main-purple/70 md:text-lg"
      >
        취향 선택하기
      </Button>
    </div>
  )
}
