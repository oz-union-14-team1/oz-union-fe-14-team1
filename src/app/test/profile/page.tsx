import Profile from '@/components/feature/mypage/Profile'
import {
  GetUserMe,
  GetUserProfileImage,
} from '@/types/api-response/user-response'

export default function ProfilePage({
  nickname,
  image_url,
}: Pick<GetUserMe, 'nickname'> & Pick<GetUserProfileImage, 'image_url'>) {
  return (
    <div className="flex min-h-screen flex-col gap-50 bg-background p-8">
      {/* 회원 프로필 이미지 있는 버전 */}
      <div className="flex flex-col gap-4">
        <Profile nickname={nickname} image_url={image_url} />
      </div>

      {/* 회원 프로필 이미지 없는 버전 (기본 조이스틱) */}
      <div className="flex flex-col gap-4">
        <Profile nickname="" image_url="" />
      </div>
    </div>
  )
}
