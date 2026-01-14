'use client'

import { useState } from 'react'

import CarouselNav from '@/components/common/carousel-nav/CarouselNav'

export default function CarouselNavTestPage() {
  // 실제 동작 테스트용
  const [index, setIndex] = useState(0)
  const maxIndex = 5

  const handlePrev = () => setIndex((prev) => Math.max(0, prev - 1))
  const handleNext = () => setIndex((prev) => Math.min(maxIndex, prev + 1))

  return (
    <div className="flex min-h-screen flex-col gap-8 p-10">
      <h1 className="text-2xl font-bold text-white">CarouselNav 테스트</h1>

      <section>
        <p className="mb-2 text-sm text-gray-300">1. 기본 (둘 다 활성화)</p>
        <CarouselNav
          onPrev={() => console.log('prev')}
          onNext={() => console.log('next')}
        />
      </section>

      <section>
        <p className="mb-2 text-sm text-gray-300">
          2. 이전 버튼 비활성화 (첫 번째)
        </p>
        <CarouselNav onPrev={() => {}} onNext={() => {}} hasPrev={false} />
      </section>

      <section>
        <p className="mb-2 text-sm text-gray-300">
          3. 다음 버튼 비활성화 (마지막)
        </p>
        <CarouselNav onPrev={() => {}} onNext={() => {}} hasNext={false} />
      </section>

      <section>
        <p className="mb-2 text-sm text-gray-300">4. 둘 다 비활성화</p>
        <CarouselNav
          onPrev={() => {}}
          onNext={() => {}}
          hasPrev={false}
          hasNext={false}
        />
      </section>

      <section>
        <p className="mb-2 text-sm text-gray-200">5. 실제 동작 테스트</p>
        <div className="flex items-center gap-4">
          <CarouselNav
            onPrev={handlePrev}
            onNext={handleNext}
            hasPrev={index > 0}
            hasNext={index < maxIndex}
          />
          <span className="text-sm text-white">
            현재 인덱스: {index} / {maxIndex}
          </span>
        </div>
      </section>
    </div>
  )
}
