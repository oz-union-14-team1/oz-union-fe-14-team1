import type { VariantProps } from 'class-variance-authority'
import { cn } from '@/utils'
import { badgeVariants } from './badgeStyle'
import { ComponentPropsWithoutRef, ReactNode } from 'react'

type BadgeProps = ComponentPropsWithoutRef<'span'> &
  VariantProps<typeof badgeVariants> & {
    children: ReactNode
  }

/**
 * 상태 컴포넌트
 * @param variant - 뱃지 스타일
 * @param children - 뱃지 내용
 */
export default function Badge({
  className,
  variant,
  children,
  ...props
}: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
    </span>
  )
}
