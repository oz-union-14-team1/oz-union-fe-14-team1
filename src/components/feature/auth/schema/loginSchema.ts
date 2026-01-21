import { z } from 'zod'

import { passwordRule } from './signupSchema'

export const loginSchema = z.object({
  email: z.string().email('올바른 이메일 형식이 아닙니다.'),

  password: passwordRule,
})

export type LoginFormValues = z.infer<typeof loginSchema>
