import { api } from '@/utils'

export default async function MswServerTestPage() {
  let data

  try {
    const res = await api.get('https://api/test')

    data = res.data
  } catch (e) {
    console.error(e)
  }

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-semibold">
        MSW Server Component 작동 테스트
      </h1>
      <span>아래에 msw is working! 문구가 나타나면 성공입니다.</span>
      <span>{data && data.message ? data.message : 'msw failed'}</span>
    </div>
  )
}
