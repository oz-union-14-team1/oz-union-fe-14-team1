import Image from 'next/image'
import Link from 'next/link'

import { compoundLogoRow } from '@/assets'
import { UserInfoUpdateClient } from '@/components'
import { ROUTES_PATHS } from '@/constants/routesPaths'

/**
 * 회원 정보 수정 페이지
 */
export default function UserInfoUpdatePage() {
  return (
    <div className="flex flex-col items-center py-10">
      <div className="flex flex-col">
        <Image
          src={compoundLogoRow}
          alt="PlayTypeLogo"
          priority
          className="mb-4 w-30 md:w-40"
        />
      </div>
      <h1 className="mb-2 text-[20px] font-bold md:text-[32px]">회원 수정</h1>
      <div className="mb-10">
        <UserInfoUpdateClient />
      </div>
      <div className="flex w-full flex-col gap-5">
        <div className="relative my-2 flex items-center">
          <div className="flex-1 border-t border-white" />
        </div>
        <p className="flex justify-center text-sm md:text-lg">
          <span className="pr-2">이제 이 세계를 떠나실 건가요..?</span>
          <span>
            <Link
              href={ROUTES_PATHS.USER_DELETE_PAGE}
              className="cursor-pointer font-semibold text-cyan-300 hover:text-cyan-500"
            >
              회원 탈퇴하기
            </Link>
          </span>
        </p>
      </div>
    </div>
  )
}
