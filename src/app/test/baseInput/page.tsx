'use client'

import BaseInput from '@/components/common/input/BaseInput'
import { useState } from 'react'

export default function BaseInputTestPage() {
  const [value, setValue] = useState('')

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">BaseInput</h1>
      <section className="flex flex-col gap-4">
        <BaseInput label="비밀번호" placeholder="8자 이상 입력" />
        <BaseInput placeholder="기본" />
        <BaseInput size="search" placeholder="search" />
        <BaseInput size="signUp" placeholder="signUp" />
        <BaseInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          size="login"
          placeholder="login"
        />
      </section>
    </div>
  )
}
