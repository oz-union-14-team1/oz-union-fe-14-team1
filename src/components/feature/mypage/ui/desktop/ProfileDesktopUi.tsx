import { Pencil } from 'lucide-react'

import { cn } from '@/utils'

import {
  EditProfileImageUi,
  GenresTagDesktopUi,
  ProfileBackgroundUi,
  ProfileImageUi,
} from '..'

interface ProfileDesktopProps {
  imageUrl?: string
}

export default function ProfileDesktopUi({ imageUrl }: ProfileDesktopProps) {
  return (
    <div className="relative">
      <Glow />
      <div className="group relative flex h-auto w-auto cursor-pointer flex-col items-center justify-center">
        <EditProfileImageUi />
        <ProfileImageUi imageUrl={imageUrl} />
      </div>
      <ProfileName />
      <GenresTagDesktopUi
        genre="GENRES (DESKTOP)"
        variant="main"
        className="absolute top-15.25 left-38 z-2"
      />
      <ProfileBackgroundUi />
      <div className="absolute top-30 left-41 z-2 flex flex-wrap items-center gap-2">
        {['ACTION', 'RPG', 'ADVENTURE', 'SHOOTER'].map((genre) => (
          <GenresTagDesktopUi
            key={genre}
            genre={genre}
            className="px-4 py-1.5 text-sm"
          />
        ))}
      </div>
    </div>
  )
}

// 내부 컴포넌트: Glow
function Glow() {
  return (
    <div className="absolute top-2.5 left-2.5 z-2 h-35.75 w-35.75 rounded-full">
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
    <div className="flex items-center gap-3">
      <p className="hidden pt-4 pl-43 text-2xl font-semibold text-text-light md:block">
        {/* API / ✅ ---------------------------------------------------------------------- */}
        NAME (DESKTOP)
      </p>
      {/* 편집 버튼 - Glassmorphism ⭐ */}
      <button
        type="button"
        className={cn(
          'group/edit relative mt-3 hidden size-10 items-center justify-center overflow-hidden rounded-full',
          'border border-white/10 bg-white/5 backdrop-blur-md',
          'transition-all duration-300 md:flex',
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
