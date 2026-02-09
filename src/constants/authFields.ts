import { NewPasswordSchemaValues } from '@/components/feature/auth/schema/newPasswordSchema'

type FieldConfig = {
  key: keyof NewPasswordSchemaValues
  label: string
  type: 'password'
  placeholder: string
  required?: boolean
  password?: boolean
}

export const PASSWORD_CONFIRM_FIELDS: FieldConfig[] = [
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
]
