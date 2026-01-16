export default function SignupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-[calc(100dvh-5.25rem)] items-center justify-center overflow-hidden bg-text-dark">
      <div className="flex max-w-155 flex-col items-center justify-center bg-gradient-main text-text-light">
        {children}
      </div>
    </div>
  )
}
