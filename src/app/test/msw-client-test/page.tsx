'use client'

import { useEffect, useState } from 'react'

export default function MswClientTestPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>()

  useEffect(() => {
    fetch('https://api/test')
      .then((res) => res.json())
      .then((json) => setData(json))
  }, [])

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-semibold">
        MSW Client Component 작동 테스트
      </h1>
      <span>아래에 msw is working! 문구가 나타나면 성공입니다.</span>
      <span>{data && data.message ? data.message : 'msw failed'}</span>
    </div>
  )
}
