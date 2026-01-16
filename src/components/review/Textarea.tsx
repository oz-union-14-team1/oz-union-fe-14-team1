'use client'

import * as React from 'react'

import Button from '@/components/common/button/Button'
import { cn } from '@/utils'

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(true)

  const onCancel = () => {
    setIsOpen(false)
  }

  const onSubmit = () => {
    console.log('실행')
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className="rounded-lg border bg-text-dark p-3 focus-within:ring-1 focus-within:ring-purple-500">
      <textarea
        ref={ref}
        {...props}
        className={cn(
          'min-h-[120px] w-full resize-none bg-transparent text-xl text-white placeholder-gray-500 outline-none',
          className
        )}
      />

      <div className="mt-2 flex justify-end gap-2">
        <Button onClick={onSubmit}>등록</Button>
        <Button variant="outline" onClick={onCancel}>
          취소
        </Button>
      </div>
    </div>
  )
})

Textarea.displayName = 'Textarea'
