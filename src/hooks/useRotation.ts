'use client'

import { useCallback, useEffect, useState } from 'react'

import { rotateNext, rotatePrev, rotateToId, rotateToIndex } from '@/utils'

type UseRotationOptions<T> = {
  items: T[]
  interval?: number
  autoPlay?: boolean
}

export default function useRotation<T extends { id: number | string }>({
  items,
  interval = 5000,
  autoPlay = true,
}: UseRotationOptions<T>) {
  const [orderedBanner, setOrderedBanner] = useState(items)
  const [isPaused, setIsPaused] = useState(false)

  const next = useCallback(() => {
    setOrderedBanner((prev) => rotateNext(prev))
  }, [])

  const prev = useCallback(() => {
    setOrderedBanner((prev) => rotatePrev(prev))
  }, [])

  const jumpToSide = useCallback((index: number) => {
    setOrderedBanner((prev) => rotateToIndex(prev, index))
  }, [])

  const jumpToBanner = useCallback((id: number | string) => {
    setOrderedBanner((prev) => rotateToId(prev, id))
  }, [])

  useEffect(() => {
    if (!autoPlay || isPaused || items.length === 0) {
      return
    }
    const timer = setInterval(next, interval)
    return () => clearInterval(timer)
  }, [autoPlay, isPaused, interval, next, items.length])

  useEffect(() => {
    setOrderedBanner(items)
  }, [items])

  const currentItem = orderedBanner[0]
  const currentIndex = items.findIndex((item) => item.id === currentItem.id)

  return {
    orderedBanner,
    currentItem,
    currentIndex,
    next,
    prev,
    jumpToSide,
    jumpToBanner,
    pause: () => setIsPaused(true),
    resume: () => setIsPaused(false),
    isPaused,
  }
}
