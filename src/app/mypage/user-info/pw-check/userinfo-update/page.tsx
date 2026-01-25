import Image from 'next/image'

import { compoundLogoRow } from '@/assets'
import { UserInfoUpdateClient } from '@/components'

/**
 * 회원 정보 수정 페이지
 */
export default function UserInfoUpdatePage() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col">
        <Image
          src={compoundLogoRow}
          alt="PlayTypeLogo"
          priority
          className="mb-4 w-30 md:w-40"
        />
      </div>
      <h1 className="mb-2 text-[20px] font-bold md:text-[32px]">회원 수정</h1>
      <UserInfoUpdateClient />
    </div>
  )
}
