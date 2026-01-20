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
  duration = 10 /** TODO:180초 */,
  onVerified,
}: UsePhoneVerificationTimerProps) {
  const [isCodeSent, setIsCodeSent] = useState(false)
  const [isCodeVerified, setIsCodeVerified] = useState(false)
  const [remainingTime, setRemainingTime] = useState(0)

  const handleSendCode = useCallback(() => {
    /**
     * TODO: 휴대폰 번호 인증번호 전송 API 연동
     * TODO: 유효시간 시간 변경 10초 -> 180초
     */
    alert('휴대폰 번호 인증번호 전송')
    setIsCodeSent(true)
    setIsCodeVerified(false)
    setRemainingTime(duration)
  }, [duration])

  const handleVerifyCode = useCallback(() => {
    /**
     * TODO: 휴대폰 번호 인증번호 확인 API 연동
     * TODO: API 통해서 인증번호 확인 됐을 때와 아닐 때 분기
     */
    if (!isCodeSent) {
      return
    }

    setIsCodeVerified(false)
    setIsCodeSent(true)

    /**
     * TODO: 인증 성공 시
     */
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
  }
}
