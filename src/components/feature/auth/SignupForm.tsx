'use client'

import { Check } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { compoundLogoRow } from '@/assets'
import {
  BaseInput,
  Button,
  SignupFormValues,
  signupSchema,
  Toast,
  ToastProps,
} from '@/components'
import { SIGNUP_FIELDS } from '@/constants'
import { cn } from '@/utils'

import { FormField } from './FormField'

/**
 * 회원가입 폼
 */
export default function SignupForm() {
  const router = useRouter()
  const [isIdChecked, setIsIdChecked] = useState(false)
  const [isNickNameChecked, setIsNickNameChecked] = useState(false)
  const [toast, setToast] = useState<ToastProps | null>(null)
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
  /**
   * TODO: 이메일/비밀번호 상태 관리 (useState)
   * TODO: 입력값 유효성 검사
   * TODO: 로그인 API 연결
   * TODO: 에러 메시지 처리
   * TODO: 로그인 성공 시 토큰 저장
   * TODO: 로그인 후 페이지 이동 처리
   */

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
      if (!isNickNameChecked) {
        setToast({ type: 'error', message: '닉네임 중복 확인을 해주세요.' })
        return
      }

      if (!isIdChecked) {
        setToast({ type: 'error', message: '아이디 중복 확인을 해주세요.' })
        return
      }

      setToast({
        type: 'error',
        message: result.error.issues[0].message,
      })

      setTimeout(() => setToast(null), 1500)

      return
    }

    setToast({
      type: 'success',
      message: '회원가입 성공!',
    })

    setTimeout(() => setToast(null), 2000)

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

  const handlePhoneCertificationSendClick = () => {
    /**
     * TODO: 휴대폰 번호 인증번호 전송 API 연동
     */
    alert('휴대폰 번호 인증번호 전송')
  }

  const handlePhoneCertificationCheckClick = () => {
    /**
     * TODO: 휴대폰 번호 인증번호 확인 API 연동
     */
    alert('휴대폰 번호 인증번호 확인')
  }

  return (
    <div className="w-full px-15 py-15">
      {toast && (
        <div className="absolute top-1 right-1">
          <Toast type={toast.type} message={toast.message} />
        </div>
      )}
      <div className="mb-9 flex justify-center">
        <Image src={compoundLogoRow} alt="PlayTypeLogo" priority />
      </div>
      <form
        className="flex flex-col gap-5"
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        <FormField label="닉네임" required>
          <div className="flex items-end gap-2">
            <BaseInput
              id="signup-nickname"
              type="text"
              placeholder="닉네임을 입력해 주세요."
              value={form.nickName}
              onChange={(e) => handleChange('nickName', e.target.value)}
            />
            <Button
              type="button"
              variant="gray"
              size="sm"
              className="h-10 w-full bg-(--color-btn-gray-active)"
              onClick={handleNickNameCheckClick}
            >
              중복 확인
            </Button>
          </div>
          {isNickNameChecked && (
            <div className="flex text-sm font-bold text-sub-cyan">
              <Check />
              <span>사용 가능한 닉네임입니다</span>
            </div>
          )}
        </FormField>
        <FormField label="아이디" required>
          <div className="flex items-end gap-2">
            <BaseInput
              id="signup-id"
              type="text"
              placeholder="아이디를 입력해 주세요."
              value={form.id}
              onChange={(e) => handleChange('id', e.target.value)}
            />
            <Button
              type="button"
              variant="gray"
              size="sm"
              className="h-10 w-full bg-(--color-btn-gray-active)"
              onClick={handleIdCheckClick}
            >
              중복 확인
            </Button>
          </div>
          {isIdChecked && (
            <div className="flex text-sm font-bold text-sub-cyan">
              <Check />
              <span>사용 가능한 아이디입니다</span>
            </div>
          )}
        </FormField>
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
                  `font-semibold, rounded-full px-6 py-2 text-sm`,
                  `${
                    form.gender === gender
                      ? 'bg-cyan-300 text-black'
                      : 'bg-(--color-btn-gray-active) text-black'
                  }`
                )}
              >
                {gender}
              </button>
            ))}
          </div>
        </FormField>
        <FormField label="휴대폰 번호" required>
          <div className="flex gap-2">
            <BaseInput
              id="signup-phone"
              type="tel"
              placeholder="휴대폰 번호를 입력해 주세요."
              value={form.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
            />
            <Button
              type="button"
              variant="gray"
              size="sm"
              className="w-full bg-(--color-btn-gray-active)"
              onClick={handlePhoneCertificationSendClick}
            >
              인증번호 전송
            </Button>
          </div>
        </FormField>
        <FormField label="인증번호" required>
          <div className="flex gap-2">
            <BaseInput
              id="signup-phone-code"
              type="text"
              placeholder="인증번호를 입력해 주세요."
              value={form.phoneCode}
              onChange={(e) => handleChange('phoneCode', e.target.value)}
            />
            <Button
              type="button"
              variant="gray"
              size="sm"
              className="w-full bg-(--color-btn-gray-active)"
              onClick={handlePhoneCertificationCheckClick}
            >
              인증번호 확인
            </Button>
          </div>
        </FormField>
        <div className="mt-10 flex flex-col">
          <Button type="submit" variant="sub" className="cursor-pointer">
            회원 가입
          </Button>
        </div>
      </form>
    </div>
  )
}
