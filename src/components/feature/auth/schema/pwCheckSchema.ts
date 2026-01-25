import { z } from 'zod'

import { passwordRule } from './signupSchema'

export const pwCheckSchema = z.object({
  password: passwordRule,
})

export type PwCheckSchemaValues = z.infer<typeof pwCheckSchema>
