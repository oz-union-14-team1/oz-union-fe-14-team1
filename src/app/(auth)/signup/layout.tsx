export default function SignupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-[calc(100dvh-5.25rem)] items-center justify-center overflow-hidden">
      <div className="px-10 py-10 text-text-light md:max-w-155">{children}</div>
    </div>
  )
}
