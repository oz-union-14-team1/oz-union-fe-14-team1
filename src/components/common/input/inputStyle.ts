import { cva, type VariantProps } from 'class-variance-authority'

export const inputVariant = cva(
  'pl-3 font-semibold rounded-md font-family: var(--font-family-base)',
  {
    variants: {
      size: {
        signUp: 'w-[356px] h-[40px]',
        login: 'w-[370px] h-[40px]',
        search: 'w-[288px] h-[40px]',
      },
      color: {
        lightGray: 'bg-[#D9D9D9] text-[var(--color-main-purple)]',
        darkGray: 'bg-[#7b7b7b] text-[var(--color-text-light)]',
      },
    },
    defaultVariants: {
      size: 'signUp',
      color: 'lightGray',
    },
  }
)

export type InputVariant = VariantProps<typeof inputVariant>
