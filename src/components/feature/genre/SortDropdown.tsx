'use client'

import { ChevronDownIcon } from 'lucide-react'
import {
  ComponentPropsWithRef,
  MouseEventHandler,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'

import useOutsideClick from '@/hooks/useClickOutside'
import { cn } from '@/utils'

type SortOption = {
  label: ReactNode
  value: string
}

type SortOptionProps = Omit<
  ComponentPropsWithRef<'button'>,
  'value' | 'onChange'
> & {
  value: string
  options: SortOption[]
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export default function SortDropdown({
  options,
  value,
  onChange,
  placeholder = '전체보기',
  disabled = false,
  type = 'button',
  className,
  onClick,
}: SortOptionProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  useOutsideClick(containerRef, () => {
    if (isOpen) {
      setIsOpen(false)
    }
  })

  const selectedLabel =
    options.find((opt) => opt.value === value)?.label ?? null

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick?.(e)
    if (e.defaultPrevented || disabled) {
      return
    }
    setIsOpen((prev) => !prev)
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type={type}
        disabled={disabled}
        onClick={handleButtonClick}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={cn(
          'flex items-center gap-3 rounded-sm border border-btn-outline-stroke bg-background px-3 py-1',
          disabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-white/10'
        )}
      >
        {selectedLabel ?? placeholder}
        <ChevronDownIcon size={14} />
      </button>
      {isOpen && !disabled && (
        <ul
          role="listbox"
          className={cn(
            `absolute top-10 left-0 z-50`,
            'h-auto w-max min-w-full rounded-md',
            'rounded-sm bg-text-inverse/70 shadow-[0px_4px_12px_1px_rgba(0,0,0,0.35)] backdrop-blur-md'
          )}
        >
          {options.map((option) => {
            const isSelected = option.value === value
            return (
              <li key={option.value}>
                <button
                  type="button"
                  role="options"
                  onClick={() => {
                    onChange(option.value)
                    setIsOpen(false)
                  }}
                  disabled={disabled}
                  className={cn(
                    'w-full px-4 py-2 text-left text-sm font-light text-white md:text-base',
                    isSelected
                      ? 'cursor-default bg-white/30 font-medium text-white backdrop-blur-md'
                      : 'hover:bg-surface-hover hover:text-btn-gray-default',
                    className
                  )}
                >
                  {option.label}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
