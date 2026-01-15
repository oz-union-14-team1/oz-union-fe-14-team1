import Image from 'next/image'
type AvatarProps = React.ComponentProps<'div'> & {
  src?: string | null
  alt: string
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
      className={`relative h-[50px] w-[50px] overflow-hidden rounded-full bg-gray-200 ${className}`}
      {...props}
    >
      {src ? (
        <Image src={src} alt={alt} fill className="object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-sm">
          {fallback || alt}
        </div>
      )}
    </div>
  )
}
