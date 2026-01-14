import LoginForm from '@/components/feature/auth/LoginForm'

export default function LoginFormTestPage() {
  return (
    <div className="relative flex min-h-[calc(100dvh-5.25rem)] items-center justify-center overflow-hidden bg-text-dark">
      <div className="flex max-w-140 flex-col items-center justify-center [background-image:var(--gradient-main)] text-text-light">
        <LoginForm />
      </div>
    </div>
  )
}
