import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'

import { cn } from '@/utils/cn'

const ButtonVariant = cva(
  cn(
    'font-bold rounded-default px-5 py-2.5 text-text-dark transition-colors',
    'disabled:text-gray-200'
  ),
  {
    variants: {
      variant: {
        main: cn(
          'text-text-light bg-btn-main-default',
          'hover:bg-btn-main-hover',
          'active:bg-btn-main-active',
          'disabled:bg-btn-main-disabled'
        ),
        sub: cn(
          'bg-btn-sub-default',
          'hover:bg-btn-sub-hover',
          'active:bg-btn-sub-active',
          'disabled:bg-btn-sub-disabled'
        ),
        outline: cn(
          'bg-white border border-btn-outline-stroke',
          'hover:bg-btn-outline-hover-fill',
          'active:bg-btn-outline-active-fill',
          'disabled:border-btn-outline-disabled-stroke disabled:bg-white'
        ),
        gray: cn(
          'bg-btn-gray-default',
          'hover:bg-btn-gray-hover',
          'active:bg-btn-gray-active',
          'disabled:bg-btn-gray-disabled'
        ),
      },
      size: {
        sm: 'px-2.5 py-2 text-sm',
        md: 'text-base',
        big: 'text-xl',
      },
    },
    defaultVariants: {
      variant: 'main',
      size: 'md',
    },
  }
)

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof ButtonVariant>

const Button = ({
  variant,
  size,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        ButtonVariant({ variant, size }),
        className // 외부에서 주는 추가 클래스
      )}
    >
      {children}
    </button>
  )
}

export default Button
