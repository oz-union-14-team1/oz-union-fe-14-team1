import Image from 'next/image'

import joystickIcon from '@/assets/icons/joystickIcon.svg'
import { PROFILE_TEXT } from '@/constants'
import { cn } from '@/utils'

export default function ProfileBaseUi() {
  return (
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
      <div className="absolute inset-1 animate-spin-reverse-slow rounded-full bg-linear-to-br from-main-purple/10 via-transparent to-main-fuchsia/10 opacity-50 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-20 w-20 animate-spin-slow rounded-full bg-linear-to-br from-main-purple/30 to-main-fuchsia/30 opacity-0 blur-xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-100" />
        </div>
        <Image
          src={joystickIcon}
          alt={PROFILE_TEXT.JOYSTICK_ALT}
          className={cn(
            'relative z-10 h-auto w-20 pl-1 opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]',
            'animate-spin-slowest'
          )}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 animate-spin-slower rounded-full bg-linear-to-br from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-0 rounded-full border-2 border-main-purple/0 opacity-0 transition-all duration-500 group-hover:animate-pulse group-hover:border-main-purple/30 group-hover:opacity-100" />
    </div>
  )
}
