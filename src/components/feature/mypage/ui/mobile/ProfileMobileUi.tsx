import { Pencil } from 'lucide-react'

import { MOCK_GENRES } from '@/constants'
import { cn } from '@/utils'

import {
  EditProfileImageUi,
  GenresTagMobileUi,
  ProfileBackgroundUi,
  ProfileImageUi,
} from '..'

type ProfileMobileProps = {
  imageUrl: string
}

export default function ProfileMobileUi({ imageUrl }: ProfileMobileProps) {
  return (
    <div className="relative flex flex-col items-center">
      <Glow />
      <div className="relative flex h-40.75 w-40.75 flex-col items-center justify-center">
        <div className="group relative z-10 h-40.75 w-40.75 cursor-pointer">
          <EditProfileImageUi />
          <ProfileImageUi imageUrl={imageUrl} />
        </div>
        <ProfileBackgroundUi />
      </div>
      <ProfileName />
      <GenresTagMobileUi
        genre="GENRES (MOBILE)"
        variant="main"
        className="z-7 mt-5 block px-4 py-2 text-sm"
      />
      <div className="z-7 mt-5 flex w-[70vw] flex-wrap items-center justify-center gap-2">
        {MOCK_GENRES.map((genre) => (
          <GenresTagMobileUi
            key={genre}
            genre={genre}
            className="px-3 py-1.5 text-xs"
          />
        ))}
      </div>
    </div>
  )
}

// 내부 컴포넌트: Glow
function Glow() {
  return (
    <div className="absolute top-2.5 left-1/2 z-2 h-35.75 w-35.75 -translate-x-1/2 rounded-full">
      {/* 레이어 1: 가장 큰 glow */}
      <div className="absolute -inset-6 animate-pulse rounded-full bg-main-purple opacity-20 blur-3xl" />
      {/* 레이어 2: 중간 glow */}
      <div className="absolute -inset-4 rounded-full bg-linear-to-br from-main-purple via-main-violet to-main-fuchsia opacity-30 blur-2xl" />
      {/* 레이어 3: 가까운 glow */}
      <div className="absolute -inset-2 rounded-full bg-main-violet opacity-40 blur-xl" />
      {/* 레이어 4: 가장 가까운 rim light */}
      <div className="absolute -inset-1 rounded-full bg-linear-to-br from-main-purple to-main-fuchsia opacity-50 blur-md" />
      {/* 내부 glow */}
      <div className="absolute inset-0 rounded-full bg-linear-to-br from-main-purple via-main-violet to-main-fuchsia opacity-20 blur-md" />
      {/* 외부 glow - 펄스 애니메이션 */}
      <div className="absolute -inset-2 animate-pulse rounded-full bg-linear-to-br from-main-purple via-main-violet to-main-fuchsia opacity-30 blur-xl" />
    </div>
  )
}

// 내부 컴포넌트: ProfileName
function ProfileName() {
  return (
    <div className="z-7 mt-5 ml-11 flex items-center justify-center gap-3">
      <p className="text-center text-[22px] font-semibold whitespace-nowrap text-text-light md:hidden">
        {/* API / ✅ ---------------------------------------------------------------------- */}
        NAME (MOBILE)
      </p>
      {/* 편집 버튼 - Glassmorphism ⭐ */}
      <button
        type="button"
        className={cn(
          'group/edit relative flex size-10 items-center justify-center overflow-hidden rounded-full',
          'border border-white/10 bg-white/5 backdrop-blur-md',
          'transition-all duration-300 md:hidden',
          'hover:scale-110 hover:border-main-purple/30 hover:bg-white/10',
          'hover:shadow-[0_4px_12px_rgba(168,85,247,0.3)]',
          'active:scale-95'
        )}
      >
        <Pencil className="size-4 text-text-light transition-colors duration-300 group-hover/edit:text-main-purple" />
        {/* 그라데이션 오버레이 */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/edit:opacity-100" />
      </button>
    </div>
  )
}
