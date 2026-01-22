'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { Button } from '@/components'
import { ROUTES_PATHS } from '@/constants'
import { useToast } from '@/hooks'

/**
 * 회원탈퇴 클라이언트 컴포넌트
 */
export default function UserDeleteClient() {
  const router = useRouter()
  const { triggerToast } = useToast()
  const [checked, setChecked] = useState(false)

  const handleUserDelete = async () => {
    if (!checked) {
      return
    }

    /**
     * TODO: 탈퇴 API 연동
     */
    triggerToast('success', '회원탈퇴가 완료되었습니다.')
    router.push(ROUTES_PATHS.USER_DELETE_RESULT_PAGE)
  }
  return (
    <>
      <label className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-text-dark px-5 py-4 text-sm md:text-base">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="h-4 w-4 accent-main-purple"
        />
        <span className="font-medium">정말 탈퇴하시겠습니까?</span>
      </label>
      <div className="mt-6 grid h-13 w-full grid-cols-2 gap-4 text-sm md:text-base">
        <Button
          className="rounded-xl bg-text-dark hover:bg-main-purple"
          onClick={() => router.back()}
        >
          취소
        </Button>
        <Button
          className="rounded-xl bg-text-dark font-semibold hover:bg-main-purple disabled:bg-text-dark disabled:text-text-light/40"
          disabled={!checked}
          onClick={handleUserDelete}
        >
          탈퇴하기
        </Button>
      </div>
    </>
  )
}
