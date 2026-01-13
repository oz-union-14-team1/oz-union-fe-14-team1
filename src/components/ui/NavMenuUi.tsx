import Link from 'next/link'
import { cn } from '@/utils/cn'
import { usePathname } from 'next/navigation'

const NAV_MENU = [
  { id: 'home', label: '홈', href: '/' },
  { id: 'community', label: '커뮤니티', href: '/community' },
  { id: 'news', label: '새소식', href: '/news' },
] as const

export default function NavMenuUi() {
  const pathname = usePathname()
  return (
    <nav
      className="flex items-center gap-4 text-base font-bold whitespace-nowrap text-text-light lg:gap-6"
      role="navigation"
      aria-label="주요 메뉴"
    >
      {NAV_MENU.map((menu) => {
        const isActive = pathname === menu.href

        return (
          <Link
            key={menu.id}
            href={menu.href}
            className={cn(
              'rounded-sm px-1 py-0.5 transition-colors duration-200',
              'hover:text-main-purple',
              isActive && 'text-main-purple'
            )}
          >
            {menu.label}
          </Link>
        )
      })}
    </nav>
  )
}
