import { Check } from 'lucide-react'
import Image from 'next/image'

import { cn } from '@/utils'

type GenreCardProps = {
  name: string
  imgUrl: string
  position?: 'top' | 'center' | 'bottom'
  isSelected?: boolean
} & React.ComponentPropsWithoutRef<'button'>

const baseGenreCardStyle = [
  'rounded-radius-default relative overflow-hidden',
  'h-28 w-24',
  'md:h-36 md:w-30',
  'lg:h-40 lg:w-33.75',
  'transition-all duration-200 ease-out',
  'border border-transparent',
]

const defaultGenreCardStyle = ['hover:scale-[1.02]']

const selectedGenreCardStyle = [
  'bg-violet-500/15',
  'border-violet-500',
  'shadow-[0_4px_24px_rgba(139,92,246,0.5)]',
]

export default function GenreCard({
  name,
  imgUrl,
  position = 'center',
  isSelected = false,
  className,
  ...rest
}: GenreCardProps) {
  return (
    <button
      aria-pressed={isSelected}
      className={cn(
        baseGenreCardStyle,
        isSelected ? selectedGenreCardStyle : defaultGenreCardStyle,
        className
      )}
      {...rest}
    >
      <Image
        src={imgUrl}
        alt={name}
        fill
        sizes="(max-width: 768px) 96px, (max-width: 1024px) 120px, 135px"
        className={cn(
          'object-cover',
          position === 'top' && 'object-top',
          position === 'center' && 'object-center',
          position === 'bottom' && 'object-bottom'
        )}
        quality={85}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
        <span className="text-sm font-bold text-text-light md:text-base">
          {name}
        </span>
      </div>
      {isSelected && (
        <div
          className={cn(
            'absolute top-3 right-3 h-4 w-4 rounded-full bg-main-violet',
            'flex items-center justify-center'
          )}
          aria-hidden="true"
        >
          <Check className="h-3 w-4 text-white" />
        </div>
      )}
    </button>
  )
}
