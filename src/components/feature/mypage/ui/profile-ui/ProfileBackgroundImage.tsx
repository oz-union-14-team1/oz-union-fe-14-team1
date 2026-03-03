import Image from 'next/image'

import profileBackgroundDesktop from '@/assets/images/profile/profile-background-desktop.svg'
import profileBackgroundMobile from '@/assets/images/profile/profile-background-mobile.svg'

/**
 * 프로필 배경 이미지 컴포넌트
 * css에 따라 모바일과 데스크탑 이미지가 분기되어 렌더링
 */
export default function ProfileBackgroundImage() {
  return (
    <>
      <Image
        src={profileBackgroundMobile}
        alt="profile background mobile"
        className="absolute top-0 left-0 z-1 rounded-full lg:h-auto lg:w-auto"
      />
      <Image
        src={profileBackgroundDesktop}
        alt="profile background desktop"
        className="absolute top-0 left-0 z-1 hidden lg:block"
      />
    </>
  )
}
