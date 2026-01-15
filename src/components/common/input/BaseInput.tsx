import { ComponentProps, ReactNode, useId } from 'react'

import { cn } from '@/utils'

import { inputVariant, type InputVariant } from './inputStyle'

export type BaseInputProps = Omit<ComponentProps<'input'>, 'size'> &
  InputVariant & {
    id?: string
    label?: string
    searchIcon?: ReactNode
    onSearchIconClick?: () => void
  }

/**
 * 베이스 인풋 컴포넌트
 */
export default function BaseInput({
  id,
  inputSize = 'signUp',
  color = 'lightGray',
  label,
  searchIcon,
  onSearchIconClick,
  className,
  ...props
}: BaseInputProps) {
  const reactId = useId()
  const inputId = id ?? reactId

  return (
    <div className="relative w-fit">
      {label && (
        <p>
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-text-dark"
          >
            {label}
          </label>
        </p>
      )}
      <input
        id={inputId}
        className={cn(
          inputVariant({
            inputSize,
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
