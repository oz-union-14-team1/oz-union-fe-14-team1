'use client'

import { CircleUser, LogOut, Search } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { ROUTES_PATHS } from '@/constants'

export default function SearchUserUi() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('accessToken')

    setTimeout(() => {
      setIsLoggedIn(true) // TODO: 배포 전에 setIsLoggedIn(!!token)으로 변경
    }, 0)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    setIsLoggedIn(false)
    router.push(ROUTES_PATHS.MAIN_PAGE)
  }

  return (
    <div className="flex shrink-0 items-center justify-center gap-2 text-text-light">
      <Link
        href={ROUTES_PATHS.SEARCH_PAGE}
        className="group relative flex size-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_4px_12px_rgba(168,85,247,0.2)] md:hidden"
      >
        <Search className="relative z-10 size-5 text-current transition-all duration-300 group-hover:text-main-purple" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>

      <Link
        href={isLoggedIn ? ROUTES_PATHS.MY_PAGE : ROUTES_PATHS.LOGIN_PAGE}
        className="group relative flex size-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_4px_12px_rgba(168,85,247,0.2)]"
      >
        <CircleUser className="relative z-10 size-5.5 text-current transition-all duration-300 group-hover:text-sub-cyan" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>

      {isLoggedIn && (
        <button
          onClick={handleLogout}
          className="group relative flex size-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_4px_12px_rgba(168,85,247,0.2)]"
          aria-label="로그아웃"
        >
          <LogOut className="relative z-10 size-5 text-current transition-all duration-300 group-hover:text-red-400" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </button>
      )}
    </div>
  )
}
