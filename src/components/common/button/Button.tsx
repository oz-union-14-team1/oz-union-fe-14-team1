import { ComponentProps } from 'react'
import { cn } from '@/utils/cn'

type ButtonProps = ComponentProps<'button'> & {
  label: string
  variant?: 'main' | 'sub'
}

const BUTTON_VARIANTS = {
  main: 'bg-[var(--color-btn-main-default)] hover:bg-[var(--color-btn-main-hover)] active:bg-[var(--color-btn-main-active)] disabled:bg-[var(--color-btn-main-disabled)] text-white',
  sub: 'bg-[var(--color-btn-sub-default)] hover:bg-[var(--color-btn-sub-hover)] active:bg-[var(--color-btn-sub-active)] disabled:bg-[var(--color-btn-sub-disabled)] text-black',
  outline:
    'border border-[var(--color-btn-outline-stroke)] bg-transparent hover:bg-[var(--color-btn-outline-hover-fill)] active:bg-[var(--color-btn-outline-active-fill)] disabled:border-[var(--color-btn-outline-disabled-stroke)]',
  gray: 'bg-[var(--color-btn-gray-default)] hover:bg-[var(--color-btn-gray-hover)] active:bg-[var(--color-btn-gray-active)] disabled:bg-[var(--color-btn-gray-disabled)] text-black',
}

const CustomButton = ({
  variant = 'main',
  label = '버튼',
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
<<<<<<< HEAD
        'flex h-[2.4375rem] w-[4.375rem] items-center justify-center rounded-md font-medium transition-all',
=======
        'flex h-10 w-17.5 items-center justify-center rounded-md font-medium transition-all',
>>>>>>> 803ea82 (feat: 버튼컴포넌트 수정 (#20))
        BUTTON_VARIANTS[variant], // 선택된 variant 스타일 적용
        className // 외부에서 주는 추가 클래스
      )}
    >
      {label}
    </button>
  )
}

export default CustomButton
