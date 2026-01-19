'use client'

import { useEffect, useState } from 'react'

interface WindowSize {
  windowWidth: number
  windowHeight: number
}

export default function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    windowWidth: 0,
    windowHeight: 0,
  })

  useEffect(() => {
    // 초기 사이즈 설정
    const handleResize = () => {
      setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      })
    }

    // 마운트 시 초기 사이즈 설정
    handleResize()

    // resize 이벤트 리스너 등록
    window.addEventListener('resize', handleResize)

    // cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}
