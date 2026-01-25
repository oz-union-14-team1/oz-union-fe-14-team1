'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { BaseInput, Button, FormField, pwCheckSchema } from '@/components'
import { ROUTES_PATHS, SIGNUP_FIELDS } from '@/constants'
import { useToast } from '@/hooks'
import { cn } from '@/utils'

/**
 * 비밀번호 확인 컴포넌트
 */
export default function PwCheck() {
  const { triggerToast } = useToast()
  const router = useRouter()
  const passwordField = SIGNUP_FIELDS.find((f) => f.key === 'password')
  const [error, setError] = useState<string | null>(null)
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!passwordField) {
    return null
  }

  const handleSubmit = async () => {
    const result = pwCheckSchema.safeParse({ password })

    if (!result.success) {
      setError(result.error.issues[0].message)
      triggerToast('error', result.error.issues[0].message)
      return
    }

    setError(null)
    setIsSubmitting(true)

    try {
      /**
       * TODO:
       * - 비밀번호 검증 API 호출
       * - 성공 시 아래 로직 유지
       */
      triggerToast('success', '비밀번호가 확인되었습니다.')

      router.push(ROUTES_PATHS.USER_INFO_UPDATE_PAGE)
    } catch {
      triggerToast('error', '비밀번호가 올바르지 않습니다.')
    } finally {
      setIsSubmitting(false)
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
      <div className="w-full">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
          }}
          className="flex w-full flex-col gap-10"
        >
          <FormField
            key={passwordField.key}
            label={passwordField.label}
            required={passwordField.required}
            password={passwordField.password}
          >
            <BaseInput
              id={`pw-check-${passwordField.key}`}
              type={passwordField.type}
              placeholder={passwordField.placeholder}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormField>
          <Button
            type="submit"
            variant="purple"
            className={cn(
              'text-sm shadow-tag-inactive md:text-base',
              password ? 'cursor-pointer' : 'cursor-not-allowed'
            )}
            disabled={!password || isSubmitting}
          >
            비밀번호 확인
          </Button>
        </form>
      </div>
    </div>
  )
}
