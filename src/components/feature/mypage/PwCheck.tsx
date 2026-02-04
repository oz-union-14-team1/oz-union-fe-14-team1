'use client'

import { AxiosError } from 'axios'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

import { deleteUserApi } from '@/api/fetchers/authFetchers'
import { BaseInput, Button, FormField, pwCheckSchema } from '@/components'
import { ROUTES_PATHS, SIGNUP_FIELDS } from '@/constants'
import { useToast } from '@/hooks'
import { useAuthStore } from '@/store/useAuthStore'
import { cn } from '@/utils'

type PwCheckType = 'delete'

/**
 * 비밀번호 확인 컴포넌트
 */
export default function PwCheck() {
  const { triggerToast } = useToast()
  const searchParams = useSearchParams()
  const router = useRouter()

  const pwCheckType = searchParams.get('type') as PwCheckType | null
  const passwordField = SIGNUP_FIELDS.find((f) => f.key === 'password')

  const [error, setError] = useState<string | null>(null)
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!passwordField) {
    return null
  }

  const handleSubmit = async () => {
    if (!pwCheckType) {
      router.replace(ROUTES_PATHS.USER_INFO_UPDATE_PAGE)
      return
    }

    const result = pwCheckSchema.safeParse({ password })

    if (!result.success) {
      setError(result.error.issues[0].message)
      triggerToast('error', result.error.issues[0].message)
      return
    }

    setError(null)
    setIsSubmitting(true)

    try {
      if (pwCheckType === 'delete') {
        await deleteUserApi({ password })
        useAuthStore.getState().clear()
        triggerToast('success', '회원 탈퇴가 완료되었습니다.')
        router.replace(ROUTES_PATHS.USER_DELETE_RESULT_PAGE)
        return
      }

      triggerToast('success', '비밀번호가 확인되었습니다.')
      router.push(ROUTES_PATHS.USER_INFO_UPDATE_PAGE)
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        const status = err.response?.status

        if (status === 400) {
          triggerToast('error', '비밀번호가 일치하지 않습니다.')
          return
        }

        if (status === 401) {
          useAuthStore.getState().clear()
          triggerToast('error', '세션이 만료되었습니다.')
          router.replace(ROUTES_PATHS.LOGIN_PAGE)
          return
        }
      }

      triggerToast('error', '회원 탈퇴 처리 중 오류가 발생했습니다.')
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
            {isSubmitting ? '처리중...' : '비밀번호 확인'}
          </Button>
        </form>
      </div>
    </div>
  )
}
