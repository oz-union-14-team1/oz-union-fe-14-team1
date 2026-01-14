import { ComponentProps } from 'react'

type AvatarProps = ComponentProps<'div'> & {
  src?: string | null
  alt?: string
  fallback?: string
}

export default function Avatar({
  src,
  alt,
  fallback,
  className,
  ...props
}: AvatarProps) {
  return (
    <div
      className={`h-[50px] w-[50px] shrink-0 overflow-hidden rounded-full bg-gray-200 ${className}`}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : null}
    </div>
  )
}
