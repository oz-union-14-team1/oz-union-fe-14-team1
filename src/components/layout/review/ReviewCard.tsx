import { ComponentProps } from 'react'

import { cn } from '@/utils'

function Card({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'text-color-light flex flex-col rounded-lg border-white/5 bg-surface-elevated shadow-sm',
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn('flex items-center justify-between p-6 pb-0', className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div className={cn('text-color-light p-6 pt-2', className)} {...props} />
  )
}

function CardFooter({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div className={cn('flex justify-end p-6 pt-0', className)} {...props} />
  )
}

Card.Header = CardHeader
Card.Content = CardContent
Card.Footer = CardFooter

export { Card }
