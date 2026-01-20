import { ResultsContent } from '@/components'
import { ProgressBar } from '@/components/common'

/**
 * TODO: API 연결예정
 */
const MOCK_USER = {
  name: '김취향',
}

export default function ResultPage() {
  return (
    <>
      <div className="shrink-0 md:hidden">
        <div className="h-20" />
        <div className="-mx-4">
          <ProgressBar currentStep={3} />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <ResultsContent userName={MOCK_USER.name} />
      </div>
    </>
  )
}
