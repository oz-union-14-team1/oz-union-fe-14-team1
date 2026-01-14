import { CircleUser, Search } from 'lucide-react'
import Link from 'next/link'

export default function SearchUserUi() {
  return (
    <div className="flex shrink-0 items-center justify-center gap-4 text-text-light">
      <Link href="/search">
        <Search className="size-8 text-current transition-colors duration-200 hover:text-main-purple md:hidden" />
      </Link>
      <Link href="/user">
        <CircleUser className="size-8 text-current transition-colors duration-200 hover:text-main-purple" />
      </Link>
    </div>
  )
}
