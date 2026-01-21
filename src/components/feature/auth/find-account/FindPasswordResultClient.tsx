'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import {
  BaseInput,
  Button,
  newPasswordSchema,
  NewPasswordSchemaValues,
} from '@/components'
import { PASSWORD_CONFIRM_FIELDS, ROUTES_PATHS } from '@/constants'
import { useToast } from '@/hooks'

import FormField from '../FormField'
import { INPUT_CLASS } from '../SignupForm'

/**
 * 패스워드 찾기 결과 컴포넌트
 */
export default function FindPasswordResultClient() {
  const router = useRouter()
  const { triggerToast } = useToast()
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState<NewPasswordSchemaValues>({
    password: '',
    passwordConfirm: '',
  })

  const handleChange = (
    field: keyof NewPasswordSchemaValues,
    value: string
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    const result = newPasswordSchema.safeParse(form)

    if (!result.success) {
      const message = result.error.issues[0].message
      setError(message)
      triggerToast('error', '비밀번호 변경 중 에러가 발생했습니다')
      return
    }

    setError(null)

    /**
     * TODO: 비밀번호 변경 API 연동
     * TODO: credentials: 'include'
     */
    router.push(ROUTES_PATHS.LOGIN_PAGE)
  }

  return (
    <>
      <div className="mb-10 text-center font-bold text-text-dark">
        {error && (
          <p className="w-full text-sm font-semibold text-red-500">{error}</p>
        )}
      </div>
      <form
        className="mx-auto flex flex-col gap-5"
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        {PASSWORD_CONFIRM_FIELDS.map((field) => (
          <FormField
            key={field.key}
            label={`NEW ` + field.label}
            required={field.required}
            password={field.password}
          >
            <BaseInput
              id={`find-password-${field.key}`}
              type={field.type}
              placeholder={field.placeholder}
              value={form[field.key]}
              className={INPUT_CLASS}
              onChange={(e) => handleChange(field.key, e.target.value)}
            />
          </FormField>
        ))}
        <div className="mt-15 flex w-full">
          <Button
            type="submit"
            variant="sub"
            className="w-full cursor-pointer text-sm hover:bg-btn-sub-hover md:text-base"
          >
            비밀번호 변경하기
          </Button>
        </div>
      </form>
    </>
  )
}
