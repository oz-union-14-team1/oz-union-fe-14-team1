import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('올바른 이메일 형식이 아닙니다.'),

  password: z
    .string()
    .min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
    .max(15, '비밀번호는 최대 15자까지 가능합니다.')
    .regex(/[A-Z]/, '대문자가 포함되어야 합니다.')
    .regex(/[a-z]/, '소문자가 포함되어야 합니다.')
    .regex(/[0-9]/, '숫자가 포함되어야 합니다.')
    .regex(/[^A-Za-z0-9]/, '특수문자가 포함되어야 합니다.'),
})

export type LoginFormValues = z.infer<typeof loginSchema>
