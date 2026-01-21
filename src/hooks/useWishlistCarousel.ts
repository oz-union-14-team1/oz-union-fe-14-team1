import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'

export function useWishlistCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    dragFree: true,
  })

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev()
    }
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()
    }
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) {
      return
    }
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) {
      return
    }

    const handleSelect = () => {
      onSelect()
    }

    handleSelect()
    emblaApi.on('select', handleSelect)
    emblaApi.on('reInit', handleSelect)

    return () => {
      emblaApi.off('select', handleSelect)
      emblaApi.off('reInit', handleSelect)
    }
  }, [emblaApi, onSelect])

  return {
    emblaRef,
    canScrollPrev,
    canScrollNext,
    scrollPrev,
    scrollNext,
  }
}
