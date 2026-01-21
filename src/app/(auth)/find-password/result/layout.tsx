export default function FindPasswordResultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full max-w-140 px-12 py-9 text-center md:px-20 md:py-10">
      {children}
    </div>
  )
}
