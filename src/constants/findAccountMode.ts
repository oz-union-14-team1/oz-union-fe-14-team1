import { findIdSchema, findPasswordSchema } from '@/components'

export const FIND_ACCOUNT_CONFIG = {
  id: {
    schema: findIdSchema,
  },
  password: {
    schema: findPasswordSchema,
  },
} as const
