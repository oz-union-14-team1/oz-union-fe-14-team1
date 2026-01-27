import Image from 'next/image'
import Link from 'next/link'

import { notFoundImage } from '@/assets'
import { NOTFOUND_IMAGE_WIDTH, ROUTES_PATHS } from '@/constants'

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100dvh-5.25rem)] flex-col items-center justify-center overflow-y-hidden bg-text-dark text-center text-text-light">
      <div className="relative mb-12">
        <div className="absolute inset-0 animate-pulse rounded-full bg-main-purple/40 blur-3xl" />
        <div className="from-interactive-active to-interactive-active relative p-6">
          <Image
            src={notFoundImage}
            alt="NotFound"
            width={NOTFOUND_IMAGE_WIDTH}
            className="h-auto rounded-xl"
            priority
          />
        </div>
      </div>
      <h1 className="mb-3 text-[clamp(1.25rem,5vw,1rem)] font-bold">
        길을 잃었어요...
      </h1>
      <div className="mb-12 text-[clamp(0.875rem,3vw,1.25rem)] text-text-light/80">
        이 페이지는 게임 오버…
        <p className="font-semibold text-text-light">
          새로운 게임을 발견하러 가볼까요?
        </p>
      </div>
      <Link
        href={ROUTES_PATHS.MAIN_PAGE}
        className="rounded-default bg-main-purple px-15 py-2 hover:bg-main-purple/70 md:px-30"
      >
        홈으로
      </Link>
    </div>
  )
}
