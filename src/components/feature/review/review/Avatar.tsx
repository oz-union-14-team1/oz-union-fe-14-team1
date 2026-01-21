import * as AvatarPrimitive from '@radix-ui/react-avatar'
import * as React from 'react'

import { cn } from '@/utils'

type AvatarProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Root
> & {
  src?: string
  alt?: string
  name?: string
  date?: string
  ref?: React.Ref<HTMLDivElement>
}

export default function Avatar({
  className,
  src,
  alt,
  ref,
  date,
  name,
  ...props
}: AvatarProps) {
  return (
    <div ref={ref} className="flex items-center gap-3">
      <AvatarPrimitive.Root
        className={cn(
          'inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-100',
          className
        )}
        {...props}
      >
        {src ? (
          <AvatarPrimitive.Image
            className="h-full w-full object-cover"
            src={src}
            alt={alt}
          />
        ) : (
          <AvatarPrimitive.Fallback className="flex h-full w-full items-center justify-center bg-gray-300 text-gray-600">
            <span className="text-xl font-medium">
              {alt ? alt.charAt(0).toUpperCase() : '?'}
            </span>
          </AvatarPrimitive.Fallback>
        )}
      </AvatarPrimitive.Root>
      <div className="flex flex-col">
        <span className="text-[14px] font-bold text-[#9DA2A7]">{name}</span>
        <span className="text-[14px] text-white">{date}</span>
      </div>
    </div>
  )
}

Avatar.displayName = 'Avatar'
