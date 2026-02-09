'use client'

import { RefObject, useEffect } from 'react'

export function useDrawerOutsideClick(
  isOpen: boolean,
  onClose: () => void,
  refs: {
    drawerContent: RefObject<HTMLElement>
    trigger: RefObject<HTMLElement>
  }
) {
  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null
      if (!target) {
        return
      }
      if (refs.drawerContent.current?.contains(target)) {
        return
      }
      if (refs.trigger.current?.contains(target)) {
        return
      }
      // 모바일 필터 버튼도 무시
      if (target.closest('[data-filter-trigger]')) {
        return
      }
      // 드로어가 열려있을 때만 닫기
      if (isOpen) {
        onClose()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [isOpen, onClose, refs])
}
