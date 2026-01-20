import * as AvatarPrimitive from '@radix-ui/react-avatar'
import * as React from 'react'

import { cn } from '@/utils'

type AvatarProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Root
> & {
  src?: string
  alt?: string
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, src, alt, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex h-[50px] w-[50px] shrink-0 overflow-hidden rounded-full bg-neutral-200',
      className
    )}
    {...props}
  >
    <AvatarPrimitive.Image
      src={src}
      alt={alt}
      className="aspect-square h-full w-full object-cover"
    />

    <AvatarPrimitive.Fallback className="flex h-full w-full items-center justify-center rounded-full bg-neutral-300 text-sm">
      {alt?.charAt(0) || 'U'}
    </AvatarPrimitive.Fallback>
  </AvatarPrimitive.Root>
))

Avatar.displayName = 'Avatar'

export { Avatar }
