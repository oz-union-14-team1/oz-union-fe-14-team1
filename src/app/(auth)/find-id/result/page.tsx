import Image from 'next/image'

import { compoundLogoColumn } from '@/assets'
import { FindIdResultClient } from '@/components'

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
      <h1 className="mb-10 text-2xl font-bold text-text-dark md:text-3xl">
        아이디 찾기
      </h1>
      <div className="mb-10 flex h-15 w-70 items-center justify-center rounded-default bg-btn-gray-default text-lg font-semibold shadow-tag-active md:h-25 md:w-90">
        <span className="text-base text-text-dark md:text-xl">
          {/** TODO: {userId} */}
        </span>
      </div>
      <FindIdResultClient />
    </div>
  )
}
