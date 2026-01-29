import Image from 'next/image'
import { ComponentProps } from 'react'

type ImageCardHeaderProps = Omit<
  ComponentProps<typeof Image>,
  'src' | 'alt'
> & {
  imgUrl: string
  name: string
}

export default function ImageCardHeader({
  name,
  id,
  imgUrl,
  ...props
}: ImageCardHeaderProps) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-bold text-white">{name}</h3>
      <div className="relative h-121 w-200 overflow-hidden rounded-[20px] border-[3px] shadow-2xl">
        <Image
          src={imgUrl}
          alt={name}
          id={id}
          fill
          className="object-cover"
          {...props}
        />
      </div>
    </div>
  )
}

const ImageCard = ImageCardHeader
export { ImageCard }
