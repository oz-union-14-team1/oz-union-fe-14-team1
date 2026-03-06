type ResponsiveTextProps = {
  children: React.ReactNode
  mobile?: React.ReactNode
}

export function ResponsiveText({ children, mobile }: ResponsiveTextProps) {
  if (!mobile) {
    return <>{children}</>
  }

  return (
    <>
      <span className="md:hidden">{mobile}</span>
      <span className="hidden md:inline">{children}</span>
    </>
  )
}
