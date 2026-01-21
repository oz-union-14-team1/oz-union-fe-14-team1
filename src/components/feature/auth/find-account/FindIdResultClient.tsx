'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/common'
import { ROUTES_PATHS } from '@/constants'

/**
 * 아이디 찾기 결과 컴포넌트
 */
export default function FindIdResultClient() {
  const router = useRouter()

  return (
    <div className="flex w-full gap-4">
      <Button
        variant="gray"
        onClick={() => router.push(ROUTES_PATHS.LOGIN_PAGE)}
        className="w-full cursor-pointer text-sm hover:bg-btn-gray-hover md:text-base"
      >
        로그인 하기
      </Button>
      <Button
        variant="sub"
        onClick={() => router.push(ROUTES_PATHS.FIND_PASSWORD_PAGE)}
        className="w-full cursor-pointer text-sm hover:bg-btn-sub-hover md:text-base"
      >
        비밀번호 찾기
      </Button>
    </div>
  )
}
