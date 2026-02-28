import { GetUserMe } from '@/types/api-response/user-response'

import ProfileUi from './ui/profile-ui/ProfileUi'

type ProfileProps = {
  nickname: GetUserMe['nickname']
  imageUrl: string
}

export default function Profile({ nickname, imageUrl }: ProfileProps) {
  return (
    <>
      <div className="block lg:hidden">
        <ProfileUi
          nickname={nickname}
          imageUrl={imageUrl}
          deviceType="mobile"
        />
      </div>
      <div className="hidden lg:block">
        <ProfileUi
          nickname={nickname}
          imageUrl={imageUrl}
          deviceType="desktop"
        />
      </div>
    </>
  )
}
