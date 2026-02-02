'use client'

import { useFindIdStore } from '@/store/useFindIdStore'

/**
 * 계정 아이디 찾기 결과 페이지 클라이언트
 */
export default function FindIdResultClient() {
  const { identifier } = useFindIdStore()

  if (!identifier) {
    return (
      <span className="text-sm text-gray-400">
        아이디 찾기 후 이용해주세요.
      </span>
    )
  }

  return (
    <span className="text-base text-text-light md:text-xl">{identifier}</span>
  )
}
