import Image from 'next/image'
import Link from 'next/link'

import { logo, logoText } from '@/assets'

export default function LogoUi() {
  return (
    <Link
      href="/"
      className="group flex shrink-0 items-center transition-all duration-300 hover:scale-105"
    >
      <div className="relative overflow-hidden rounded-2xl">
        <Image src={logo} alt="Logo Image" className="w-20 sm:w-25" />
        {/* 반짝이는 효과 */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="relative hidden lg:block">
        <Image
          src={logoText}
          alt="Logo Text Image"
          className="w-26 pl-3 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]"
        />
      </div>
    </Link>
  )
}
