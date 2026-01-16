import { cn } from '@/utils'

interface FilterItemProps {
  item: string
  isSelected: boolean
  onToggleFilter: (item: string) => void
}

export default function FilterItemUi({
  item,
  isSelected,
  onToggleFilter,
}: FilterItemProps) {
  return (
    <button
      key={item}
      type="button"
      onClick={() => onToggleFilter(item)}
      className={cn(
        'group relative overflow-hidden rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-300',
        'border backdrop-blur-md sm:px-4 sm:py-2 sm:text-sm',
        isSelected
          ? 'scale-105 border-white/20 bg-gradient-to-r from-main-purple via-main-violet to-main-fuchsia text-text-light shadow-[0_0_20px_rgba(168,85,247,0.4)] shadow-main-purple/40'
          : 'border-white/10 bg-white/5 text-text-light/80 shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:scale-105 hover:border-white/20 hover:bg-white/10 hover:text-text-light hover:shadow-[0_4px_12px_rgba(168,85,247,0.2)]'
      )}
    >
      <span className="relative z-10">{item}</span>
      {/* 반짝이는 효과 */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {!isSelected && (
        <div className="absolute inset-0 bg-gradient-to-r from-main-purple via-main-violet to-main-fuchsia opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
      )}
      {isSelected && (
        <>
          {/* 선택된 버튼의 반짝임 */}
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-white/10 via-white/5 to-transparent opacity-50" />
          <div className="absolute -inset-1 -z-10 animate-pulse rounded-full bg-gradient-to-r from-main-purple via-main-violet to-main-fuchsia opacity-20 blur-md" />
        </>
      )}
    </button>
  )
}
