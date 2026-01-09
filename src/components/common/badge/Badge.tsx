import type { VariantProps } from 'class-variance-authority'
import { cn } from '../../../utils/cn'
import { badgeVariants } from './badgeStyle'

export type BadgeProps = React.ComponentPropsWithoutRef<'span'> &
  VariantProps<typeof badgeVariants> & {
    children: React.ReactNode
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
  ...rest
}: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...rest}>
      {children}
    </span>
  )
}
