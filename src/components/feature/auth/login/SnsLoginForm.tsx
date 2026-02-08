'use client'

import Image from 'next/image'

import { discordIcon, googleLogo } from '@/assets'
import {
  API_BASE_URL,
  API_PATH,
  BACK_API_URL,
  DISCORD_CLIENT_ID_URL,
  GOOGLE_CLIENT_ID_URL,
} from '@/constants/apiPath'

/**
 * SNS 로그인 폼 컴포넌트
 */
export default function SnsLoginForm() {
  const redirectGoogleUri = `${API_BASE_URL}${API_PATH.GOOGLE_LOGIN_API_PATH}`

  const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID_URL}&redirect_uri=${redirectGoogleUri}&response_type=code&scope=email profile`

  const redirectDiscordUri = `${BACK_API_URL}${API_PATH.DISCORD_LOGIN_API_PATH}`

  const discordLoginUrl = `https://accounts.discord.com/o/oauth2/v2/auth?client_id=${DISCORD_CLIENT_ID_URL}&redirect_uri=${redirectDiscordUri}&response_type=code&scope=email profile`

  return (
    <div className="flex items-center justify-center gap-5">
      <a href={googleLoginUrl}>
        <Image
          src={googleLogo}
          alt="googleIcon"
          className="w-13 cursor-pointer"
        />
      </a>
      <a href={discordLoginUrl}>
        <Image
          src={discordIcon}
          alt="discordIcon"
          className="h-13 w-13 cursor-pointer rounded-full bg-main-purple p-2"
        />
      </a>
    </div>
  )
}
