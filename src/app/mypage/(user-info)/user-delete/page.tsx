import Image from 'next/image'

import { compoundLogoRow } from '@/assets'
import AuthGuard from '@/components/common/auth/AuthGuard'
import { InfoBox, UserDeleteClient } from '@/components/feature/mypage'
import { USER_DELETE_INFO, USER_KEEP_INFO } from '@/constants'

/**
 * 회원탈퇴 페이지 컴포넌트
 */
export default function UserDeletePage() {
  return (
    <AuthGuard>
      <div className="flex flex-col items-center px-5 py-10">
        <div className="mb-8">
          <Image src={compoundLogoRow} alt="PlayType Logo" priority />
        </div>
        <h1 className="mb-2 text-[32px] font-bold">회원탈퇴</h1>
        <p className="mb-10 text-sm text-text-light/60">
          탈퇴하실 경우, 삭제 또는 유지 되는 정보를 확인해주세요.
        </p>
        <InfoBox title="삭제되는 정보" items={USER_DELETE_INFO} />
        <InfoBox
          title="유지되는 정보"
          items={USER_KEEP_INFO}
          footerText="작성자명은 '탈퇴한 회원'으로 표시됩니다."
        />
        <UserDeleteClient />
      </div>
    </AuthGuard>
  )
}
