'use client'

import { Button } from '@/components'
import Toast from '@/components/common/toast/Toast'
import useToast from '@/hooks/useToast'

export default function Home() {
  const { triggerToast } = useToast()

  return (
    <div className="flex flex-col items-start gap-2">
      <Toast type="success" message="성공 토스트" />
      <Toast type="error" message="에러 토스트" />
      <Toast type="warning" message="경고 토스트" />

      <Button
        onClick={() => {
          triggerToast('success', '성공 토스트')
        }}
      >
        성공 토스트
      </Button>
      <Button
        onClick={() => {
          triggerToast('error', '에러 토스트')
        }}
      >
        에러 토스트
      </Button>
      <Button
        onClick={() => {
          triggerToast('warning', '경고 토스트')
        }}
      >
        경고 토스트
      </Button>
    </div>
  )
}
