import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { ROUTES_PATHS } from '@/constants'

export const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}.${month}.${day}.`
}

// TODO: 실제 회원가입 날짜는 props나 API에서 가져와야 합니다
const SIGNUP_DATE = '2023-11-28'

export default function MyReviewListWelcomeUi() {
  return (
    <div>
      <div className="flex items-start justify-start gap-4 md:gap-6 lg:gap-9.5">
        <div className="-mt-1.5 hidden w-16 shrink-0 md:block md:w-20">
          <p className="text-sm font-medium text-main-violet">
            {formatDate(SIGNUP_DATE)}
          </p>
        </div>
        <div className="ml-0.5 flex shrink-0 flex-col items-center justify-center lg:ml-1">
          <div className="relative flex size-3 items-center justify-center">
            <span className="absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-linear-to-r from-main-purple via-main-violet to-main-fuchsia opacity-75" />
            <span className="absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-linear-to-r from-main-purple via-main-violet to-main-fuchsia shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
          </div>
        </div>
        <div className="-mt-25 ml-0 flex flex-1 flex-col items-start justify-center gap-4 md:ml-6 lg:ml-10">
          <Link
            href={ROUTES_PATHS.MAIN_PAGE}
            className="group mt-2 inline-flex w-fit items-center gap-2 rounded-lg bg-gradient-to-r from-main-purple to-main-fuchsia px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >
            Let&apos;s Play!
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold text-text-light md:text-xl">
              Welcome to PLAYTYPE!
            </h3>
            <p className="text-sm text-text-secondary md:text-base">
              게임과 함께하는 즐거운 시간을 시작해보세요
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
