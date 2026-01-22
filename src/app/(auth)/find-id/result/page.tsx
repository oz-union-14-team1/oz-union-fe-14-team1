import Image from 'next/image'
import Link from 'next/link'

import { compoundLogoColumn } from '@/assets'
import { ROUTES_PATHS } from '@/constants'

export default function FindIdResultPage() {
  /**
   * TODO: 서버에서 아이디 받아오기
   * TODO: 인증된 사용자 데이터/세션 기반 결과
   * {credentials: 'include',
   * cache: 'no-store',}
   */
  return (
    <div className="flex flex-col items-center">
      <Image
        src={compoundLogoColumn}
        alt="logo"
        className="mb-4 w-30 md:w-40"
      />
      <h1 className="mb-15 text-2xl font-bold md:text-3xl">아이디 찾기</h1>
      <div className="mb-15 flex h-20 w-70 items-center justify-center rounded-default bg-btn-gray-default text-lg font-semibold md:h-32 md:w-90">
        <span className="text-base text-text-dark md:text-xl">
          {/** TODO: {userId} */}
        </span>
      </div>
      <div className="flex w-full gap-4 shadow-interactive-inactive">
        <Link
          href={ROUTES_PATHS.LOGIN_PAGE}
          className="flex h-10 w-full cursor-pointer items-center justify-center rounded-default bg-btn-gray-default text-sm text-text-dark hover:bg-main-purple hover:text-text-light md:text-base"
        >
          로그인 하기
        </Link>
        <Link
          href={ROUTES_PATHS.FIND_PASSWORD_PAGE}
          className="flex h-10 w-full cursor-pointer items-center justify-center rounded-default bg-neutral-100/10 text-sm hover:bg-main-purple hover:text-text-dark md:text-base"
        >
          비밀번호 찾기
        </Link>
      </div>
    </div>
  )
}
