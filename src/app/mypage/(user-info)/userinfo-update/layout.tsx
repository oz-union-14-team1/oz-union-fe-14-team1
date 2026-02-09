export default function UserInfoUpdateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-[calc(100dvh-5.25rem)] items-center justify-center overflow-hidden">
      <div className="flex max-w-140 flex-col text-text-light">{children}</div>
    </div>
  )
}
