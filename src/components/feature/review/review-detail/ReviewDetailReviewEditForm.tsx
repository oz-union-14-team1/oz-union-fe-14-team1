'use client'

import { Dispatch, FormEventHandler, SetStateAction, useState } from 'react'

import usePatchReview from '@/api/queries/usePatchReview'
import { Button } from '@/components/common'
import { useToast } from '@/hooks'

interface ReviewDetailReviewEditFormProps {
  reviewId: number
  defaultContent: string
  defaultRating: number
  setIsEditing: Dispatch<SetStateAction<boolean>>
}

const MAX_CONTENT_LENGTH = 300

export default function ReviewDetailReviewEditForm({
  defaultContent,
  reviewId,
  defaultRating,
  setIsEditing,
}: ReviewDetailReviewEditFormProps) {
  const [content, setContent] = useState(defaultContent)

  const { mutate: patchReview, isPending } = usePatchReview()

  const { triggerToast } = useToast()

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    // 조건이 복잡하지 않아 zod를 사용하지 않았습니다.
    if (setContent.length < 1) {
      triggerToast('error', '리뷰를 1글자 이상 작성해주세요.')
      return
    }

    if (setContent.length > MAX_CONTENT_LENGTH) {
      triggerToast('error', '리뷰를 300글자 이하 작성해주세요.')
      return
    }

    // TODO: 레이팅 수정 로직
    patchReview({ reviewId, rating: defaultRating, content })
    setIsEditing(false)
  }

  return (
    <form
      className="flex w-full flex-col items-start gap-4"
      onSubmit={handleSubmit}
    >
      <textarea
        className="h-40 w-full rounded bg-neutral-700 p-2 focus:outline-none"
        value={content}
        onChange={(e) => {
          setContent(e.target.value)
        }}
        placeholder="최대 리뷰 글자 수는 300자입니다."
      />
      <div className="flex w-full items-center justify-end gap-2">
        <Button
          variant={'main'}
          type="submit"
          size={'sm'}
          className="px-4"
          disabled={isPending}
        >
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
