'use client'
import { useQuery } from '@tanstack/react-query'

import { api } from '@/utils'

export default function MswClientTestPage() {
  const { data } = useQuery<{ message: string }>({
    queryKey: ['test'],
    queryFn: async () => {
      const res = await api.get('https://api/test')

      return res.data
    },
  })

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
