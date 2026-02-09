import { z } from 'zod'

import { passwordRule } from './signupSchema'

export const newPasswordSchema = z
  .object({
    password: passwordRule,
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: '비밀번호와 비밀번호 확인값이 일치하지 않습니다.',
    path: ['passwordConfirm'],
  })

export type NewPasswordSchemaValues = z.infer<typeof newPasswordSchema>
