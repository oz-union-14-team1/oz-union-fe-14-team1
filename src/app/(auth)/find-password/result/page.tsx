import Image from 'next/image'

import compoundLogoColumn from '@/assets/images/logo/compoundLogoColumn.svg'
import FindPasswordResultClient from '@/components/feature/auth/find-account/FindPasswordResultClient'

/**
 * 비밀번호 찾기 결과 페이지
 */
export default function FindPasswordResultPage() {
  return (
    <div className="flex flex-col items-center text-text-light">
      <Image
        src={compoundLogoColumn}
        alt="logo"
        priority
        className="mb-4 w-30 md:w-40"
      />
      <h1 className="text-2xl font-bold md:text-3xl">비밀번호 찾기</h1>
      <FindPasswordResultClient />
    </div>
  )
}
