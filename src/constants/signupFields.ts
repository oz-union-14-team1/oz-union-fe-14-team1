import { SignupFormValues } from '@/components'

type FieldConfig = {
  key: keyof SignupFormValues
  label: string
  type: 'text' | 'password' | 'tel'
  placeholder: string
  required?: boolean
  password?: boolean
}

export const SIGNUP_FIELDS: FieldConfig[] = [
  {
    key: 'password',
    label: '비밀번호',
    type: 'password',
    placeholder: '비밀번호를 입력해 주세요.',
    required: true,
    password: true,
  },
  {
    key: 'passwordConfirm',
    label: '비밀번호 확인',
    type: 'password',
    placeholder: '비밀번호를 다시 입력해 주세요.',
    required: true,
  },
  {
    key: 'name',
    label: '이름',
    type: 'text',
    placeholder: '이름을 입력해 주세요.',
    required: true,
  },
  /**
   * 백엔드팀 요청으로 생년월일 제거
   *   {
        key: 'birthday',
        label: '생년월일',
        type: 'text',
        placeholder: '8자리 입력해주세요 (ex.20260101)',
        required: false,
      },
   */
]
