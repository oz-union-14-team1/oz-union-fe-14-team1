import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

type SectionTitleProps = {
  title: string
  href?: string
  showArrow?: boolean
}

export default function SectionTitle({
  title,
  href,
  showArrow = true,
}: SectionTitleProps) {
  const content = (
    <>
      {title}
      {showArrow && <ChevronRight size={16} />}
    </>
  )

  return (
    <h2 className="flex items-center gap-2 font-bold text-text-light">
      {href ? (
        <Link href={href} className="flex items-center gap-1 hover:underline">
          {content}
        </Link>
      ) : (
        <span className="flex items-center gap-1">{content}</span>
      )}
    </h2>
  )
}
