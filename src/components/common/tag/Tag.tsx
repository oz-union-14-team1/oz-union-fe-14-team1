import { cn } from '@/utils/cn'

type TagProps = {
  label: string
  isSelected?: boolean
  onClick?: () => void
  className?: string
} & React.ComponentProps<'button'>

const tagBaseStyle = [
  'px-5 py-2.5 md:px-6 md:py-3',
  'text-xsmall md:text-sm',
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
