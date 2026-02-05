import * as AvatarPrimitive from '@radix-ui/react-avatar'
import * as React from 'react'

import { ReviewAuthor } from '@/types/api-response/review-response'
import { cn } from '@/utils'

type AvatarProps = {
  avatar?: ReviewAuthor
  className?: string
}

export default function Avatar({ avatar, className }: AvatarProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <AvatarPrimitive.Root
        className={cn(
          'inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-100'
        )}
      >
        {avatar?.profileImgUrl ? (
          <AvatarPrimitive.Image
            className="h-full w-full object-cover"
            src={avatar.profileImgUrl}
            alt={avatar.nickname}
          />
        ) : (
          <AvatarPrimitive.Fallback className="flex h-full w-full items-center justify-center bg-gray-300 text-gray-600">
            <span className="text-xl font-medium">
              {avatar?.nickname.slice(0, 1)}
            </span>
          </AvatarPrimitive.Fallback>
        )}
      </AvatarPrimitive.Root>
    </div>
  )
}
