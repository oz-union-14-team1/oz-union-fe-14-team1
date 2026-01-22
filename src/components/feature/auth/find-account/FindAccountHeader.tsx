'use client'

import { FindAccountMode } from '@/types/findAccountMode'

/**
 * 아이디/비밀번호 찾기 헤더 컴포넌트
 * @param mode - 'id' | 'password'
 * @param error - 에러 메시지
 * @returns 아이디/비밀번호 찾기 헤더 UI
 */
export default function FindAccountHeader({
  mode,
  error,
}: {
  mode: FindAccountMode
  error: string | null
}) {
  const isFindMode = mode === 'id'
  return (
    <div className="mb-10 flex flex-col items-center justify-center">
      <div className="text-2xl font-bold md:text-3xl">
        {isFindMode ? '아이디 찾기' : '비밀번호 찾기'}
      </div>
      {error && (
        <p className="max-w-md text-center text-sm leading-relaxed font-semibold wrap-break-word text-red-500 md:text-base">
          {error}
        </p>
      )}
    </div>
  )
}
