'use client'

import {
  Dispatch,
  FormEventHandler,
  SetStateAction,
  TextareaHTMLAttributes,
  useState,
} from 'react'

import usePostReview from '@/api/queries/usePostReview'
import Button from '@/components/common/button/Button'
import { cn } from '@/utils'

import { Star } from './Star'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  gameId: string | number
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const Textarea = ({
  className,
  gameId,
  isOpen,
  setIsOpen,
  ...props
}: TextareaProps) => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(0)

  const { mutate: postReview, isPending } = usePostReview()

  const onCancel = () => setIsOpen(false)
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    postReview({ content: text, rating, gameId: String(gameId) })
  }

  if (!isOpen) {
    return null
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full rounded-2xl bg-surface-elevated px-8 py-10"
    >
      <div className="flex flex-row items-end justify-between pb-3">
        <h2 className="pb-5 text-2xl font-bold text-white">리뷰 작성하기</h2>
        <div className="flex flex-col items-end gap-1">
          <span className="text-sm text-gray-400">평점을 선택하세요</span>
          <Star value={rating} onChange={(val) => setRating(val)} />
        </div>
      </div>

      <div className="rounded-2xl bg-text-dark p-2">
        <textarea
          {...props}
          value={text}
          placeholder="이 게임에 대한 당신의 생각을 공유해주세요"
          onChange={(e) => setText(e.target.value)}
          className={cn('min-h-24 w-full resize-y', className)}
        />
      </div>

      <div className="mt-6 flex w-full justify-end gap-3">
        <Button
          variant="gray"
          onClick={onCancel}
          type="button"
          disabled={isPending}
          className="cursor-pointer"
        >
          취소
        </Button>
        <Button type="submit" disabled={isPending} className="cursor-pointer">
          리뷰 등록
        </Button>
      </div>
    </form>
  )
}

Textarea.displayName = 'Textarea'
