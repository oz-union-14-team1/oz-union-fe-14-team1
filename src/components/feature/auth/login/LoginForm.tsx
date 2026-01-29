'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { loginApi } from '@/api/fetchers/authFetchers'
import { compoundLogoColumn } from '@/assets'
import { BaseInput, Button, LoginFormValues, loginSchema } from '@/components'
import { ROUTES_PATHS } from '@/constants'
import useToast from '@/hooks/useToast'
import { useAuthStore } from '@/store/useAuthStore'

/**
 * 로그인 폼 컴포넌트
 */
export default function LoginForm() {
  const [form, setForm] = useState<LoginFormValues>({
    id: '',
    password: '',
  })
  const router = useRouter()
  const { triggerToast } = useToast()
  const { setToken } = useAuthStore()
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
  const handleSubmit = async () => {
    const { id, password } = form
    const result = loginSchema.safeParse({ id, password })

    if (!result.success) {
      triggerToast('error', result.error.issues[0].message)
      return
    }

    try {
      const data = await loginApi({ id, password })
      /**
       * console.log 데이터확인 후 삭제 예정
       */
      console.log('login response:', data)
      setToken(data.accessToken)
      triggerToast('success', '로그인 성공')
      router.replace(ROUTES_PATHS.MAIN_PAGE)
    } catch {
      triggerToast('error', '아이디 또는 비밀번호가 올바르지 않습니다.')
    }
  }

  const handleChange = (field: keyof LoginFormValues, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="px-[clamp(16px,5vw,80px)]">
      <div className="mb-9 flex">
        <Image
          src={compoundLogoColumn}
          alt="PlayTypeLogo"
          priority
          className="mx-auto w-[clamp(120px,15vw,146px)]"
        />
      </div>
      <form
        className="flex flex-col gap-[clamp(12px,3vw,28px)]"
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        <BaseInput
          id="login-id"
          type="text"
          inputSize="login"
          placeholder="아이디를 입력해 주세요."
          value={form.id}
          onChange={(e) => handleChange('id', e.target.value)}
          className="h-[clamp(36px,4vw,48px)] w-80 text-[clamp(14px,2vw,16px)] md:w-92.5"
        />
        <BaseInput
          inputSize="login"
          id="login-password"
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          value={form.password}
          onChange={(e) => handleChange('password', e.target.value)}
          className="h-[clamp(36px,4vw,48px)] w-80 text-[clamp(14px,2vw,16px)] md:w-92.5"
        />
        <Button
          type="submit"
          className="h-[clamp(44px,4vw,50px)] w-80 cursor-pointer bg-gradient-main shadow-tag-inactive hover:opacity-70 md:w-92.5"
        >
          로그인
        </Button>
      </form>
    </div>
  )
}
