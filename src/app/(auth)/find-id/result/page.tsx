import Image from 'next/image'
import Link from 'next/link'

import { compoundLogoColumn } from '@/assets'
import { FindIdResultClient } from '@/components'
import { ROUTES_PATHS } from '@/constants'

/**
 * 아이디 찾기 결과 페이지
 */
export default function FindIdResultPage() {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={compoundLogoColumn}
        alt="logo"
        priority
        className="mb-4 w-30 md:w-40"
      />
      <h1 className="mb-15 text-2xl font-bold md:text-3xl">아이디 찾기</h1>
      <div className="mb-15 flex h-20 w-70 items-center justify-center rounded-default bg-neutral-100/10 text-lg font-semibold shadow-interactive-inactive md:h-32 md:w-90">
        <FindIdResultClient />
      </div>
      <div className="flex w-full gap-4 shadow-interactive-inactive">
        <Link
          href={ROUTES_PATHS.LOGIN_PAGE}
          className="flex h-10 w-full cursor-pointer items-center justify-center rounded-default bg-main-purple text-sm text-text-light hover:bg-main-purple/70 md:text-lg"
        >
          로그인 하기
        </Link>
        <Link
          href={ROUTES_PATHS.FIND_PASSWORD_PAGE}
          className="flex h-10 w-full cursor-pointer items-center justify-center rounded-default bg-neutral-100/10 text-sm hover:bg-btn-gray-active hover:text-text-dark md:text-lg"
        >
          비밀번호 찾기
        </Link>
      </div>
    </div>
  )
}
