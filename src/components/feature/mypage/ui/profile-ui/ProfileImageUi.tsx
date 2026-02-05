'use client'

import { PROFILE_TEXT } from '@/constants'
import { cn, getFullImageUrl } from '@/utils'

import { DeleteProfileImageUi, EditProfileImageUi, ProfileBaseUi } from '.'

type ProfileImageUiProps = {
  imageUrl: string
}

export default function ProfileImageUi({ imageUrl }: ProfileImageUiProps) {
  const fullImageUrl = getFullImageUrl(imageUrl)

  return (
    <>
      {/* 회전하는 그라데이션 링 - 천천히 (8초) ⭐ */}
      <div className="absolute top-2.5 left-2.5 z-3 h-35.75 w-35.75 animate-spin-slow">
        <div className="h-full w-full rounded-full bg-linear-to-r from-main-purple via-main-fuchsia to-main-violet p-0.5 opacity-40 transition-opacity duration-500 group-hover:opacity-70">
          <div className="h-full w-full rounded-full bg-transparent" />
        </div>
      </div>
      {/* 프로필 / 이미지 / 회원 - 회전 없음 ⭐ */}
      {imageUrl && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={fullImageUrl}
            alt={PROFILE_TEXT.IMAGE_ALT}
            className={cn(
              'absolute top-2.5 left-2.5 z-5 h-35.75 w-35.75 rounded-full object-cover',
              'border-2 border-main-purple/20',
              'transition-all duration-500',
              'group-hover:border-main-purple/60 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]',
              'group-hover:scale-105'
            )}
            onError={() => {
              console.error('❌ 이미지 로드 실패:', fullImageUrl)
            }}
          />
          <DeleteProfileImageUi />
        </>
      )}
      {!imageUrl && <EditProfileImageUi />}
      <ProfileBaseUi />
    </>
  )
}
