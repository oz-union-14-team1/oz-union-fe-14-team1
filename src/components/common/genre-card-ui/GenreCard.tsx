import { cn } from '@/utils/cn'
import { Check } from 'lucide-react'
import './GenreCardStyle.css'
import Image from 'next/image'
import { ComponentPropsWithoutRef } from 'react'

type GenreCardProps = {
  name: string
  imgUrl: string
  isSelected?: boolean
} & ComponentPropsWithoutRef<'button'>

export default function GenreCard({
  name,
  imgUrl,
  isSelected = false,
  className,
  ...rest
}: GenreCardProps) {
  return (
    <button
      aria-pressed={isSelected}
      className={cn(
        'rounded-radius-default relative h-40 w-33.75 overflow-hidden',
        'transition-all',
        isSelected ? 'genre-card-selected' : 'genre-card-default',
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
