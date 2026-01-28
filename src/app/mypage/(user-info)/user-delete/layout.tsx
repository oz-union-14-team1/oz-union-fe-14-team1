export default function UserDeleteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-[calc(100dvh-5.25rem)] items-center justify-center overflow-hidden text-text-light">
      <div className="w-full max-w-120">{children}</div>
    </div>
  )
}
