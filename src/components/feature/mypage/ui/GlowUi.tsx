export default function GlowUi() {
  return (
    <div className="absolute top-2.5 left-2.5 z-2 h-35.75 w-35.75 rounded-full">
      {/* 레이어 1: 가장 큰 glow */}
      <div className="absolute -inset-6 animate-pulse rounded-full bg-main-purple opacity-20 blur-3xl" />
      {/* 레이어 2: 중간 glow */}
      <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-main-purple via-main-violet to-main-fuchsia opacity-30 blur-2xl" />
      {/* 레이어 3: 가까운 glow */}
      <div className="absolute -inset-2 rounded-full bg-main-violet opacity-40 blur-xl" />
      {/* 레이어 4: 가장 가까운 rim light */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-main-purple to-main-fuchsia opacity-50 blur-md" />
      {/* 내부 glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-main-purple via-main-violet to-main-fuchsia opacity-20 blur-md" />
      {/* 외부 glow - 펄스 애니메이션 */}
      <div className="absolute -inset-2 animate-pulse rounded-full bg-gradient-to-br from-main-purple via-main-violet to-main-fuchsia opacity-30 blur-xl" />
    </div>
  )
}
