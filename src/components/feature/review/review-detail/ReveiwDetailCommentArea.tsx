'use client'

import { FormEventHandler, useState } from 'react'

import { useGetUserMe } from '@/api/queries/useGetUserMe'
import usePostReviewComment from '@/api/queries/usePostReviewComment'
import { Button } from '@/components/common'
import { useToast } from '@/hooks'

const MAX_COMMENT_LENGTH = 150

interface ReveiwDetailCommentAreaProps {
  reviewId: number
}

export default function ReveiwDetailCommentArea({
  reviewId,
}: ReveiwDetailCommentAreaProps) {
  const [isCommentAreaOpen, setIsCommentAreaOpen] = useState(false)
  const [comment, setComment] = useState('')

  const { data: userData } = useGetUserMe()
  const { triggerToast } = useToast()

  const { mutate: postComment, isPending } = usePostReviewComment()

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    // 조건이 복잡하지 않아 zod를 사용하지 않았습니다.
    if (comment.length < 1) {
      triggerToast('error', '댓글을 1글자 이상 작성해주세요.')
      return
    }

    if (comment.length > MAX_COMMENT_LENGTH) {
      triggerToast('error', '댓글을 150글자 이하 작성해주세요.')
      return
    }

    postComment({ reviewId, content: comment })
    setIsCommentAreaOpen(false)
  }

  return isCommentAreaOpen ? (
    <>
      <hr className="w-full bg-white" />
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col items-start gap-4"
      >
        <textarea
          className="w-full rounded bg-neutral-700 p-2 focus:outline-none"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value)
          }}
          placeholder="최대 댓글 글자 수는 150자입니다."
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
              setIsCommentAreaOpen(false)
            }}
            size={'sm'}
            type="button"
            className="px-4"
          >
            취소
          </Button>
        </div>
      </form>
    </>
  ) : (
    <div className="flex w-full items-center justify-end">
      <Button
        variant={'gray'}
        onClick={() => {
          if (userData) {
            setIsCommentAreaOpen(true)
          } else {
            triggerToast('warning', '로그인 후 댓글을 작성할 수 있습니다.')
          }
        }}
        size={'sm'}
      >
        댓글달기
      </Button>
    </div>
  )
}
