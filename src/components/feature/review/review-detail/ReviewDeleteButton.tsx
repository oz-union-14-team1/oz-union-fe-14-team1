'use client'

import { ComponentProps, MouseEventHandler } from 'react'

import useDeleteReveiw from '@/api/queries/useDeleteReview'
import { Button } from '@/components/common'

interface ReviewDeleteButtonProps extends ComponentProps<typeof Button> {
  gameId: string | number
  reviewId: string | number
  isAuthor: boolean
}

export default function ReviewDeleteButton({
  gameId,
  reviewId,
  className,
  isAuthor,
  ...props
}: ReviewDeleteButtonProps) {
  const { mutate: deleteReview, isPending: isDeleteReviewPending } =
    useDeleteReveiw(gameId)

  const handleReviewDeleteButtonClick: MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    e.preventDefault()
    deleteReview({ reviewId })
  }

  return (
    <Button
      variant={'gray'}
      size="sm"
      onClick={handleReviewDeleteButtonClick}
      disabled={!isAuthor || isDeleteReviewPending}
      className={className}
      {...props}
    >
      삭제
    </Button>
  )
}
