'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { ROUTES_PATHS } from '@/constants'
import { useFindIdStore } from '@/store/useFindIdStore'

/**
 * 계정 아이디 찾기 결과 페이지 클라이언트
 */
export default function FindIdResultClient() {
  const router = useRouter()

  const { identifier, clear } = useFindIdStore()
  useEffect(() => {
    if (!identifier) {
      router.replace(ROUTES_PATHS.FIDN_ID_PAGE)
      return
    }
  }, [identifier, router, clear])

  if (!identifier) {
    return null
  }

  return (
    <span className="text-base text-text-light md:text-xl">{identifier}</span>
  )
}
