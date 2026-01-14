import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/utils/cn'

const NAV_MENU = [
  { id: 'home', label: '홈', href: '/' },
  { id: 'community', label: '커뮤니티', href: '/community' },
  { id: 'news', label: '새소식', href: '/news' },
] as const

export default function NavMenuUi() {
  const pathname = usePathname()
  return (
    <nav className="flex items-center gap-4 text-base font-bold whitespace-nowrap text-text-light lg:gap-6">
      {NAV_MENU.map((menu) => {
        const isActive = pathname === menu.href

        return (
          <Link
            key={menu.id}
            href={menu.href}
            className={cn(
              'rounded-sm px-1 py-0.5 transition-colors duration-200',
              'hover:text-main-purple',
              isActive && 'text-main-purple',
              menu.id === 'home' && 'hidden sm:block'
            )}
          >
            {menu.label}
          </Link>
        )
      })}
    </nav>
  )
}
