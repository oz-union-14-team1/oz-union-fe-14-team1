import { cva, type VariantProps } from 'class-variance-authority'

export const inputVariant = cva(
  'px-3 font-semibold rounded-md font-(--font-family-base)',
  {
    variants: {
      inputSize: {
        signUp: 'w-89 h-10',
        login: 'w-92.5 h-10',
        search: 'w-full h-10',
      },
      color: {
        lightGray: 'bg-neutral-300 text-main-purple',
        darkGray: 'bg-neutral-500 text-text-light',
      },
    },
    defaultVariants: {
      inputSize: 'signUp',
      color: 'lightGray',
    },
  }
)

export type InputVariant = VariantProps<typeof inputVariant>
