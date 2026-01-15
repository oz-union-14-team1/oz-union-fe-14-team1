import * as React from 'react'

import Button from '@/components/common/button/Button'
import { cn } from '@/utils'

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <div className="rounded-lg border bg-text-dark p-3 focus-within:ring-1 focus-within:ring-purple-500">
      <textarea
        ref={ref}
        className={cn(
          'min-h-45 w-full resize-none bg-transparent text-sm text-white placeholder-gray-500 outline-none',
          className
        )}
        {...props}
      />

      {/* 하단 버튼 영역 */}
      <div className="mt-2 flex justify-end gap-2">
        <Button />
        <Button variant="outline" />
      </div>
    </div>
  )
})

Textarea.displayName = 'Textarea'
