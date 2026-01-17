'use client'

import { Check } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

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
  const [isCodeSent, setIsCodeSent] = useState(false)
  const [isCodeVerified, setIsCodeVerified] = useState(false)
  const [remainingTime, setRemainingTime] = useState(0)
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
     * TODO: 유효시간 시간 변경 10초 -> 180초
     */
    alert('휴대폰 번호 인증번호 전송')
    setIsCodeSent(true)
    setIsCodeVerified(false)
    setRemainingTime(10)
  }

  const handlePhoneCertificationCheckClick = () => {
    /**
     * TODO: 휴대폰 번호 인증번호 확인 API 연동
     * TODO: API 통해서 인증번호 확인 됐을 때와 아닐 때 분기
     */
    if (!isCodeSent) {
      return
    }

    alert('휴대폰 번호 인증번호 확인')

    setIsCodeVerified(true)
    setIsCodeSent(false)
    setRemainingTime(0)
  }

  /**
   * 타이머 로직
   */
  useEffect(() => {
    if (!isCodeSent) {
      return
    }

    const timer = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          setToast({ type: 'error', message: '인증 시간이 만료되었습니다.' })
          setTimeout(() => setToast(null), 1000)
          setIsCodeSent(false)
          setIsCodeVerified(false)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isCodeSent])

  const formatTime = (sec: number) => {
    const m = String(Math.floor(sec / 60)).padStart(2, '0')
    const s = String(sec % 60).padStart(2, '0')
    return `${m}:${s}`
  }

  return (
    <div className="flex w-full flex-col gap-5">
      {toast && (
        <div className="absolute top-1 right-1">
          <Toast type={toast.type} message={toast.message} />
        </div>
      )}
      <div className="mb-2 flex justify-center">
        <Image src={compoundLogoRow} alt="PlayTypeLogo" priority />
      </div>
      <form
        className="flex flex-col gap-2.5 md:gap-5"
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        <FormField label="닉네임" required>
          <div className="flex md:items-end">
            <div className="relative md:flex md:gap-2">
              <BaseInput
                id="signup-nickname"
                type="text"
                placeholder="닉네임을 입력해 주세요."
                value={form.nickName}
                onChange={(e) => handleChange('nickName', e.target.value)}
                className="h-9 w-85 text-xs placeholder:text-xs md:h-10 md:w-90 md:text-sm md:placeholder:text-sm"
              />
              <Button
                type="button"
                variant="gray"
                size="md"
                className="absolute top-1/2 right-2 h-7 w-22 -translate-y-1/2 rounded-full bg-(--color-btn-gray-active) text-xs shadow-tag-inactive hover:bg-gradient-sub md:static md:h-10 md:w-full md:translate-y-0 md:rounded-default md:text-sm"
                onClick={handleNickNameCheckClick}
              >
                중복 확인
              </Button>
            </div>
          </div>
          {isNickNameChecked && (
            <div className="flex text-xs font-bold text-sub-cyan md:text-sm">
              <Check className="h-4 w-4 md:h-5 md:w-5" />
              <span>사용 가능한 닉네임입니다</span>
            </div>
          )}
        </FormField>
        <FormField label="아이디" required>
          <div className="flex md:items-end">
            <div className="relative md:flex md:gap-2">
              <BaseInput
                id="signup-id"
                type="text"
                placeholder="아이디를 입력해 주세요."
                value={form.id}
                onChange={(e) => handleChange('id', e.target.value)}
                className="h-9 w-85 text-xs placeholder:text-xs md:h-10 md:w-90 md:text-sm md:placeholder:text-sm"
              />
              <Button
                type="button"
                variant="gray"
                size="md"
                className="absolute top-1/2 right-2 h-7 w-22 -translate-y-1/2 rounded-full bg-(--color-btn-gray-active) text-xs shadow-tag-inactive hover:bg-gradient-sub md:static md:h-10 md:w-full md:translate-y-0 md:rounded-default md:text-sm"
                onClick={handleIdCheckClick}
              >
                중복 확인
              </Button>
            </div>
          </div>
          {isIdChecked && (
            <div className="flex text-xs font-bold text-sub-cyan md:text-sm">
              <Check className="h-4 w-4 md:h-5 md:w-5" />
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
              className="h-9 w-85 text-xs placeholder:text-xs md:h-10 md:w-90 md:text-sm md:placeholder:text-sm"
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
                      ? 'bg-gradient-sub text-black'
                      : 'bg-btn-gray-active text-black'
                  }`
                )}
              >
                {gender}
              </button>
            ))}
          </div>
        </FormField>
        <FormField label="휴대폰 번호" required>
          <div className="flex md:items-end">
            <div className="relative md:flex md:gap-2">
              <BaseInput
                id="signup-phone"
                type="tel"
                placeholder="휴대폰 번호를 입력해 주세요."
                value={form.phone}
                className={cn(
                  'h-9 w-85 text-xs placeholder:text-xs md:h-10 md:w-90 md:text-sm md:placeholder:text-sm',
                  isCodeSent || isCodeVerified
                    ? 'cursor-not-allowed'
                    : 'cursor-text'
                )}
                onChange={(e) => handleChange('phone', e.target.value)}
                disabled={isCodeSent || isCodeVerified}
              />
              <Button
                type="button"
                variant="gray"
                size="sm"
                className={cn(
                  'absolute top-1/2 right-2 h-7 w-22 -translate-y-1/2 rounded-full text-xs shadow-tag-inactive md:static md:h-10 md:w-full md:translate-y-0 md:rounded-default md:text-sm',
                  isCodeSent || isCodeVerified
                    ? 'cursor-not-allowed bg-btn-gray-disabled opacity-70'
                    : 'cursor-pointer bg-btn-gray-active hover:bg-gradient-sub'
                )}
                onClick={handlePhoneCertificationSendClick}
                disabled={isCodeSent || isCodeVerified}
              >
                {isCodeVerified ? '인증번호 완료' : '인증번호 전송'}
              </Button>
            </div>
          </div>
        </FormField>
        <FormField label="인증번호" required>
          {isCodeSent && (
            <p className="mb-1 text-xs text-red-400 md:text-sm">
              유효시간 {formatTime(remainingTime)}
            </p>
          )}
          <div className="flex md:items-end">
            <div className="relative md:flex md:gap-2">
              <BaseInput
                id="signup-phone-code"
                type="text"
                placeholder="인증번호를 입력해 주세요."
                value={form.phoneCode}
                className={cn(
                  'h-9 w-85 text-xs placeholder:text-xs md:h-10 md:w-90 md:text-sm md:placeholder:text-sm',
                  !isCodeSent || isCodeVerified
                    ? 'cursor-not-allowed'
                    : 'cursor-text'
                )}
                onChange={(e) => handleChange('phoneCode', e.target.value)}
                disabled={!isCodeSent || isCodeVerified}
              />
              <Button
                type="button"
                variant="gray"
                size="sm"
                className={cn(
                  'absolute top-1/2 right-2 h-7 w-22 -translate-y-1/2 rounded-full text-xs shadow-tag-inactive md:static md:h-10 md:w-full md:translate-y-0 md:rounded-default md:text-sm',
                  isCodeSent
                    ? 'cursor-pointer bg-btn-gray-active hover:bg-gradient-sub'
                    : 'cursor-not-allowed bg-btn-gray-disabled opacity-70'
                )}
                onClick={handlePhoneCertificationCheckClick}
                disabled={!isCodeSent || isCodeVerified}
              >
                {isCodeVerified ? '인증번호 완료' : '인증번호 확인'}
              </Button>
            </div>
          </div>
        </FormField>
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
