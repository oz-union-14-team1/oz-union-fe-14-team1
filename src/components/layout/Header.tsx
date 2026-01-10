'use client'

import Image from 'next/image'
import LogoIcon from '@/asset/icon/LogoIcon.svg'
import LogoTextIcon from '@/asset/icon/LogoTextIcon.svg'
import Link from 'next/link'
import { CircleUser, Funnel, Menu, Search } from 'lucide-react'
import { useState, useCallback } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { cn } from '@/utils/cn'
import { SearchInput } from '../common/input/SearchInput'

const NAV_MENU = [
  { id: 'home', label: '홈', href: '/' },
  { id: 'community', label: '커뮤니티', href: '/community' },
  { id: 'news', label: '새소식', href: '/news' },
] as const

const MIN_SEARCH_LENGTH = 1

export default function Header() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const router = useRouter()
  const pathname = usePathname()

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value)
    },
    []
  )

  const handleFilterToggle = useCallback(() => {
    setIsFilterOpen((prev) => !prev)
  }, [])

  const handleSearchSubmit = useCallback(() => {
    const trimmedValue = searchValue.trim()

    if (trimmedValue.length < MIN_SEARCH_LENGTH) {
      return
    }

    const encodedQuery = encodeURIComponent(trimmedValue)
    router.push(`/search?query=${encodedQuery}`)
  }, [searchValue, router])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleSearchSubmit()
      }
    },
    [handleSearchSubmit]
  )

  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex h-[85px] w-full items-center bg-background shadow-2xl">
      <div
        className={cn(
          'flex w-full max-w-[1412px] items-center justify-between gap-4 px-4 md:mx-auto lg:gap-6'
        )}
      >
        <div className="flex shrink-0 items-center gap-4 lg:gap-6">
          <Link
            href="/"
            className="flex shrink-0 items-center rounded-sm focus-visible:ring-2 focus-visible:ring-main-purple focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            <Image
              src={LogoIcon}
              alt="Logo Icon"
              className="w-[100px]"
              width={100}
              priority
            />
            <Image
              src={LogoTextIcon}
              alt="Logo Text Icon"
              className="hidden pl-3 lg:block"
              width={105}
              priority
            />
          </Link>

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
                    'rounded-sm px-1 py-0.5 transition-colors duration-200 hover:text-main-purple focus-visible:ring-2 focus-visible:ring-main-purple focus-visible:ring-offset-2 focus-visible:outline-none',
                    isActive && 'text-main-purple'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {menu.label}
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-4">
          {/* 데스크톱 검색창 (md 이상) */}
          <div className="hidden items-center gap-[10px] md:flex">
            <SearchInput
              className="w-[288px]"
              value={searchValue}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
              onSearch={handleSearchSubmit}
              placeholder="검색어를 입력하세요"
            />

            <button
              type="button"
              aria-label={isFilterOpen ? '필터 닫기' : '필터 열기'}
              onClick={handleFilterToggle}
              className={cn(
                'flex h-10 w-10 shrink-0 items-center justify-center rounded-default transition-all duration-200 hover:opacity-80 focus-visible:ring-2 focus-visible:ring-main-purple focus-visible:ring-offset-2 focus-visible:outline-none',
                isFilterOpen
                  ? 'bg-linear-to-r from-main-purple via-main-violet to-main-fuchsia'
                  : 'bg-btn-outline-stroke hover:bg-btn-outline-stroke/80'
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

          <div className="flex shrink-0 items-center gap-4 text-text-light">
            <Link href="/search" className="block md:hidden">
              <Search
                size={32}
                className="text-current hover:text-main-purple"
              />
            </Link>
            <button
              type="button"
              aria-label="사용자 메뉴"
              className="rounded-full transition-colors duration-200 hover:text-main-purple focus-visible:ring-2 focus-visible:ring-main-purple focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <CircleUser size={32} className="text-current" />
            </button>
            <button
              type="button"
              aria-label="메뉴 열기"
              className="rounded-sm transition-colors duration-200 hover:text-main-purple focus-visible:ring-2 focus-visible:ring-main-purple focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <Menu size={32} className="text-current" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
