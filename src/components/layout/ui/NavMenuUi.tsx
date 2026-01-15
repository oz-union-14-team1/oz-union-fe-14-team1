'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/utils'

const NAV_MENU = [
  { id: 'home', label: '홈', href: '/' },
  { id: 'community', label: '커뮤니티', href: '/community' },
  { id: 'news', label: '새소식', href: '/news' },
] as const

export default function NavMenuUi() {
  const pathname = usePathname()
  return (
    <nav className="flex items-center gap-6 text-base font-bold whitespace-nowrap text-text-light lg:gap-8">
      {NAV_MENU.map((menu) => {
        const isActive = pathname === menu.href

        return (
          <Link
            key={menu.id}
            href={menu.href}
            className={cn(
              'relative py-1 transition-all duration-300',
              isActive
                ? 'bg-gradient-to-r from-main-purple via-main-violet to-main-fuchsia bg-clip-text text-transparent'
                : 'text-text-light/80 hover:text-text-light',
              menu.id === 'home' && 'hidden sm:block'
            )}
          >
            {menu.label}
            {/* 활성 상태 언더라인 */}
            {isActive && (
              <div className="absolute right-0 bottom-0 left-0 h-0.5 animate-pulse bg-gradient-to-r from-main-purple via-main-violet to-main-fuchsia" />
            )}
            {/* 호버 언더라인 */}
            {!isActive && (
              <div className="absolute right-0 bottom-0 left-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-main-purple via-main-violet to-main-fuchsia transition-transform duration-300 group-hover:scale-x-100" />
            )}
          </Link>
        )
      })}
    </nav>
  )
}
