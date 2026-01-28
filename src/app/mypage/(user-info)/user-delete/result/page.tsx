import Link from 'next/link'

import { ROUTES_PATHS } from '@/constants'

export default function UserDeleteCompletePage() {
  return (
    <div className="px-10 pt-20">
      <div className="flex flex-col items-center justify-center">
        <p className="mb-20 text-[20px] leading-relaxed font-semibold whitespace-pre-line md:text-[32px]">
          {`그동안 PlayType 서비스를
        이용해주셔서 감사합니다.`}
        </p>
        <Link
          href={ROUTES_PATHS.MAIN_PAGE}
          className="rounded-default bg-btn-main-default px-10 py-2 text-sm hover:bg-btn-main-active md:px-20 md:text-base"
        >
          메인으로
        </Link>
      </div>
    </div>
  )
}
