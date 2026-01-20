import { z } from 'zod'

const phoneRegex = /^(01[016789])\d{7,8}$/

/**
 * 아이디-패스워드 계정찾기 조드 스키마
 */
export const findAccountSchema = z.object({
  phone: z
    .string()
    .regex(/^\d{10,11}$/, '휴대폰 번호를 정확히 입력해 주세요.')
    .regex(phoneRegex, '올바른 휴대폰 번호를 입력해 주세요.'),
  phoneCode: z.string().regex(/^\d{6}$/, '인증번호는 6자리 숫자입니다.'),
})

export const phoneOnlySchema = findAccountSchema.pick({
  phone: true,
})

export type FindAccountFormValues = z.infer<typeof findAccountSchema>
