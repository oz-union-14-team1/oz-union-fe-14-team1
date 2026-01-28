import Image from 'next/image'

import { compoundLogoColumn } from '@/assets'
import { PwCheck } from '@/components'

/**
 * 회원 정보 수정 전 비밀번호 확인 페이지
 */
export default function PwCheckPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-5">
        <Image
          src={compoundLogoColumn}
          alt="PlayTypeLogo"
          priority
          className="w-30 md:w-40"
        />
        <h1 className="text-[20px] font-bold md:text-[32px]">비밀번호 확인</h1>
      </div>
      <PwCheck />
    </div>
  )
}
