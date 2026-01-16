type FormFieldProps = {
  label: string
  required?: boolean
  password?: boolean
  children: React.ReactNode
}

export function FormField({
  label,
  required,
  password = false,
  children,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      {password ? (
        <div className="flex items-end gap-4">
          <span className="text-sm">
            {label}
            {required && <span className="pl-2 text-red-500">*</span>}
          </span>
          <span className="text-xs text-red-500">
            8~20자의 영문 대소문자, 숫자, 특수문자 포함
          </span>
        </div>
      ) : (
        <p className="text-sm">
          {label}
          {required && <span className="pl-2 text-red-500">*</span>}
        </p>
      )}
      {children}
    </div>
  )
}
