import { cva } from 'class-variance-authority'

export const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-(--radius-default) px-3 py-1 text-sm font-medium whitespace-nowrap text-text-dark font-(--font-family-base)',
  {
    variants: {
      variant: {
        lightcyan: 'bg-sky-400',
        cyan: 'bg-cyan-400',
        purple: 'bg-violet-500',
        darksky: 'bg-blue-500',
        lightpurple: 'bg-indigo-500',
      },
    },
    defaultVariants: {
      variant: 'lightcyan',
    },
  }
)
