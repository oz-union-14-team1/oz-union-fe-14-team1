'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import {
  BaseInput,
  Button,
  PhoneVerificationField,
  SignupFormValues,
  signupSchema,
} from '@/components'
import { SIGNUP_FIELDS } from '@/constants'
import { usePhoneVerificationTimer, useToast } from '@/hooks'
import { cn } from '@/utils'

import { DuplicateCheckField } from './DuplicateCheckField'
import { FormField } from './FormField'

const INPUT_CLASS =
  'h-9 w-85 text-xs placeholder:text-xs md:h-10 md:w-90 md:text-sm md:placeholder:text-sm'

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

  const phoneTimer = usePhoneVerificationTimer({
    duration: 10 /** TODO: 180초 */,
    onExpire: () => triggerToast('error', '인증 시간이 만료되었습니다.'),
  })

  const handleChange = (field: keyof SignupFormValues, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))

    if (field === 'id') {
      setIsIdChecked(false)
    }

    if (field === 'nickName') {
      setIsNickNameChecked(false)
    }
  }

  const handleSubmit = () => {
    /**
     * TODO : 회원가입 API 연동
     */
    const result = signupSchema.safeParse(form)

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

      triggerToast('error', result.error.issues[0].message)

      return
    }

    triggerToast('success', '회원가입 성공!')

    router.push('/login')
  }

  const handleIdCheckClick = () => {
    /**
     * TODO: 아이디 중복체크 이벤트 API 연동
     * toast 진행 예정
     */
    setIsIdChecked(true)

    alert('아이디 중복체크')
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
              className={INPUT_CLASS}
              onChange={(e) => handleChange(field.key, e.target.value)}
            />
          </FormField>
        ))}
        <FormField label="성별" required>
          <div className="flex gap-3">
            {['남성', '여성'].map((gender) => (
              <button
                key={gender}
                type="button"
                onClick={() =>
                  handleChange('gender', gender as '남성' | '여성')
                }
                className={cn(
                  `font-semibold, rounded-full px-6 py-2 text-xs shadow-tag-inactive md:px-8 md:py-2 md:text-sm`,
                  `${
                    form.gender === gender
                      ? 'bg-gradient-sub text-text-dark'
                      : 'bg-btn-gray-active text-text-dark'
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
          handleSendCode={phoneTimer.handleSendCode}
          handleVerifyCode={phoneTimer.handleVerifyCode}
        />
        <div className="mt-10 flex flex-col">
          <Button
            type="submit"
            variant="sub"
            className="cursor-pointer bg-sub-cyan text-xs md:text-[16px]"
          >
            회원 가입
          </Button>
        </div>
      </form>
    </div>
  )
}
