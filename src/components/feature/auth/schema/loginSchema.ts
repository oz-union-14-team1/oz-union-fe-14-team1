import { z } from 'zod'

import { passwordRule } from './signupSchema'

export const loginSchema = z.object({
  id: z.string().min(1, '아이디를 입력해 주세요.'),

  password: passwordRule,
})

export type LoginFormValues = z.infer<typeof loginSchema>
