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
  const imageNode = src ? <Image src={src} alt={alt} /> : null
  return <>{imageNode}</>
}
