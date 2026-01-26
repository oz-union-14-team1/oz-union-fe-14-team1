import { BaseInput, Button } from '@/components'
import { cn } from '@/utils'

import { INPUT_CLASS } from './SignupForm'

/**
 * 핸드폰 번호 및 인증번호 필드 컴포넌트 속성
 */
type Props = {
  phone: string
  code: string
  onPhoneChange: (v: string) => void
  onCodeChange: (v: string) => void
  isCodeSent: boolean
  isCodeVerified: boolean
  remainingTime: number
  formatTime: (n: number) => string
  handleSendCode: () => void
  handleVerifyCode: () => void
  idValue: 'signup' | 'findId' | 'findPassword' | 'userInfoUpdate'
}

export const VERIFY_BUTTON_CLASS =
  'absolute top-1/2 right-2 -translate-y-1/2 rounded-full text-center text-xs shadow-tag-inactive md:static md:h-10 md:w-full md:translate-y-0 md:rounded-default md:text-sm'

/**
 * 핸드폰 번호 및 인증번호 필드
 * @param phone - 휴대폰번호
 * @param code - 인증번호
 * @param onPhoneChange - 휴대폰번호 입력 변경 핸들러
 * @param onCodeChange - 인증번호 입력 변경 핸들러
 * @param isCodeSent - 인증번호 전송 여부
 * @param isCodeVerified - 인증번호 인증 완료 여부
 * @param remainingTime - 남은 인증 시간(초)
 * @param formatTime - 남은 시간을 표시 문자열로 변환하는 함수
 * @param handleSendCode - 인증번호 전송 핸들러
 * @param handleVerifyCode - 인증번호 확인 핸들러
 * @returns 휴대폰 인증 UI
 */
export default function PhoneVerificationField({
  phone,
  code,
  onPhoneChange,
  onCodeChange,
  isCodeSent,
  isCodeVerified,
  remainingTime,
  formatTime,
  handleSendCode,
  handleVerifyCode,
  idValue,
}: Props) {
  return (
    <>
      <div className="flex flex-col gap-1">
        <p className="text-xs md:text-sm">
          휴대폰 번호<span className="pl-2 text-red-400/80">*</span>
        </p>
        <div className="relative md:flex md:gap-2">
          <BaseInput
            id={cn(idValue, '-phone')}
            type="tel"
            value={phone}
            placeholder="휴대폰 번호(숫자)를 입력해주세요."
            onChange={(e) => onPhoneChange(e.target.value)}
            disabled={isCodeSent || isCodeVerified}
            className={cn(
              'w-85 pr-26 md:w-90 md:pr-3',
              INPUT_CLASS,
              isCodeSent && 'cursor-not-allowed'
            )}
          />
          <Button
            type="button"
            size="sm"
            onClick={handleSendCode}
            disabled={isCodeSent || isCodeVerified}
            className={cn(
              VERIFY_BUTTON_CLASS,
              isCodeSent || isCodeVerified
                ? 'cursor-not-allowed bg-btn-gray-disabled opacity-60'
                : 'cursor-pointer bg-neutral-100/10 hover:bg-main-purple'
            )}
          >
            {isCodeVerified ? '인증번호 완료' : '인증번호 전송'}
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm">
          인증번호<span className="pl-2 text-red-400/80">*</span>
        </p>
        <div className="relative md:flex md:gap-2">
          <BaseInput
            id={cn(idValue, '-phone-code')}
            type="text"
            value={code}
            placeholder="인증번호를 입력해 주세요."
            onChange={(e) => onCodeChange(e.target.value)}
            disabled={!isCodeSent || isCodeVerified}
            className={cn(
              'w-85 pr-26 md:w-90 md:pr-3',
              INPUT_CLASS,
              !isCodeSent && 'cursor-not-allowed'
            )}
          />
          <Button
            type="button"
            size="sm"
            onClick={handleVerifyCode}
            disabled={!isCodeSent || isCodeVerified}
            className={cn(
              VERIFY_BUTTON_CLASS,
              isCodeSent
                ? 'cursor-pointer bg-neutral-100/10 hover:bg-main-purple'
                : 'cursor-not-allowed bg-btn-gray-disabled opacity-60'
            )}
          >
            {isCodeVerified ? '인증번호 완료' : '인증번호 확인'}
          </Button>
        </div>
        {isCodeSent && (
          <p className="text-xs text-red-400 md:text-sm">
            {formatTime(remainingTime)}
          </p>
        )}
      </div>
    </>
  )
}
