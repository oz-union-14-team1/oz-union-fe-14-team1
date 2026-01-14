import { Check } from 'lucide-react'
import Image from 'next/image'

import { cn } from '@/utils/cn'

type GenreCardProps = {
  name: string
  imgUrl: string
  isSelected?: boolean
} & React.ComponentPropsWithoutRef<'button'>

const baseGenreCardStyle = [
  'rounded-radius-default relative h-40 w-33.75 overflow-hidden',
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
  isSelected = false,
  className,
  ...rest
}: GenreCardProps) {
  return (
    <button
      // aria-pressed={isSelected}
      className={cn(
        baseGenreCardStyle,
        isSelected ? selectedGenreCardStyle : defaultGenreCardStyle,
        className
      )}
      {...rest}
    >
      <Image src={imgUrl} alt={name} fill className="object-cover" />
      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
        <span className="font-bold text-text-light">{name}</span>
      </div>
      {isSelected && (
        <div
          className={cn(
            'absolute top-3 right-3 h-4 w-4 rounded-full bg-main-violet',
            'flex items-center justify-center'
          )}
        >
          <Check className="h-3 w-4 text-white" />
        </div>
      )}
    </button>
  )
}
