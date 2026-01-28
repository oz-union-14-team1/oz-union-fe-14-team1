import { BG_POSITION_MAP } from '@/constants'
import { cn } from '@/utils'

type GenreHeaderProps = {
  name: string
  description: string
  backgroundImgUrl: string
  bgPosition?: 'top' | 'center' | 'bottom'
}

export default function GenreHeader({
  name,
  description,
  backgroundImgUrl,
  bgPosition = 'center',
}: GenreHeaderProps) {
  return (
    <div
      className={cn(
        'opa relative h-64 bg-cover opacity-80 md:h-96',
        BG_POSITION_MAP[bgPosition]
      )}
      style={{ backgroundImage: `url(${backgroundImgUrl})` }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/30 to-background" />

      <div className="relative z-10 flex h-full flex-col justify-center px-8">
        <div className="w-full max-w-345 px-4 md:mx-auto">
          <h1 className="text-2xl font-bold text-text-light md:text-4xl">
            {name}
          </h1>
          <p className="text-md text-text-light md:mt-2 md:text-xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
