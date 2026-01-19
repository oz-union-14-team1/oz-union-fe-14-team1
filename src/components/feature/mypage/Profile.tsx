import {
  EditProfileImageUi,
  GenresTagUi,
  GlowUi,
  ProfileBackgroundUi,
  ProfileImageUi,
  ProfileNameDesktopUi,
  ProfileNameMobileUi,
} from './ui'

interface ProfileProps {
  imageUrl?: string
}

export default function Profile({ imageUrl }: ProfileProps) {
  return (
    <div className="relative">
      <GlowUi />
      <div className="group relative flex h-40.75 w-40.75 cursor-pointer flex-col items-center justify-center md:h-auto md:w-auto">
        <EditProfileImageUi />
        <ProfileImageUi imageUrl={imageUrl} />
        <ProfileNameMobileUi />
        <GenresTagUi
          genre="GENRES (MOBILE)"
          variant="main"
          className="absolute z-7 mt-80 block px-4 py-2 text-sm md:hidden"
        />
        <div className="absolute left-1/2 z-7 flex w-[45vw] -translate-x-1/2 translate-y-[0%] flex-wrap items-center justify-center gap-2 pt-120 md:hidden">
          {['ACTION', 'RPG', 'ADVENTURE', 'SHOOTER'].map((genre) => (
            <GenresTagUi
              key={genre}
              genre={genre}
              className="px-3 py-1.5 text-xs"
            />
          ))}
        </div>
      </div>
      <ProfileNameDesktopUi />
      <GenresTagUi
        genre="GENRES (DESKTOP)"
        variant="main"
        className="absolute z-2 hidden md:top-15.25 md:left-38 md:block"
      />
      <ProfileBackgroundUi />
      <div className="absolute top-30 left-41 z-2 hidden flex-wrap items-center gap-2 md:flex">
        {['ACTION', 'RPG', 'ADVENTURE', 'SHOOTER'].map((genre) => (
          <GenresTagUi
            key={genre}
            genre={genre}
            className="px-4 py-1.5 text-sm"
          />
        ))}
      </div>
    </div>
  )
}
