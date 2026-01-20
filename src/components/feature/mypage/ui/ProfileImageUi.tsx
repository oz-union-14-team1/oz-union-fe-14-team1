'use client'

import Image from 'next/image'

import joystickIcon from '@/assets/icons/joystickIcon.svg'
import { PROFILE_IMAGE_SIZE, PROFILE_TEXT } from '@/constants'
import { cn } from '@/utils'

type ProfileImageUiProps = {
  imageUrl: string
}

export default function ProfileImageUi({ imageUrl }: ProfileImageUiProps) {
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
        <Image
          src={imageUrl}
          alt={PROFILE_TEXT.IMAGE_ALT}
          width={PROFILE_IMAGE_SIZE.WIDTH}
          height={PROFILE_IMAGE_SIZE.HEIGHT}
          className={cn(
            'absolute top-2.5 left-2.5 z-5 h-35.75 w-35.75 rounded-full object-cover',
            'border-2 border-main-purple/20',
            'transition-all duration-500',
            'group-hover:border-main-purple/60 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]',
            'group-hover:scale-105'
          )}
        />
      )}

      {/* 프로필 / 이미지 / 기본 - 화려한 디자인 ⭐ */}
      <div
        className={cn(
          'absolute top-2.5 left-2.5 z-4 h-35.75 w-35.75 rounded-full',
          'border-2 border-white/10 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-md',
          'transition-all duration-500',
          'group-hover:border-main-purple/50 group-hover:bg-linear-to-br group-hover:from-main-purple/20 group-hover:to-main-fuchsia/20',
          'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]',
          'group-hover:scale-105'
        )}
      >
        {/* 내부 그라데이션 링 - 반대 방향 천천히 회전 (10초 역회전) ⭐ */}
        <div className="absolute inset-1 animate-spin-reverse-slow rounded-full bg-linear-to-br from-main-purple/10 via-transparent to-main-fuchsia/10 opacity-50 transition-opacity duration-500 group-hover:opacity-100" />

        {/* 조이스틱 아이콘 컨테이너 */}
        <div className="relative flex h-full w-full items-center justify-center">
          {/* 아이콘 배경 glow - 천천히 회전 (8초) ⭐ */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-20 w-20 animate-spin-slow rounded-full bg-linear-to-br from-main-purple/30 to-main-fuchsia/30 opacity-0 blur-xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-100" />
          </div>

          {/* 조이스틱 아이콘 - 아주 천천히 회전 (20초) ⭐ */}
          <Image
            src={joystickIcon}
            alt={PROFILE_TEXT.JOYSTICK_ALT}
            className={cn(
              'relative z-10 h-auto w-20 pl-1 opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]',
              'animate-spin-slowest'
            )}
          />
        </div>

        {/* 반짝이는 오버레이 - 천천히 회전 (12초) ⭐ */}
        <div className="pointer-events-none absolute inset-0 animate-spin-slower rounded-full bg-linear-to-br from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* 펄스 링 애니메이션 */}
        <div className="pointer-events-none absolute inset-0 rounded-full border-2 border-main-purple/0 opacity-0 transition-all duration-500 group-hover:animate-pulse group-hover:border-main-purple/30 group-hover:opacity-100" />
      </div>
    </>
  )
}
