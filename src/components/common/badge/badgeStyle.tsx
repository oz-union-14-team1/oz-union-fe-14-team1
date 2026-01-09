import { cva } from 'class-variance-authority'

export const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-[var(--radius-default)] px-3 py-1 text-sm font-medium whitespace-nowrap text-[var(--color-text-dark)] font-family: var(--font-family-base)',
  {
    variants: {
      variant: {
        lightcyan: 'bg-[#2fbdee]',
        cyan: 'bg-[#22D3EE]',
        purple: 'bg-[#9f57f6]',
        darksky: 'bg-[#5086F0]',
        lightpurple: 'bg-[#6966F2]',
      },
    },
    defaultVariants: {
      variant: 'lightcyan',
    },
  }
)
