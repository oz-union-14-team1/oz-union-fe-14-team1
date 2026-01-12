import Toast from '@/components/common/toast/Toast'

export default function Home() {
  return (
    <div>
      {/* 아래처럼 내용을 채우면 'missing' 에러가 사라집니다 */}
      <Toast type="success" message="성공했습니다!" />
    </div>
  )
}
