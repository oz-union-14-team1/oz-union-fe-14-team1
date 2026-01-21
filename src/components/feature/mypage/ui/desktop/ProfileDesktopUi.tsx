import { Pencil } from 'lucide-react'

import { MOCK_GENRES } from '@/constants'

import {
  EditProfileImageUi,
  GenresTagDesktopUi,
  ProfileBackgroundUi,
  ProfileImageUi,
} from '..'

type ProfileDesktopProps = {
  imageUrl: string
}

export default function ProfileDesktopUi({ imageUrl }: ProfileDesktopProps) {
  return (
    <div className="relative">
      <GlowUi />
      <div className="group relative flex h-auto w-auto cursor-pointer flex-col items-center justify-center">
        <EditProfileImageUi />
        <ProfileImageUi imageUrl={imageUrl} />
      </div>
      <ProfileNameUi />
      <GenresTagDesktopUi
        genre="GENRES (DESKTOP)"
        variant="main"
        className="absolute top-15.25 left-38 z-2"
      />
      <ProfileBackgroundUi />
      <div className="absolute top-30 left-41 z-2 flex flex-wrap items-center gap-2">
        {MOCK_GENRES.map((genre) => (
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

function GlowUi() {
  return (
    <div className="absolute top-2.5 left-2.5 z-2 h-35.75 w-35.75 rounded-full">
      <div className="absolute -inset-6 animate-pulse rounded-full bg-main-purple opacity-20 blur-3xl" />
      <div className="absolute -inset-4 rounded-full bg-linear-to-br from-main-purple via-main-violet to-main-fuchsia opacity-30 blur-2xl" />
      <div className="absolute -inset-2 rounded-full bg-main-violet opacity-40 blur-xl" />
      <div className="absolute -inset-1 rounded-full bg-linear-to-br from-main-purple to-main-fuchsia opacity-50 blur-md" />
      <div className="absolute inset-0 rounded-full bg-linear-to-br from-main-purple via-main-violet to-main-fuchsia opacity-20 blur-md" />
      <div className="absolute -inset-2 animate-pulse rounded-full bg-linear-to-br from-main-purple via-main-violet to-main-fuchsia opacity-30 blur-xl" />
    </div>
  )
}

function ProfileNameUi() {
  return (
    <div className="flex items-center gap-3">
      <p className="hidden pt-4 pl-43 text-2xl font-semibold whitespace-nowrap text-text-light md:block">
        NAME (DESKTOP)
      </p>
      <button
        type="button"
        title="EDIT PROFILE IMAGE"
        className="group/edit relative mt-3 hidden size-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-main-purple/30 hover:bg-white/10 hover:shadow-[0_4px_12px_rgba(168,85,247,0.3)] active:scale-95 md:flex"
      >
        <Pencil className="size-4 text-text-light transition-colors duration-300 group-hover/edit:text-main-purple" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/edit:opacity-100" />
      </button>
    </div>
  )
}
