import { z } from 'zod'

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])[^\s]{8,20}$/

const noTripleRepeat = /^(?!.*(.)\1\1).*$/

export const passwordRule = z
  .string()
  .regex(
    passwordRegex,
    '비밀번호는 8~20자, 대/소문자, 숫자, 특수문자를 포함해야 합니다.'
  )
  .regex(noTripleRepeat, '같은 문자를 3번 이상 사용할 수 없습니다.')
  .refine((pw) => !pw.includes(' '), {
    message: '공백은 사용할 수 없습니다.',
  })

const nicknameRegex = /^[가-힣a-zA-Z0-9]{2,16}$/

const bannedNicknames = ['관리자', '운영자', 'admin']

const phoneRegex = /^(01[016789])\d{7,8}$/

export const phoneRule = z
  .string()
  .regex(/^\d{10,11}$/, '휴대폰 번호를 정확히 입력해 주세요.')
  .regex(phoneRegex, '올바른 휴대폰 번호를 입력해 주세요.')

const isValidBirthday = (value: string) => {
  if (!/^\d{8}$/.test(value)) {
    return false
  }

  const year = Number(value.slice(0, 4))
  const month = Number(value.slice(4, 6))
  const day = Number(value.slice(6, 8))

  if (year < 1900 || year > new Date().getFullYear()) {
    return false
  }

  if (month < 1 || month > 12) {
    return false
  }

  const lastDay = new Date(year, month, 0).getDate()

  if (day < 1 || day > lastDay) {
    return false
  }

  return true
}

/**
 * 회원가입 조드 스키마
 */
export const signupSchema = z
  .object({
    id: z.string().min(1, '아이디를 입력해 주세요.'),
    nickName: z
      .string()
      .regex(nicknameRegex, '닉네임은 2~16자의 한글/영문/숫자만 가능합니다.')
      .refine(
        (value) =>
          !bannedNicknames.some((word) => value.toLowerCase().includes(word)),
        { message: '사용할 수 없는 닉네임입니다.' }
      ),
    password: passwordRule,
    passwordConfirm: z.string(),
    name: z.string().min(1, '이름을 입력해 주세요.'),
    birthday: z
      .string()
      .regex(/^\d{8}$/, '생년월일은 8자리 숫자여야 합니다.')
      .refine(isValidBirthday, { message: '올바른 생년월일 형식이 아닙니다.' }),
    gender: z.enum(['남성', '여성'], {
      message: '성별을 선택해 주세요.',
    }),
    phone: z
      .string()
      .regex(/^\d{10,11}$/, '휴대폰 번호를 정확히 입력해 주세요.')
      .regex(phoneRegex, '올바른 휴대폰 번호를 입력해 주세요.'),
    phoneCode: z.string().regex(/^\d{6}$/, '인증번호는 6자리 숫자입니다.'),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['passwordConfirm'],
  })

export type SignupFormValues = z.infer<typeof signupSchema>
