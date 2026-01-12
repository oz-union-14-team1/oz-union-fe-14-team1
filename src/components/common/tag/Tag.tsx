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
  'bg-[#2b2b2b] hover:bg-[#3b3b3b]',
  'text-[var(--color-text-light)]',
  'border border-transparent',
  'shadow-[var(--shadow-tag-inactive)]',
]

const tagActiveStyle = [
  'bg-[var(--gradient-main)]',
  'text-white font-normal',
  'border border-purple-500/60',
  'shadow-[var(--shadow-tag-active)]',
  '[text-shadow:0_0_0.5px_currentColor,0_0_0.5px_currentColor]',
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
