type FormFieldProps = {
  label: string
  required?: boolean
  password?: boolean
  children: React.ReactNode
}

/**
 * 중복 폼 필드
 * @param label - 필드 라벨
 * @param required - 필수 여부
 * @param password - 비밀번호 필드 여부
 * @param children - 입력 컴포넌트
 * @returns 폼 필드 UI
 */
export default function FormField({
  label,
  required = true,
  password = false,
  children,
}: FormFieldProps) {
  return (
    <div className="flex w-full flex-col gap-1">
      <div className="flex items-end gap-4">
        <span className="text-xs md:text-sm">
          {label}
          {required && <span className="pl-2 text-red-400/90">*</span>}
        </span>
        {password && (
          <span className="text-xs text-red-400/90 md:text-sm">
            8~20자의 영문 대소문자, 숫자, 특수문자 포함
          </span>
        )}
      </div>
      {children}
    </div>
  )
}
