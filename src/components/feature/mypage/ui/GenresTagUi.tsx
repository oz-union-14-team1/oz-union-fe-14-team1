import { cn } from '@/utils'

interface GenresTagUiProps {
  genre: string
  variant?: 'main' | 'sub'
  className?: string
}

export default function GenresTagUi({
  genre,
  variant,
  className,
}: GenresTagUiProps) {
  return (
    <h1
      className={cn(
        'group/tag relative overflow-hidden rounded-full px-5 py-2 text-base font-semibold',
        'whitespace-nowrap', // absolute 제거!
        'border border-white/10 text-text-light backdrop-blur-md',
        'transition-all duration-300',
        variant === 'main'
          ? 'bg-gradient-to-r from-main-purple/20 via-main-violet/20 to-main-fuchsia/20 hover:from-main-purple/40 hover:via-main-violet/40 hover:to-main-fuchsia/40'
          : 'bg-gradient-to-r from-sub-cyan/20 to-sub-indigo/20 hover:from-sub-cyan/40 hover:to-sub-indigo/40',
        className
      )}
    >
      # {genre.toUpperCase()}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/tag:opacity-100" />
    </h1>
  )
}
