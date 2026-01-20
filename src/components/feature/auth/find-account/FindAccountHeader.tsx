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
    <div className="mb-2 flex flex-col justify-center">
      <div className="mb-12 flex flex-col text-center text-3xl font-bold text-text-dark">
        {isFindMode ? '아이디 찾기' : '비밀번호 찾기'}
        {error && (
          <p className="max-w-md text-center text-sm leading-relaxed font-semibold wrap-break-word text-red-600 md:text-[16px]">
            {error}
          </p>
        )}
      </div>
    </div>
  )
}
