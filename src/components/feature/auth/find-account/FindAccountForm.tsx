'use client'

import { isAxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import {
  findIdApi,
  findPasswordRequestApi,
  sendCodeApi,
  verifyCodeApi,
} from '@/api/fetchers/authFetchers'
import {
  Button,
  DuplicateCheckField,
  FindIdFormValues,
  findIdSchema,
  FindPasswordFormValues,
  findPasswordSchema,
  phoneOnlySchema,
  PhoneVerificationField,
} from '@/components'
import { ROUTES_PATHS } from '@/constants'
import { usePhoneVerificationTimer, useToast } from '@/hooks'
import { useFindIdStore } from '@/store/useFindIdStore'
import { FindAccountMode } from '@/types/findAccountMode'

/**
 * 아이디/비밀번호 찾기 모드
 */
type FindAccountFormProps = {
  mode: FindAccountMode
  onError: (msg: string | null) => void
}

type FormValues = FindIdFormValues | FindPasswordFormValues

/**
 * 아이디/비밀번호 찾기 폼 컴포넌트
 * @param mode - 'id'
 * @returns 아이디/비밀번호 찾기 폼 UI
 */
export default function FindAccountForm({
  mode,
  onError,
}: FindAccountFormProps) {
  const router = useRouter()
  const { triggerToast } = useToast()
  const findIdStore = useFindIdStore()

  const isFindMode = mode === 'id'
  const [form, setForm] = useState<FormValues>({
    phone: '',
    phoneCode: '',
    ...(mode === 'password' && { id: '' }),
  })

  const handleChange = (
    field: keyof FindIdFormValues | keyof FindPasswordFormValues,
    value: string
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  /**
   * 핸드폰 인증 타이머 훅
   */
  const phoneTimer = usePhoneVerificationTimer({
    duration: 180,
    onExpire: () => {
      setForm((prev) => ({ ...prev, phoneCode: '' }))
      triggerToast('error', '인증 시간이 만료되었습니다.')
    },
    onVerified: () => {
      triggerToast('success', '인증이 완료 되었습니다.')
    },
  })

  const handleSubmit = async () => {
    const schema = isFindMode ? findIdSchema : findPasswordSchema
    const result = schema.safeParse(form)

    if (!result.success) {
      const message = result.error.issues[0].message
      onError(message)
      triggerToast('error', message)
      return
    }

    try {
      onError(null)

      if (isFindMode) {
        await handleFindId()
      } else {
        await handleFindPassword()
      }
    } catch {
      phoneTimer.reset()
      triggerToast('error', '요청 처리 중 오류가 발생했습니다.')
    }
  }

  const handleFindId = async () => {
    try {
      const data = await findIdApi({
        phone_number: form.phone,
      })

      if (!data.exists || !data.identifier) {
        triggerToast('error', data.message || '아이디를 찾을 수 없습니다.')
        phoneTimer.reset()

        setForm((prev) => ({ ...prev, phoneCode: '' }))

        return
      }

      findIdStore.setIdentifier(data.identifier)

      triggerToast('success', data.message)

      router.push(ROUTES_PATHS.FIDN_ID_RESULT_PAGE)
    } catch (error) {
      let message = '아이디 찾기에 실패했습니다.'

      if (isAxiosError(error)) {
        message =
          error.response?.data?.message ||
          error.response?.data?.error_detail ||
          message

        phoneTimer.reset()

        setForm((prev) => ({ ...prev, phoneCode: '' }))
      }

      triggerToast('error', message)
    }
  }

  const handleFindPassword = async () => {
    if (!('id' in form)) {
      return
    }

    try {
      const data = await findPasswordRequestApi({
        identifier: form.id,
        phone_number: form.phone,
        code: form.phoneCode,
      })
      triggerToast('success', data.message)

      router.push(ROUTES_PATHS.FIND_PASSWORD_RESULT_PAGE)
    } catch (error) {
      let message = '요청 처리 중 오류가 발생했습니다.'

      if (isAxiosError(error)) {
        const data = error.response?.data

        message = data?.detail || data?.message || data?.error_detail || message

        phoneTimer.reset()

        setForm((prev) => ({ ...prev, phoneCode: '' }))
      }

      triggerToast('error', message)
    }
  }

  const getPurpose = () => {
    if (isFindMode) {
      return 'find_account'
    }
    return 'password_reset'
  }

  const handleSendCodeWithValidation = async () => {
    const result = phoneOnlySchema.safeParse({
      phone: form.phone,
    })

    if (!result.success) {
      onError(result.error.issues[0].message)
      triggerToast('error', '인증번호 전송에 실패하였습니다.')
      return
    }

    try {
      const res = await sendCodeApi({
        phone_number: form.phone,
        purpose: getPurpose(),
      })
      setForm((prev) => ({ ...prev, phoneCode: res.code }))

      onError(null)

      phoneTimer.handleSendCode()

      triggerToast('success', '인증번호가 전송되었습니다.')
    } catch {
      phoneTimer.reset()

      onError('인증번호 전송에 실패했습니다.')

      triggerToast('error', '인증번호 전송이 실패하였습니다.')
    }
  }

  const handleVerifyCode = async () => {
    try {
      await verifyCodeApi({
        phone_number: form.phone,
        code: form.phoneCode,
        purpose: getPurpose(),
      })

      phoneTimer.handleVerifyCode()

      onError(null)
    } catch {
      phoneTimer.reset()

      setForm((prev) => ({ ...prev, phoneCode: '' }))

      onError(null)

      triggerToast('error', '인증번호가 올바르지 않습니다.')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <form
        className="mx-auto flex flex-col gap-5"
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        {!isFindMode && (
          <DuplicateCheckField
            id="findpassword-id"
            label="아이디"
            value={!isFindMode && 'id' in form ? form.id : ''}
            placeholder="아이디를 입력해 주세요."
            onChange={(value) => handleChange('id', value)}
            onCheck={() => {}}
            isFindPasswordMode={true}
          />
        )}
        <PhoneVerificationField
          phone={form.phone}
          code={form.phoneCode}
          onPhoneChange={(value) => handleChange('phone', value)}
          onCodeChange={(value) => handleChange('phoneCode', value)}
          isCodeSent={phoneTimer.isCodeSent}
          isCodeVerified={phoneTimer.isCodeVerified}
          remainingTime={phoneTimer.remainingTime}
          formatTime={phoneTimer.formatTime}
          handleSendCode={handleSendCodeWithValidation}
          handleVerifyCode={handleVerifyCode}
          idValue={isFindMode ? 'findId' : 'findPassword'}
        />
        <div className="mt-10 flex w-full flex-col">
          <Button
            type="submit"
            className="cursor-pointer bg-neutral-100/10 text-sm shadow-interactive-inactive hover:bg-main-purple md:text-lg"
          >
            {isFindMode ? '아이디 찾기' : '비밀번호 찾기'}
          </Button>
        </div>
      </form>
    </div>
  )
}
