import Image from 'next/image'

import { compoundLogoRow } from '@/assets'
import { SignupForm } from '@/components'

/**
 * 회원가입 페이지 Image 로고 부분 + Form 부분
 */
export default function SignupPage() {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="mb-2 flex justify-center">
        <Image src={compoundLogoRow} alt="PlayTypeLogo" priority />
      </div>
      <SignupForm />
    </div>
  )
}
