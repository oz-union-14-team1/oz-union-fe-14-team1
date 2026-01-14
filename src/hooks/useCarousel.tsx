import { useCallback, useRef, useState } from 'react'

type UseCarouselOptions = {
  scrollAmount?: number
}

export default function useCarousel({
  scrollAmount = 300,
}: UseCarouselOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [hasPrev, setHasPrev] = useState(false)
  const [hasNext, setHasNext] = useState(true)

  const updateNavState = useCallback(() => {
    if (!ref.current) {
      return
    }
    const { scrollLeft, scrollWidth, clientWidth } = ref.current
    setHasPrev(scrollLeft > 0)
    setHasNext(scrollLeft < scrollWidth - clientWidth - 1)
  }, [])

  const scrollPrev = useCallback(() => {
    ref.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
  }, [scrollAmount])

  const scrollNext = useCallback(() => {
    ref.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }, [scrollAmount])

  return {
    ref,
    hasPrev,
    hasNext,
    scrollPrev,
    scrollNext,
    updateNavState,
  }
}
