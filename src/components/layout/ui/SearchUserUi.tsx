import { CircleUser, Search } from 'lucide-react'
import Link from 'next/link'

export default function SearchUserUi() {
  return (
    <div className="flex shrink-0 items-center justify-center gap-2 text-text-light">
      <Link
        href="/search"
        className="group relative flex size-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_4px_12px_rgba(168,85,247,0.2)] md:hidden"
      >
        <Search className="relative z-10 size-5 text-current transition-all duration-300 group-hover:text-main-purple" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>
      <Link
        href="/mypage"
        className="group relative flex size-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_4px_12px_rgba(168,85,247,0.2)]"
      >
        <CircleUser className="relative z-10 size-5 text-current transition-all duration-300 group-hover:text-main-purple" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>
    </div>
  )
}
