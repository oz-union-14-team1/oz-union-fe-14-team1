import Image from 'next/image'

import profileBackgroundDesktop from '@/assets/images/profile/profile-background-desktop.svg'
import profileBackgroundMobile from '@/assets/images/profile/profile-background-mobile.svg'

export default function ProfileBackgroundUi() {
  return (
    <>
      {/* 프로필 / 배경 / 모바일 */}
      <Image
        src={profileBackgroundMobile}
        alt="profile background mobile"
        className="absolute top-0 left-0 z-1 rounded-full lg:h-auto lg:w-auto"
      />
      {/* 프로필 / 배경 / 데스크탑 */}
      <Image
        src={profileBackgroundDesktop}
        alt="profile background desktop"
        className="absolute top-0 left-0 z-1 hidden lg:block"
      />
    </>
  )
}
