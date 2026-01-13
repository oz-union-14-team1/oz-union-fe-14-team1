import Link from 'next/link'
import Image from 'next/image'
import { LogoImg, LogoTextImg } from '@/assets'

export default function LogoUi() {
  return (
    <Link href="/" className="flex shrink-0 items-center">
      <Image
        src={LogoImg}
        alt="Logo Image"
        className="w-[100px]"
        width={100}
        priority
      />
      <Image
        src={LogoTextImg}
        alt="Logo Text Image"
        className="hidden pl-3 lg:block"
        width={105}
        priority
      />
    </Link>
  )
}
