import { useCallback, useRef, useState } from 'react'

type UseCarouselOptions = {
  scrollAmount?: number
  usePageScroll?: boolean
}

export default function useCarousel({
  scrollAmount = 300,
  usePageScroll = false,
}: UseCarouselOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [hasPrev, setHasPrev] = useState(false)
  const [hasNext, setHasNext] = useState(true)
  const [currentPage, setCurrentPage] = useState(0)

  const updateNavState = useCallback(() => {
    if (!ref.current) {
      return
    }
    const { scrollLeft, scrollWidth, clientWidth } = ref.current
    setHasPrev(scrollLeft > 0)
    setHasNext(scrollLeft < scrollWidth - clientWidth - 1)

    if (usePageScroll) {
      const newPage = Math.round(scrollLeft / clientWidth)
      setCurrentPage(newPage)
    }
  }, [usePageScroll])

  const scrollPrev = useCallback(() => {
    if (!ref.current) {
      return
    }

    const amount = usePageScroll ? ref.current.clientWidth : scrollAmount
    ref.current.scrollBy({ left: -amount, behavior: 'smooth' })
  }, [scrollAmount, usePageScroll])

  const scrollNext = useCallback(() => {
    if (!ref.current) {
      return
    }

    const amount = usePageScroll ? ref.current.clientWidth : scrollAmount
    ref.current.scrollBy({ left: amount, behavior: 'smooth' })
  }, [scrollAmount, usePageScroll])

  const scrollToPage = useCallback((page: number) => {
    if (!ref.current) {
      return
    }

    const scrollLeft = page * ref.current.clientWidth
    ref.current.scrollTo({ left: scrollLeft, behavior: 'smooth' })
  }, [])

  return {
    ref,
    hasPrev,
    hasNext,
    currentPage,
    scrollPrev,
    scrollNext,
    scrollToPage,
    updateNavState,
  }
}
