'use client'

import { useAuthStore } from '@/store/useAuthStore'

import { GuestSection } from './auth-dependency-section/GuestSection'
import { MemberSection } from './auth-dependency-section/MemberSection'

export function MainContent() {
  const { isInitialized, accessToken } = useAuthStore()

  if (!isInitialized) {
    return null
  }

  if (!accessToken) {
    return <GuestSection />
  }

  return <MemberSection />
}
