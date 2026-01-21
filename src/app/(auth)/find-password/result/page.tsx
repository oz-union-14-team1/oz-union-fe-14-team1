import Image from 'next/image'

import { compoundLogoColumn } from '@/assets'
import FindPasswordResultClient from '@/components/feature/auth/find-account/FindPasswordResultClient'

export default function FindPasswordResultPage() {
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
      <h1 className="mb-2 text-2xl font-bold text-text-dark md:text-3xl">
        비밀번호 찾기
      </h1>
      <FindPasswordResultClient />
    </div>
  )
}
