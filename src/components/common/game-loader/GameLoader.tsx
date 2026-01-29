'use client'

import Lottie from 'lottie-react'

import gameAnimation from '@/assets/lottie/gaming.json'

type GameLoaderProps = {
  message?: string
  subMessage?: string
  showGlow?: boolean
}

export default function GameLoader({
  message = '플레이타입 계산 중',
  subMessage = 'AI가 당신의 플레이 성향을 분석하고 있어요..',
  showGlow = true,
}: GameLoaderProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative">
        {showGlow && (
          <>
            <div className="absolute inset-0 animate-pulse rounded-full bg-main-purple/40 blur-3xl" />
            <Lottie
              animationData={gameAnimation}
              loop={true}
              className="h-24 w-24"
            />
          </>
        )}
      </div>

      <div className="text-center">
        <p className="mb-2 text-[clamp(1.125rem,2.2vw,1.75rem)] font-semibold tracking-tight text-text-light md:mb-4">
          {message}
        </p>
        {subMessage && (
          <p className="text-[clamp(0.825rem,1.2vw,1rem)] leading-relaxed text-text-light/70">
            {subMessage}
          </p>
        )}
      </div>
    </div>
  )
}
