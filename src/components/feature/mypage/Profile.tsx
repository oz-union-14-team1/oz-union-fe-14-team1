import {
  GetUserMe,
  GetUserProfileImage,
} from '@/types/api-response/user-response'

import { ProfileDesktopUi, ProfileMobileUi } from './index'

export default function Profile({
  nickname,
  image_url,
}: Pick<GetUserMe, 'nickname'> & Pick<GetUserProfileImage, 'image_url'>) {
  return (
    <>
      <div className="block lg:hidden">
        <ProfileMobileUi nickname={nickname} image_url={image_url} />
      </div>
      <div className="hidden lg:block">
        <ProfileDesktopUi nickname={nickname} image_url={image_url} />
      </div>
    </>
  )
}
