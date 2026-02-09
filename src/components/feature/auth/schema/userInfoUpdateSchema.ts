import z from 'zod'

import {
  birthdayRule,
  nickNameRule,
  passwordRule,
  phoneRule,
} from './signupSchema'

/**
 * 회원정보 수정 조드 스키마
 */
export const userInfoUpdateSchema = z
  .object({
    nickName: nickNameRule,
    password: passwordRule.optional(),
    passwordConfirm: z
      .string()
      .transform((v) => v.trim())
      .optional(),
    name: z.string().min(1, '이름을 입력해 주세요.'),
    /**
     * 백엔드 요청으로 생일 필드 제거
     * birthday: birthdayRule,
     */

    gender: z.enum(['남성', '여성'], {
      message: '성별을 선택해 주세요.',
    }),
    phone: phoneRule,
    phoneCode: z
      .string()
      .regex(/^\d{6}$/, '인증번호는 6자리 숫자입니다.')
      .optional(),
  })
  .refine(
    (data) => {
      if (!data.password && !data.passwordConfirm) {
        return true
      }

      if (!data.password || !data.passwordConfirm) {
        return false
      }

      return data.password === data.passwordConfirm
    },
    {
      message: '비밀번호가 일치하지 않습니다.',
      path: ['passwordConfirm'],
    }
  )

export type UserInfoUpdateSchemaValues = z.infer<typeof userInfoUpdateSchema>
