import { Dispatch, SetStateAction } from 'react'

import { Button } from '@/components/common'

interface ReviewDetailReviewEditFormProps {
  reviewId: number
  defaultValue: string
  setIsEditing: Dispatch<SetStateAction<boolean>>
}

export default function ReviewDetailReviewEditForm({
  defaultValue,
  setIsEditing,
}: ReviewDetailReviewEditFormProps) {
  return (
    <form className="flex w-full flex-col items-start gap-4">
      <textarea
        className="h-40 w-full rounded bg-neutral-700 p-2 focus:outline-none"
        defaultValue={defaultValue}
        placeholder="최대 리뷰 글자 수는 300자입니다."
      />
      <div className="flex w-full items-center justify-end gap-2">
        <Button variant={'main'} type="submit" size={'sm'} className="px-4">
          완료
        </Button>
        <Button
          variant={'outline'}
          onClick={() => {
            setIsEditing(false)
          }}
          size={'sm'}
          type="button"
          className="px-4"
        >
          취소
        </Button>
      </div>
    </form>
  )
}
