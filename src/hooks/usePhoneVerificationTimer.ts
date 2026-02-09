'use client'

import { useCallback, useEffect, useState } from 'react'

/**
 * 휴대폰 인증 타이머 훅 속성
 * @property onExpire - 인증 만료 시 실행되는 콜백
 * @property duration - 타이머 지속 시간(초)
 * @property onVerified - 인증 성공 시 실행되는 콜백
 */
type UsePhoneVerificationTimerProps = {
  onExpire?: () => void
  duration?: number
  onVerified?: () => void
}

/**
 * 인증 타이머 훅
 * @param onExpire - 인증 만료 시 실행되는 콜백
 * @param duration - 타이머 지속 시간(초)
 * @returns 타이머 상태와 제어 함수
 */
export default function usePhoneVerificationTimer({
  onExpire,
  duration = 180,
  onVerified,
}: UsePhoneVerificationTimerProps) {
  const [isCodeSent, setIsCodeSent] = useState(false)
  const [isCodeVerified, setIsCodeVerified] = useState(false)
  const [remainingTime, setRemainingTime] = useState(0)

  const reset = () => {
    setIsCodeSent(false)
    setIsCodeVerified(false)
    setRemainingTime(0)
  }

  const handleSendCode = useCallback(() => {
    setIsCodeSent(true)
    setIsCodeVerified(false)
    setRemainingTime(duration)
  }, [duration])

  const handleVerifyCode = useCallback(() => {
    if (!isCodeSent) {
      return
    }
    setIsCodeVerified(true)
    setIsCodeSent(false)
    setRemainingTime(0)

    onVerified?.()
  }, [isCodeSent, onVerified])

  const handleExpire = useCallback(() => {
    setIsCodeSent(false)
    setIsCodeVerified(false)
    onExpire?.()
  }, [onExpire])

  /**
   * 타이머 카운트다운 효과
   */
  useEffect(() => {
    if (!isCodeSent) {
      return
    }

    const timer = setInterval(() => {
      setRemainingTime((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [isCodeSent])

  /**
   * 타이머 만료 처리 효과
   */
  useEffect(() => {
    if (remainingTime === 0 && isCodeSent) {
      const id = setTimeout(() => {
        handleExpire()
      }, 0)

      return () => clearTimeout(id)
    }
  }, [remainingTime, isCodeSent, handleExpire])

  const formatTime = (sec: number) => {
    const m = String(Math.floor(sec / 60)).padStart(2, '0')
    const s = String(sec % 60).padStart(2, '0')
    return `${m}:${s}`
  }

  return {
    isCodeSent,
    isCodeVerified,
    remainingTime,
    handleSendCode,
    handleVerifyCode,
    formatTime,
    reset,
  }
}
