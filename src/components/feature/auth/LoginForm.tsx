'use client'

import Image from 'next/image'
import { useState } from 'react'

import { compoundLogoColumn, discordIcon, googleIcon } from '@/assets'
import { BaseInput, CustomButton, Toast, ToastProps } from '@/components'

export default function LoginForm() {
  const [toast, setToast] = useState<ToastProps | null>(null)
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
   * TODO: api 연결 시 수정 예정
   */
  const handleSubmit = () => {
    const isSmallHeight = window.innerWidth <= 400
    console.log(window.innerWidth)
    /**
     * TODO: 입력값 가져오기
     * TODO: API 요청 보내기
     */
    setToast({
      type: isSmallHeight ? 'warning' : 'success',
      message: '토스트 테스트 성공!',
    })

    setTimeout(() => {
      setToast(null)
    }, 1000)
  }

  return (
    <div className="w-full px-[clamp(16px,5vw,80px)] py-[clamp(64px,5vw,100px)]">
      {toast && (
        <div className="absolute top-6">
          <Toast type={toast.type} message={toast.message} />
        </div>
      )}
      <div className="mb-9 flex justify-center">
        <Image
          src={compoundLogoColumn}
          alt="PlayTypeLogo"
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
          type="email"
          placeholder="이메일을 입력해 주세요."
          className="h-[clamp(36px,4vw,48px)] text-[clamp(14px,2vw,16px)]"
        />
        <BaseInput
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          className="h-[clamp(36px,4vw,48px)] text-[clamp(14px,2vw,16px)]"
        />
        <CustomButton
          label="로그인"
          type="submit"
          className="rounded-radius-default h-[clamp(36px,4vw,48px)] w-full cursor-pointer bg-cyan-300 text-[clamp(14px,2vw,16px)] font-semibold text-text-dark hover:bg-cyan-400"
        />
      </form>
      <div className="mt-6 flex flex-col items-center justify-center gap-[clamp(16px,3vw,24px)]">
        <div className="flex justify-center gap-8 text-sm text-cyan-300">
          <button
            type="button"
            className="cursor-pointer font-semibold hover:text-cyan-500"
          >
            이메일 찾기
          </button>
          <button
            type="button"
            className="cursor-pointer font-semibold hover:text-cyan-500"
          >
            비밀번호 찾기
          </button>
        </div>

        <p className="flex justify-center text-sm">
          <span className="pr-2">아직 회원이 아니신가요?</span>
          <span className="cursor-pointer font-semibold text-cyan-300 hover:text-cyan-500">
            회원가입 하기
          </span>
        </p>
        <button
          type="button"
          className="flex h-10 w-55 cursor-pointer items-center justify-center gap-2.5 rounded-2xl bg-neutral-100 px-3 text-text-dark"
        >
          <Image src={googleIcon} alt="googleIcon" className="w-10" />
          <span className="font-normal">Sign in with Google</span>
        </button>

        <button
          type="button"
          className="flex h-10 w-55 cursor-pointer items-center justify-center gap-2.5 rounded-2xl bg-indigo-600 px-3 text-text-light"
        >
          <Image src={discordIcon} alt="discordIcon" className="mx-2 w-5" />
          <span className="font-normal">Sign in with Discord</span>
        </button>
      </div>
    </div>
  )
}
