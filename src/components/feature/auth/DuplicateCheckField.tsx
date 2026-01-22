import { Check } from 'lucide-react'

import { BaseInput, Button } from '@/components'
import { cn } from '@/utils'

import { VERIFY_BUTTON_CLASS } from './PhoneVerificationField'
import { INPUT_CLASS } from './SignupForm'

type Props = {
  label: string
  value: string
  placeholder: string
  onChange: (v: string) => void
  onCheck: () => void
  isChecked: boolean
  id: string
}

/**
 * 아이디, 닉네임 중복체크 필드
 * @param label - 라벨 텍스트
 * @param value - 입력값
 * @param placeholder - 입력 플레이스홀더
 * @param onChange - 입력값 변경 핸들러
 * @param onCheck - 중복 확인 핸들러
 * @param isChecked - 중복 확인 완료 여부
 * @returns 중복 체크 UI
 */
export function DuplicateCheckField({
  label,
  value,
  placeholder,
  onChange,
  onCheck,
  isChecked,
  id,
}: Props) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm">
        {label}
        <span className="pl-2 text-red-400/90">*</span>
      </p>
      <div className="flex md:items-end">
        <div className="relative md:flex md:gap-2">
          <BaseInput
            id={id}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            className={cn('w-85 md:w-90', INPUT_CLASS)}
          />
          <Button
            type="button"
            variant="purple"
            size="md"
            className={cn('cursor-pointer', VERIFY_BUTTON_CLASS)}
            onClick={onCheck}
          >
            중복 확인
          </Button>
        </div>
      </div>
      {isChecked && (
        <div className="flex text-xs font-bold text-sub-cyan md:text-sm">
          <Check className="h-4 w-4 md:h-5 md:w-5" />
          <span>사용 가능합니다</span>
        </div>
      )}
    </div>
  )
}
