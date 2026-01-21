import { z } from 'zod'

import { phoneRule } from './signupSchema'

/**
 * 아이디-패스워드 계정찾기 조드 스키마
 */
export const findAccountSchema = z.object({
  phone: phoneRule,
  phoneCode: z.string().regex(/^\d{6}$/, '인증번호는 6자리 숫자입니다.'),
})

export const phoneOnlySchema = findAccountSchema.pick({
  phone: true,
})

export type FindAccountFormValues = z.infer<typeof findAccountSchema>
