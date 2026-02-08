'use client'

import { useEffect, useRef } from 'react'

import { useAuthStore } from '@/store/useAuthStore'

/**
 * 리프래쉬 시도를 통해 로그인 상태로 복구하는 역할
 * 역할: "초기화 완료"만 알려줌
 * refresh는 interceptor에서만 처리
 */
export default function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const initialized = useRef(false)
  const setInitialized = useAuthStore((s) => s.setInitialized)

  useEffect(() => {
    if (initialized.current) {
      return
    }
    initialized.current = true

    setInitialized(true)
  }, [setInitialized])
  return children
}
