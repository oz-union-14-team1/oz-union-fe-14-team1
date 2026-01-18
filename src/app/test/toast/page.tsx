import Toast from '@/components/common/toast/Toast'

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      <Toast type="success" message="성공 토스트" />
      <Toast type="error" message="에러 토스트" />
      <Toast type="warning" message="경고 토스트" />
    </div>
  )
}
