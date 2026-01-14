import Link from 'next/link'
import Image from 'next/image'
import { NotPoundImage } from '@/assets'
import { NOTFOUND_IMAGE_WIDTH, ROUTES_PATHS } from '@/constants'

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100dvh-5.25rem)] flex-col items-center justify-center overflow-y-hidden bg-text-dark text-center text-text-light">
      <div className="mb-8">
        <Image
          src={NotPoundImage}
          alt="NotFound"
          width={NOTFOUND_IMAGE_WIDTH}
          className="h-auto rounded-xl shadow-(--shadow-tag-active)"
        />
      </div>
      <div className="mb-2 text-[clamp(0.875rem,4vw,1.75rem)] font-semibold text-text-light">
        길을 잃었어요...
      </div>
      <p className="mb-8 font-(--font-family-base) text-text-light">
        <span className="text-[clamp(0.875rem,4vw,1.25rem)] font-light">
          이 페이지는 게임 오버…
        </span>
        <span className="text-[clamp(0.875rem,4vw,1.25rem)] font-semibold">
          대신 새로운 게임을 발견하러 가볼까요?
        </span>
      </p>
      <Link
        href={ROUTES_PATHS.MAIN_PAGE}
        className="rounded-(--radius-default) bg-violet-500 px-[clamp(var(--spacing-mobile),4vw,var(--spacing-desktop))] py-[clamp(0.5rem,2vw,1rem)] text-[clamp(0.875rem,3vw,1.25rem)] transition-all hover:bg-violet-700"
      >
        홈으로
      </Link>
    </div>
  )
}
