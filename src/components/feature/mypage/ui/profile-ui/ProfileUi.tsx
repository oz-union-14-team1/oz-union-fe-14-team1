'use client'

import { useGetPrefernece } from '@/api/queries/useGetUserPreference'
import { GetUserMe } from '@/types/api-response/user-response'
import { DeviceType } from '@/types/deviceType'

import ProfileBackgroundImage from './ProfileBackgroundImage'
import ProfileGenresType from './ProfileGenresType'
import ProfileGlowEvent from './ProfileGlowEvent'
import ProfileImageUi from './ProfileImageUi'
import ProfileName from './ProfileName'

type ProfileUiProps = {
  nickname: GetUserMe['nickname']
  imageUrl: string
  deviceType: DeviceType
}

export default function ProfileUi({
  imageUrl,
  nickname,
  deviceType,
}: ProfileUiProps) {
  const { data } = useGetPrefernece()

  const mergedPreferences = [
    ...(data?.genres ?? []).map((g) => ({
      id: g.id,
      name: g.genre,
    })),
    ...(data?.tags ?? []).map((t) => ({
      id: t.id,
      name: t.tag,
    })),
  ]

  if (deviceType === 'desktop') {
    return (
      <div className="relative">
        <ProfileGlowEvent deviceType="desktop" />
        <div className="group relative flex h-auto w-auto cursor-pointer flex-col items-center justify-center">
          <ProfileImageUi imageUrl={imageUrl} />
        </div>
        <ProfileName nickname={nickname} deviceType="desktop" />
        <ProfileGenresType
          deviceType="desktop"
          genre="GENRES (DESKTOP)"
          variant="main"
          className="absolute top-15.25 left-38 z-2"
        />
        <ProfileBackgroundImage />
        <div className="absolute top-30 left-41 z-2 flex flex-wrap items-center gap-2">
          {mergedPreferences.map((items) => (
            <ProfileGenresType
              deviceType="desktop"
              key={`pref-${items.id}`}
              genre={items.name}
              className="px-4 py-1.5 text-sm"
            />
          ))}
        </div>
      </div>
    )
  } else {
    return (
      <div className="relative flex flex-col items-center">
        <ProfileGlowEvent deviceType="mobile" />
        <div className="relative flex h-40.75 w-40.75 flex-col items-center justify-center">
          <div className="group relative z-10 h-40.75 w-40.75 cursor-pointer">
            <ProfileImageUi imageUrl={imageUrl} />
          </div>
          <ProfileBackgroundImage />
        </div>
        <ProfileName nickname={nickname} deviceType="mobile" />
        <ProfileGenresType
          deviceType="mobile"
          genre="GENRES (MOBILE)"
          variant="main"
          className="z-7 mt-5 block px-4 py-2 text-sm"
        />
        <div className="z-7 mt-5 flex w-[70vw] flex-wrap items-center justify-center gap-2">
          {mergedPreferences.map((items) => (
            <ProfileGenresType
              deviceType="mobile"
              key={`pref-${items.id}`}
              genre={items.name}
              className="px-3 py-1.5 text-xs"
            />
          ))}
        </div>
      </div>
    )
  }
}
