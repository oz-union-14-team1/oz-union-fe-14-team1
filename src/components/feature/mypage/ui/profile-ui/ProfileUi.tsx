import { MOCK_GENRES } from '@/constants'
import { GetUserMe } from '@/types/api-response/user-response'

import {
  ProfileBackgroundUi,
  ProfileDesktopGlowUi,
  ProfileDesktopNameUi,
  ProfileGenresDesktopUi,
  ProfileGenresMobileUi,
  ProfileImageUi,
  ProfileMobileGlowUi,
  ProfileMobileNameUi,
} from '.'

type ProfileUiProps = {
  nickname: GetUserMe['nickname']
  imageUrl: string
}

function ProfileDesktopUi({ imageUrl, nickname }: ProfileUiProps) {
  return (
    <div className="relative">
      <ProfileDesktopGlowUi />
      <div className="group relative flex h-auto w-auto cursor-pointer flex-col items-center justify-center">
        <ProfileImageUi imageUrl={imageUrl} />
      </div>
      <ProfileDesktopNameUi nickname={nickname} />
      <ProfileGenresDesktopUi
        genre="GENRES (DESKTOP)"
        variant="main"
        className="absolute top-15.25 left-38 z-2"
      />
      <ProfileBackgroundUi />
      <div className="absolute top-30 left-41 z-2 flex flex-wrap items-center gap-2">
        {MOCK_GENRES.map((genre) => (
          <ProfileGenresDesktopUi
            key={genre}
            genre={genre}
            className="px-4 py-1.5 text-sm"
          />
        ))}
      </div>
    </div>
  )
}

function ProfileMobileUi({ imageUrl, nickname }: ProfileUiProps) {
  return (
    <div className="relative flex flex-col items-center">
      <ProfileMobileGlowUi />
      <div className="relative flex h-40.75 w-40.75 flex-col items-center justify-center">
        <div className="group relative z-10 h-40.75 w-40.75 cursor-pointer">
          <ProfileImageUi imageUrl={imageUrl} />
        </div>
        <ProfileBackgroundUi />
      </div>
      <ProfileMobileNameUi nickname={nickname} />
      <ProfileGenresMobileUi
        genre="GENRES (MOBILE)"
        variant="main"
        className="z-7 mt-5 block px-4 py-2 text-sm"
      />
      <div className="z-7 mt-5 flex w-[70vw] flex-wrap items-center justify-center gap-2">
        {MOCK_GENRES.map((genre) => (
          <ProfileGenresMobileUi
            key={genre}
            genre={genre}
            className="px-3 py-1.5 text-xs"
          />
        ))}
      </div>
    </div>
  )
}

export { ProfileDesktopUi, ProfileMobileUi }
