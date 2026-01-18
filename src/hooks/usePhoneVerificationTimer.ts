'use client'

import { useEffect, useState } from 'react'

type UsePhoneVerificationTimerProps = {
  onExpire?: () => void
  duration?: number
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
}: UsePhoneVerificationTimerProps) {
  const [isCodeSent, setIsCodeSent] = useState(false)
  const [isCodeVerified, setIsCodeVerified] = useState(false)
  const [remainingTime, setRemainingTime] = useState(0)

  const handleSendCode = () => {
    /**
     * TODO: 휴대폰 번호 인증번호 전송 API 연동
     * TODO: 유효시간 시간 변경 10초 -> 180초
     */
    alert('휴대폰 번호 인증번호 전송')
    setIsCodeSent(true)
    setIsCodeVerified(false)
    setRemainingTime(duration)
  }

  const handleVerifyCode = () => {
    /**
     * TODO: 휴대폰 번호 인증번호 확인 API 연동
     * TODO: API 통해서 인증번호 확인 됐을 때와 아닐 때 분기
     */
    if (!isCodeSent) {
      return
    }

    setIsCodeVerified(true)
    setIsCodeSent(false)
    setRemainingTime(0)
  }

  useEffect(() => {
    if (!isCodeSent) {
      return
    }

    const timer = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          setIsCodeSent(false)
          setIsCodeVerified(false)
          onExpire?.()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isCodeSent, onExpire])

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
