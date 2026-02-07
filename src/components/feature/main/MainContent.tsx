'use client'

import { useAuthStore } from '@/store/useAuthStore'

import { GuestSection } from './auth-dependency-section/GuestSection'
import { MemberSection } from './auth-dependency-section/MemberSection'

export function MainContent() {
  const { user, isInitialized } = useAuthStore((state) => state)

  if (!isInitialized) {
    return null
  }

  return user ? <MemberSection /> : <GuestSection />
}
