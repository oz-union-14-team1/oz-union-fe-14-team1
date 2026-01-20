import profile from '@/assets/images/profile/profile.jpg'
import Profile from '@/components/feature/mypage/Profile'

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col gap-50 bg-background p-8">
      {/* 회원 프로필 이미지 있는 버전 */}
      <div className="flex flex-col gap-4">
        <Profile imageUrl={profile.src} />
      </div>

      {/* 회원 프로필 이미지 없는 버전 (기본 조이스틱) */}
      <div className="flex flex-col gap-4">
        <Profile imageUrl="" />
      </div>
    </div>
  )
}
