import { z } from 'zod'

import { phoneRule } from './signupSchema'

const phoneSchema = {
  phone: phoneRule,
  phoneCode: z.string().regex(/^\d{6}$/, '인증번호는 6자리 숫자입니다.'),
}

/**
 * 아이디 찾기 조드 스키마
 */
export const findIdSchema = z.object({
  ...phoneSchema,
})

/**
 * 비밀번호 찾기 조드 스키마
 */
export const findPasswordSchema = z.object({
  id: z.string().min(1, '아이디를 입력해주세요.'),
  ...phoneSchema,
})

/**
 * 공통 휴대폰 번호 조드 스키마
 */
export const phoneOnlySchema = z.object({
  phone: phoneRule,
})

export type FindIdFormValues = z.infer<typeof findIdSchema>
export type FindPasswordFormValues = z.infer<typeof findPasswordSchema>
