'use client'

import Image from 'next/image'
import LogoIcon from '@/asset/icon/LogoIcon.svg'
import LogoTitleIcon from '@/asset/icon/LogoTitleIcon.svg'
import Link from 'next/link'
import { CircleUser, Funnel, Menu, Search } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/utils/cn'

export default function Header() {
  const [hasFilter, setHasFilter] = useState(false)

  const handleFilterClick = () => {
    setHasFilter(!hasFilter)
  }

  return (
    <header className="flex h-[85px] w-full items-center bg-background shadow-2xl">
      <div
        className={cn(
          'mx-auto flex w-full max-w-[1380px] items-center justify-between',
          'px-mobile md:px-tablet lg:px-desktop'
        )}
      >
        <div className="flex items-center gap-[60px]">
          <div className="flex items-center gap-6">
            <Image src={LogoIcon} alt="PlayType Logo" width={100} />
            <Image src={LogoTitleIcon} alt="PlayType Logo Name" width={110} />
          </div>

          <div className="text-body flex items-center gap-6 font-bold text-text-light">
            <Link href="/">홈</Link>
            <Link href="/">커뮤니티</Link>
            <Link href="/">새소식</Link>
          </div>
        </div>

        <div className="flex items-center gap-[250px]">
          <div className="flex items-center gap-[10px]">
            <div className="relative flex items-center">
              <input
                title="search-input"
                type="text"
                placeholder=""
                className="h-desktop w-[288px] rounded-[8px] border border-none bg-btn-outline-stroke pr-10 pl-4 text-text-light placeholder:text-btn-outline-stroke focus:border-main-violet focus:outline-none"
              />
              <Search
                size={24}
                className="absolute left-64 justify-end text-text-light"
              />
            </div>

            <button
              aria-label="필터"
              onClick={handleFilterClick}
              className={cn(
                'flex h-10 w-10 items-center justify-center rounded-[8px] transition-opacity hover:opacity-90',
                hasFilter
                  ? 'bg-linear-to-r from-main-purple via-main-violet to-main-fuchsia'
                  : 'bg-btn-outline-stroke'
              )}
            >
              <Funnel
                fill="currentColor"
                size={22}
                strokeWidth={0}
                className="text-text-light"
              />
            </button>
          </div>

          <div className="flex items-center gap-6 text-text-light">
            <CircleUser size={32} className="text-text-light" />
            <Menu size={32} className="text-text-light" />
          </div>
        </div>
      </div>
    </header>
  )
}
