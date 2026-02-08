'use client'

import { isAxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import {
  checkEmailApi,
  checkNickNameApi,
  sendCodeApi,
  signupApi,
  type SignupRequest,
  verifyCodeApi,
} from '@/api/fetchers/authFetchers'
import {
  BaseInput,
  Button,
  DuplicateCheckField,
  FormField,
  phoneOnlySchema,
  PhoneVerificationField,
  type SignupFormValues,
  signupSchema,
} from '@/components'
import { ROUTES_PATHS, SIGNUP_FIELDS } from '@/constants'
import { usePhoneVerificationTimer, useToast } from '@/hooks'
import { cn } from '@/utils'

export const INPUT_CLASS =
  'h-9 text-xs placeholder:text-xs md:h-10 md:text-sm md:placeholder:text-sm'

/**
 * 회원가입 폼
 */
export default function SignupForm() {
  const router = useRouter()
  const [isIdChecked, setIsIdChecked] = useState(false)
  const [isNickNameChecked, setIsNickNameChecked] = useState(false)
  const [form, setForm] = useState<SignupFormValues>({
    name: '',
    id: '',
    nickName: '',
    birthday: '',
    gender: '남성',
    phone: '',
    phoneCode: '',
    password: '',
    passwordConfirm: '',
  })
  const { triggerToast } = useToast()

  const genderMap = {
    남성: 'M',
    여성: 'F',
  } as const

  const phoneTimer = usePhoneVerificationTimer({
    duration: 180,
    onExpire: () => {
      setForm((prev) => ({ ...prev, phoneCode: '' }))
      triggerToast('error', '인증 시간이 만료되었습니다.')
    },
    onVerified: () => {
      triggerToast('success', '인증이 완료 되었습니다.')
    },
  })

  const handleChange = <T extends keyof SignupFormValues>(
    field: T,
    value: SignupFormValues[T]
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }))

    if (field === 'id') {
      setIsIdChecked(false)
    }

    if (field === 'nickName') {
      setIsNickNameChecked(false)
    }
  }

  const handleSubmit = async () => {
    const result = signupSchema.safeParse(form)
    if (!result.success) {
      triggerToast('error', result.error.issues[0].message)
      return
    }

    if (!result.success) {
      if (!isIdChecked) {
        triggerToast('error', '아이디 중복 확인을 해주세요.')
        return
      }

      if (!isNickNameChecked) {
        triggerToast('error', '닉네임 중복 확인을 해주세요.')
        return
      }

      if (!phoneTimer.isCodeVerified) {
        triggerToast('error', '휴대폰 인증을 완료해 주세요.')

        return
      }

      return
    }

    const payload: SignupRequest = {
      email: form.id,
      password: form.password,
      nickname: form.nickName,
      name: form.name,
      gender: genderMap[form.gender],
      phone_number: form.phone,
    }

    try {
      await signupApi(payload)

      triggerToast('success', '회원가입 성공!')
      router.push(ROUTES_PATHS.LOGIN_PAGE)
    } catch (error) {
      let message = '회원가입에 실패했습니다.'

      if (isAxiosError(error)) {
        const data = error.response?.data
        const phoneError = data?.error_detail?.phone_number?.[0]

        message =
          data?.error_detail?.phone_number?.[0] ||
          data?.errors?.email?.[0] ||
          data?.errors?.nickname?.[0] ||
          data?.error_detail ||
          message

        if (phoneError) {
          phoneTimer.reset()

          setForm((prev) => ({
            ...prev,
            phoneCode: '',
          }))
        }
      }

      triggerToast('error', message)
    }
  }

  const handleIdCheckClick = async () => {
    if (!form.id) {
      triggerToast('error', '이메일를 입력해 주세요.')
      return
    }

    try {
      const res = await checkEmailApi({
        email: form.id,
      })

      triggerToast('success', res.message)
      setIsIdChecked(true)
    } catch (error) {
      setIsIdChecked(false)

      if (isAxiosError(error)) {
        const message =
          error.response?.data?.errors?.email?.[0] ||
          error.response?.data?.error_detail ||
          '아이디 중복 확인에 실패했습니다.'

        triggerToast('error', message)
        return
      }

      triggerToast('error', '아이디 중복 확인에 실패했습니다.')
    }
  }

  const handleNickNameCheckClick = async () => {
    if (!form.nickName) {
      triggerToast('error', '닉네임을 입력해 주세요.')
      return
    }

    try {
      await checkNickNameApi({
        nickname: form.nickName,
      })

      triggerToast('success', '사용 가능한 닉네임입니다.')
      setIsNickNameChecked(true)
    } catch (error) {
      setIsNickNameChecked(false)

      if (isAxiosError(error)) {
        const message =
          error.response?.data?.errors?.nickname?.[0] ||
          error.response?.data?.error_detail ||
          '닉네임 중복 확인에 실패했습니다.'

        triggerToast('error', message)
        return
      }

      triggerToast('error', '닉네임 중복 확인에 실패했습니다.')
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
        purpose: 'find_account',
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
        code: form.phoneCode,
        purpose: 'find_account',
      })

      phoneTimer.handleVerifyCode()
    } catch {
      phoneTimer.reset()

      setForm((prev) => ({ ...prev, phoneCode: '' }))

      triggerToast('error', '인증번호가 올바르지 않습니다.')
    }
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
          id="signup-id"
          label="아이디"
          value={form.id}
          placeholder="아이디를 입력해 주세요."
          onChange={(value) => handleChange('id', value)}
          onCheck={handleIdCheckClick}
          isChecked={isIdChecked}
        />
        <DuplicateCheckField
          id="signup-nickName"
          label="닉네임"
          value={form.nickName}
          placeholder="닉네임을 입력헤 주세요."
          onChange={(value) => handleChange('nickName', value)}
          onCheck={handleNickNameCheckClick}
          isChecked={isNickNameChecked}
        />
        {SIGNUP_FIELDS.map((field) => (
          <FormField
            key={field.key}
            label={field.label}
            required={field.required}
            password={field.password}
          >
            <BaseInput
              id={`signup-${field.key}`}
              type={field.type}
              placeholder={field.placeholder}
              value={form[field.key]}
              className={cn(INPUT_CLASS, 'w-full')}
              onChange={(e) => handleChange(field.key, e.target.value)}
            />
          </FormField>
        ))}
        <FormField label="성별" required>
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
        <PhoneVerificationField
          phone={form.phone}
          code={form.phoneCode}
          onPhoneChange={(value) => handleChange('phone', value)}
          onCodeChange={(value) => handleChange('phoneCode', value)}
          isCodeSent={phoneTimer.isCodeSent}
          isCodeVerified={phoneTimer.isCodeVerified}
          remainingTime={phoneTimer.remainingTime}
          formatTime={phoneTimer.formatTime}
          handleSendCode={handleSendCodeWithValidation}
          handleVerifyCode={handleVerifyCode}
          idValue="signup"
        />
        <div className="mt-10 flex flex-col">
          <Button
            type="submit"
            className="cursor-pointer bg-gradient-main text-sm shadow-tag-inactive hover:opacity-70 md:text-base"
          >
            회원 가입
          </Button>
        </div>
      </form>
    </div>
  )
}
