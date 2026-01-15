import Image from 'next/image'
import Link from 'next/link'

import { discordIcon, googleIcon } from '@/assets'
import LoginForm from '@/components/feature/auth/LoginForm'

export default function LoginFormTestPage() {
  return (
    <div className="relative flex min-h-[calc(100dvh-5.25rem)] items-center justify-center overflow-hidden bg-text-dark">
      <div className="flex max-w-140 flex-col items-center justify-center [background-image:var(--gradient-main)] text-text-light">
        <div className="flex flex-col items-center py-[clamp(64px,5vw,100px)]">
          <LoginForm />
          <div className="mt-6 flex flex-col items-center justify-center gap-[clamp(16px,3vw,24px)]">
            <div className="flex justify-center gap-8 text-sm text-cyan-300">
              <button
                type="button"
                className="cursor-pointer font-semibold hover:text-cyan-500"
                /**
                 * TODO: 이메일 찾기 페이지로 연결
                 */
              >
                이메일 찾기
              </button>
              <Link
                href="/find-password"
                className="cursor-pointer font-semibold hover:text-cyan-500"
              >
                비밀번호 찾기
              </Link>
            </div>
            <p className="flex justify-center text-sm">
              <span className="pr-2">아직 회원이 아니신가요?</span>
              <span>
                <button
                  type="button"
                  className="cursor-pointer font-semibold text-cyan-300 hover:text-cyan-500"
                  /**
                   * TODO: 회원가입 페이지로 연결
                   */
                >
                  회원가입 하기
                </button>
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
      </div>
    </div>
  )
}
