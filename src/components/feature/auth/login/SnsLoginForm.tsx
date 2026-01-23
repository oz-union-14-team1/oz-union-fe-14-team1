'use client'

import Image from 'next/image'

import { discordIcon, googleLogo } from '@/assets'
import { useToast } from '@/hooks'

/**
 * SNS 로그인 폼 컴포넌트
 */
export default function SnsLoginForm() {
  const { triggerToast } = useToast()
  const handleGoogleLogin = async () => {
    /**
     * TODO: 구글 로그인 API 연동
     */
    triggerToast('success', '구글 로그인 성공')
  }

  const handleDiscordLogin = async () => {
    /**
     * TODO: 구글 로그인 API 연동
     */

    triggerToast('success', '디스코드 로그인 성공')
  }
  return (
    <div className="flex items-center justify-center gap-5">
      <button type="button">
        <Image
          src={googleLogo}
          alt="googleIcon"
          className="w-13 cursor-pointer"
          onClick={handleGoogleLogin}
        />
      </button>
      <button type="button">
        <Image
          src={discordIcon}
          alt="discordIcon"
          className="h-13 w-13 cursor-pointer rounded-full bg-main-purple p-2"
          onClick={handleDiscordLogin}
        />
      </button>
    </div>
  )
}
