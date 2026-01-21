import { z } from 'zod'

const passwordRule = z
  .string()
  .min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
  .max(15, '비밀번호는 최대 15자까지 가능합니다.')
  .regex(/[A-Z]/, '대문자가 포함되어야 합니다.')
  .regex(/[a-z]/, '소문자가 포함되어야 합니다.')
  .regex(/[0-9]/, '숫자가 포함되어야 합니다.')
  .regex(/[^A-Za-z0-9]/, '특수문자가 포함되어야 합니다.')

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
