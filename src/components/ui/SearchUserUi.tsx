import Link from 'next/link'
import { Search, CircleUser } from 'lucide-react'

export default function SearchUserUi() {
  return (
    <div className="flex shrink-0 items-center gap-4 text-text-light">
      <Link href="/search" className="block md:hidden">
        <Search
          size={32}
          className="text-current transition-colors duration-200 hover:text-main-purple"
        />
      </Link>
      <Link href="/user" aria-label="사용자 메뉴">
        <CircleUser
          size={32}
          className="text-current transition-colors duration-200 hover:text-main-purple"
        />
      </Link>
    </div>
  )
}
