'use client'

import { isAxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { findPasswordConfirmApi } from '@/api/fetchers/authFetchers'
import {
  BaseInput,
  Button,
  newPasswordSchema,
  NewPasswordSchemaValues,
} from '@/components'
import { PASSWORD_CONFIRM_FIELDS, ROUTES_PATHS } from '@/constants'
import { useToast } from '@/hooks'
import { cn } from '@/utils'

import FormField from '../FormField'
import { INPUT_CLASS } from '../SignupForm'

type ApiErrorResponse = {
  error_detail?: string
  errors?: {
    non_field_errors?: string[]
    [key: string]: string[] | undefined
  }
  code?: string
}

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

  const handleSubmit = async () => {
    const result = newPasswordSchema.safeParse(form)

    if (!result.success) {
      const message = result.error.issues[0].message
      setError(message)
      triggerToast('error', '비밀번호 변경 중 에러가 발생했습니다')
      return
    }

    setError(null)

    try {
      const data = await findPasswordConfirmApi({
        new_password: form.password,
        new_password_confirm: form.passwordConfirm,
      })

      triggerToast('success', data.message)

      router.push(ROUTES_PATHS.LOGIN_PAGE)
    } catch (error: unknown) {
      let message = '비밀번호 변경에 실패했습니다.'

      if (isAxiosError<ApiErrorResponse>(error)) {
        const data = error.response?.data

        if (data?.errors?.non_field_errors?.length) {
          message = data.errors.non_field_errors[0]
        } else {
          message = data?.error_detail ?? message
        }
      }

      setError(message)
      triggerToast('error', message)
    }
  }

  return (
    <div className="w-full">
      <div className="mb-10 text-center font-bold text-text-dark">
        {error && (
          <p className="mt-2 w-full text-sm font-semibold text-red-400/80">
            {error}
          </p>
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
              className={cn(INPUT_CLASS, 'w-85 md:w-full')}
              onChange={(e) => handleChange(field.key, e.target.value)}
            />
          </FormField>
        ))}
        <div className="mt-10 flex w-full flex-col">
          <Button
            type="submit"
            className="cursor-pointer bg-neutral-100/10 text-sm text-text-light shadow-interactive-inactive hover:bg-main-purple md:text-lg"
          >
            비밀번호 변경하기
          </Button>
        </div>
      </form>
    </div>
  )
}
