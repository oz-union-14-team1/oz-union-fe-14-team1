import { cn } from '../../../utils/cn'

import { inputVariant, type InputVariant } from './inputStyle'

export type BaseInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
> &
  InputVariant & {
    label?: string
    searchIcon?: React.ReactNode
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    onSearchIconClick?: () => void
  }

/**
 * 베이스 인풋 컴포넌트
 */
export default function BaseInput({
  size = 'signUp',
  color = 'lightGray',
  label,
  value,
  onChange,
  searchIcon,
  onSearchIconClick,
  className,
  ...props
}: BaseInputProps) {
  return (
    <div className="relative w-fit">
      {label && (
        <p>
          <label className="text-sm font-medium text-(--color-text-dark)">
            {label}
          </label>
        </p>
      )}

      <input
        value={value}
        onChange={onChange}
        className={cn(
          inputVariant({
            size,
            color,
          }),
          className
        )}
        {...props}
      />
      {searchIcon && (
        <button
          aria-label="검색"
          onClick={onSearchIconClick}
          className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onSearchIconClick?.()
            }
          }}
        >
          {searchIcon}
        </button>
      )}
    </div>
  )
}
