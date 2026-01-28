'use client'

import * as React from 'react'

import Button from '@/components/common/button/Button'
import { cn } from '@/utils'

import { Star } from './Star'

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {}

export const Textarea = ({ className, ...props }: TextareaProps) => {
  const [isOpen, setIsOpen] = React.useState(true)
  const [text, setText] = React.useState('')

  const [rating, setRating] = React.useState(0)

  const onCancel = () => setIsOpen(false)
  const onSubmit = () => console.log('제출된 내용:', text)
  if (!isOpen) {
    return null
  }

  // 리뷰카드 안에 texxarea, Star 컴포넌트
  return (
    <div className="bounded-5x1 h-100 w-200 border-gray-800 bg-[#121212] px-8 py-10 shadow-2xl">
      <div className="flex items-end justify-between pb-5">
        <h2 className="pb-5 text-2xl font-bold text-white">리뷰 작성하기</h2>
        <div className="flex flex-col items-end gap-1">
          <span className="text-[12px] text-gray-400">평점을 선택하세요</span>
          {/* Star 컴포넌트 클릭했을때 별이 저장되게 변경 */}
          <Star value={rating} onChange={(val) => setRating(val)} />
        </div>
      </div>

      <div className="rounded-[14px] border border-gray-700 bg-[#1e1e1e] p-4 focus-within:border-gray-500">
        <textarea
          {...props}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={cn(
            'h-24 w-full resize-none bg-transparent text-[16px] text-white placeholder-gray-500 outline-none',
            className
          )}
        />
      </div>

      {/* 버튼 */}
      <div className="mt-6 flex w-full justify-end gap-3">
        <Button
          variant="outline"
          onClick={onCancel}
          className="bg- rounded-xl px-6 text-white hover:bg-surface-hover"
        >
          취소
        </Button>
        <Button
          onClick={onSubmit}
          className="rounded-xl bg-[#333333] px-6 text-gray-400 hover:bg-[#444444] hover:text-white"
        >
          리뷰 등록
        </Button>
      </div>
    </div>
  )
}

Textarea.displayName = 'Textarea'
