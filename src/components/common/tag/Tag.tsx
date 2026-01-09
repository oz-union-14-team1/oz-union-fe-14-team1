import { cn } from '@/utils/cn'
import './TagStyle.css'

type TagProps = {
  label: string
  isSelected?: boolean
  onClick?: () => void
  className?: string
}

export default function Tag({
  label,
  isSelected = false,
  onClick,
  className,
}: TagProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-5 py-2.5 md:px-6 md:py-3',
        'text-xsmall rounded-full font-normal transition-all md:text-sm',
        'whitespace-nowrap',
        isSelected ? 'tag-active' : 'tag-inactive',
        className
      )}
    >
      {label}
    </button>
  )
}
