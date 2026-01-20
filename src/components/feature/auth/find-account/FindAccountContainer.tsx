'use client'

import { useState } from 'react'

import { FindAccountMode } from '@/types/findAccountMode'

import FindAccountForm from './FindAccountForm'
import FindAccountHeader from './FindAccountHeader'

/**
 * 아이디/비밀번호 찾기 컨테이너 컴포넌트
 * @param mode - 'id' | 'password'
 * @returns 아이디/비밀번호 찾기 UI
 */
export default function FindAccountContainer({
  mode,
}: {
  mode: FindAccountMode
}) {
  const [error, setError] = useState<string | null>(null)

  return (
    <div className="w-full px-12">
      <FindAccountHeader mode={mode} error={error} />
      <FindAccountForm mode={mode} onError={setError} />
    </div>
  )
}
