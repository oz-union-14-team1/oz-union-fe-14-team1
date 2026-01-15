'use client'

import Image from 'next/image'
import { useState } from 'react'

import { compoundLogoColumn } from '@/assets'
import {
  BaseInput,
  CustomButton,
  LoginFormValues,
  loginSchema,
  Toast,
  ToastProps,
} from '@/components'

/**
 * 로그인 폼 컴포넌트
 */
export default function LoginForm() {
  const [toast, setToast] = useState<ToastProps | null>(null)
  const [form, setForm] = useState<LoginFormValues>({
    email: '',
    password: '',
  })
  /**
   * TODO: 이메일/비밀번호 상태 관리 (useState)
   * TODO: 입력값 유효성 검사
   * TODO: 로그인 API 연결
   * TODO: 에러 메시지 처리
   * TODO: 로그인 성공 시 토큰 저장
   * TODO: 로그인 후 페이지 이동 처리
   */
  /**
   * 로그인 성공 시 토스트
   */
  const handleSubmit = () => {
    const { email, password } = form
    const result = loginSchema.safeParse({ email, password })

    if (!result.success) {
      setToast({
        type: 'error',
        message: result.error.issues[0].message,
      })

      setTimeout(() => setToast(null), 1500)
      return
    }

    setToast({
      type: 'success',
      message: '로그인 성공!',
    })

    setTimeout(() => setToast(null), 1000)
  }

  const handleChange = (field: keyof LoginFormValues, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="w-full px-[clamp(16px,5vw,80px)]">
      {toast && (
        <div className="absolute top-6">
          <Toast type={toast.type} message={toast.message} />
        </div>
      )}
      <div className="mb-9 flex justify-center">
        <Image
          src={compoundLogoColumn}
          alt="PlayTypeLogo"
          priority
          className="mx-auto w-[clamp(120px,15vw,146px)]"
        />
      </div>
      <form
        className="mx-auto flex flex-col gap-[clamp(12px,3vw,28px)]"
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        <BaseInput
          id="login-email"
          type="email"
          placeholder="이메일을 입력해 주세요."
          value={form.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className="h-[clamp(36px,4vw,48px)] text-[clamp(14px,2vw,16px)]"
        />
        <BaseInput
          id="login-password"
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          value={form.password}
          onChange={(e) => handleChange('password', e.target.value)}
          className="h-[clamp(36px,4vw,48px)] text-[clamp(14px,2vw,16px)]"
        />
        <CustomButton
          label="로그인"
          type="submit"
          className="rounded-radius-default h-[clamp(36px,4vw,48px)] w-full cursor-pointer bg-cyan-300 text-[clamp(14px,2vw,16px)] font-semibold text-text-dark hover:bg-cyan-400"
        />
      </form>
    </div>
  )
}
