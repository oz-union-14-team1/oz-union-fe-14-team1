import { GetUserMe } from '@/types/api-response/user-response'

import { ProfileDesktopUi, ProfileMobileUi } from './index'

type ProfileProps = {
  nickname: GetUserMe['nickname']
  imageUrl: string
}

export default function Profile({ nickname, imageUrl }: ProfileProps) {
  return (
    <>
      <div className="block lg:hidden">
        <ProfileMobileUi nickname={nickname} imageUrl={imageUrl} />
      </div>
      <div className="hidden lg:block">
        <ProfileDesktopUi nickname={nickname} imageUrl={imageUrl} />
      </div>
    </>
  )
}
