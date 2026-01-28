'use client'

import { useState } from 'react'

import { Button } from '@/components/common'

interface ReveiwDetailCommentAreaProps {
  reviewId: number
}

export default function ReveiwDetailCommentArea({}: ReveiwDetailCommentAreaProps) {
  const [isCommentAreaOpen, setIsCommentAreaOpen] = useState(false)

  return isCommentAreaOpen ? (
    <>
      <hr className="w-full bg-white" />
      <textarea className="w-full rounded bg-neutral-700 p-2 focus:outline-none" />
      <div className="flex w-full items-center justify-end gap-2">
        <Button
          variant={'main'}
          onClick={() => {
            setIsCommentAreaOpen(false)
          }}
          size={'sm'}
          className="px-4"
        >
          완료
        </Button>
        <Button
          variant={'outline'}
          onClick={() => {
            setIsCommentAreaOpen(false)
          }}
          size={'sm'}
          className="px-4"
        >
          취소
        </Button>
      </div>
    </>
  ) : (
    <div className="flex w-full items-center justify-end">
      <Button
        variant={'gray'}
        onClick={() => {
          setIsCommentAreaOpen(true)
        }}
        size={'sm'}
      >
        답글달기
      </Button>
    </div>
  )
}
