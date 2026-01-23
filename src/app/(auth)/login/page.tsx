import Link from 'next/link'

import { LoginForm, SnsLoginForm } from '@/components'
import { ROUTES_PATHS } from '@/constants'

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center gap-6">
      <LoginForm />
      <div className="flex w-92.5 flex-col items-center gap-[clamp(16px,3vw,24px)]">
        <div className="flex gap-8 text-sm text-cyan-300 md:text-base">
          <Link
            href={ROUTES_PATHS.FIDN_ID_PAGE}
            className="cursor-pointer font-semibold hover:text-cyan-500"
          >
            아이디 찾기
          </Link>
          <Link
            href={ROUTES_PATHS.FIND_PASSWORD_PAGE}
            className="cursor-pointer font-semibold hover:text-cyan-500"
          >
            비밀번호 찾기
          </Link>
        </div>
        <p className="flex justify-center text-sm md:text-base">
          <span className="pr-2">아직 회원이 아니신가요?</span>
          <span>
            <Link
              href={ROUTES_PATHS.SIGNUP_PAGE}
              className="cursor-pointer font-semibold text-cyan-300 hover:text-cyan-500"
            >
              회원가입 하기
            </Link>
          </span>
        </p>
        <div className="relative my-2 flex w-80 max-w-100 items-center gap-4 md:w-92.5">
          <div className="flex-1 border-t border-white" />
          <span className="text-xs font-medium md:text-sm">또는</span>
          <div className="flex-1 border-t border-white" />
        </div>
        <SnsLoginForm />
      </div>
    </div>
  )
}
