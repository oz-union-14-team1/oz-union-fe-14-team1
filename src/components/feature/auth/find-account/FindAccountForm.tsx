'use client'

import { useState } from 'react'

import { PhoneVerificationField } from '@/components'
import { Button } from '@/components/common'
import { usePhoneVerificationTimer, useToast } from '@/hooks'

import {
  FindAccountFormValues,
  findAccountSchema,
  phoneOnlySchema,
} from '../schema/findAccountSchema'

/**
 * 아이디/비밀번호 찾기 모드
 */
type FindAccountMode = 'id' | 'password'

type FindAccountFormProps = {
  mode: FindAccountMode
}

/**
 * 아이디/비밀번호 찾기 폼 컴포넌트
 * @param mode - 'id'
 * @returns 아이디/비밀번호 찾기 폼 UI
 */
export default function FindAccountForm({ mode }: FindAccountFormProps) {
  /**
   * TODO: 이메일/비밀번호 상태 관리 (useState)
   * TODO: 입력값 유효성 검사
   * TODO: 로그인 API 연결
   * TODO: 에러 메시지 처리
   * TODO: 로그인 성공 시 토큰 저장
   * TODO: 로그인 후 페이지 이동 처리
   */
  const isFindMode = mode === 'id'
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState<FindAccountFormValues>({
    phone: '',
    phoneCode: '',
  })
  const { triggerToast } = useToast()

  /**
   * 핸드폰 인증 타이머 훅
   */
  const phoneTimer = usePhoneVerificationTimer({
    duration: 10 /** TODO: 180초 */,
    onExpire: () => {
      setForm((prev) => ({ ...prev, phoneCode: '' }))
      triggerToast('error', '인증 시간이 만료되었습니다.')
    },
    onVerified: () => {
      handleSubmit()
    },
  })

  const handleSubmit = () => {
    const { phone, phoneCode } = form
    const result = findAccountSchema.safeParse({ phone, phoneCode })

    if (!result.success) {
      const message = result.error.issues[0].message
      setError(message)
      triggerToast('error', '아이디 찾기에 실패하였습니다.')
      return
    }

    /**
     * TODO: 아이디 찾기 API 연동
     * TODO: credentials: 'include',
     */

    setError(null)
    triggerToast('success', '아이디 찾기 성공!')
  }

  const handleChange = (field: keyof FindAccountFormValues, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSendCodeWithValidation = () => {
    const result = phoneOnlySchema.safeParse({
      phone: form.phone,
    })

    if (!result.success) {
      setError(result.error.issues[0].message)
      triggerToast('error', '인증번호 전송에 실패하였습니다.')
      return
    }

    setForm((prev) => ({ ...prev, phoneCode: '' }))

    setError(null)
    phoneTimer.handleSendCode()
  }

  return (
    <div className="w-full px-12">
      <div className="mb-2 flex flex-col justify-center">
        <div className="mb-12 flex flex-col text-center text-3xl font-bold text-text-dark">
          {isFindMode ? '아이디 찾기' : '비밀번호 찾기'}
          {error && (
            <p className="max-w-md text-center text-sm leading-relaxed font-semibold wrap-break-word text-red-600 md:text-[16px]">
              {error}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <form
          className="mx-auto flex flex-col gap-5"
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
          }}
        >
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
            handleVerifyCode={phoneTimer.handleVerifyCode}
          />
          <div className="mt-10 flex w-full flex-col">
            <Button
              type="submit"
              variant="sub"
              className="cursor-pointer bg-sub-cyan text-xs md:text-xl"
            >
              {isFindMode ? '아이디 찾기' : '비밀번호 찾기'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
