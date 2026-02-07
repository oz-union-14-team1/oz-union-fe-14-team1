'use client'

import Image from 'next/image'

import { discordIcon, googleLogo } from '@/assets'
import {
  API_PATH,
  BACK_API_URL,
  GOOGLE_CLIENT_ID_URL,
} from '@/constants/apiPath'
import { useToast } from '@/hooks'

/**
 * SNS 로그인 폼 컴포넌트
 */
export default function SnsLoginForm() {
  const redirectUri = `${BACK_API_URL}${API_PATH.GOOGLE_LOGIN_API_PATH}`

  const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID_URL}&redirect_uri=${redirectUri}&response_type=code&scope=email profile`

  const { triggerToast } = useToast()

  const handleDiscordLogin = async () => {
    /**
     * TODO: 디스코드 로그인 API 연동
     */

    triggerToast('success', '디스코드 로그인 성공')
  }
  return (
    <div className="flex items-center justify-center gap-5">
      <a href={googleLoginUrl}>
        <Image
          src={googleLogo}
          alt="googleIcon"
          className="w-13 cursor-pointer"
        />
      </a>
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
