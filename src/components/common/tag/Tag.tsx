import { cn } from '@/utils'

type TagProps = {
  label: string
  isSelected?: boolean
  onClick?: () => void
  className?: string
} & React.ComponentProps<'button'>

const tagBaseStyle = [
  'px-4 py-2',
  'md:px-5 md:py-2.5',
  'lg:px-6 lg:py-3',
  'text-xs md:text-base',
  'rounded-full font-normal',
  'whitespace-nowrap transition-all',
]

const tagInactiveStyle = [
  'bg-surface-muted hover:bg-surface-hover',
  'text-text-light',
  'border border-transparent',
  'shadow-tag-inactive',
]

const tagActiveStyle = [
  'bg-gradient-main',
  'text-white font-normal',
  'border border-purple-500/60',
  'shadow-active',
  'text-shadow-crisp',
]

export default function Tag({
  label,
  isSelected = false,
  className,
  ...props
}: TagProps) {
  return (
    <button
      {...props}
      className={cn(
        tagBaseStyle,
        isSelected ? tagActiveStyle : tagInactiveStyle,
        className
      )}
    >
      {label}
    </button>
  )
}
