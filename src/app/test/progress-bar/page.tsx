'use client'

import { useState } from 'react'

import ProgressBar from '@/components/common/progress-bar/ProgressBar'

export default function ProgressBarTestPage() {
  const [step, setStep] = useState(1)

  return (
    <div className="p-10">
      <h1 className="text-title mb-6">ProgressBar 테스트</h1>

      <ProgressBar currentStep={step} />

      <div className="mt-8 flex gap-4">
        <button
          onClick={() => setStep((prev) => Math.max(1, prev - 1))}
          className="text-small rounded-default bg-neutral-700 px-4 py-2 text-text-light"
        >
          이전
        </button>
        <span className="text-body">Step {step} / 3</span>
        <button
          onClick={() => setStep((prev) => Math.min(3, prev + 1))}
          className="text-small rounded-default bg-neutral-700 px-4 py-2 text-text-light"
        >
          다음
        </button>
      </div>
    </div>
  )
}
