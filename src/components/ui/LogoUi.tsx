import Link from 'next/link'
import Image from 'next/image'
import { LogoImg, LogoTextImg } from '@/assets'

export default function LogoUi() {
  return (
    <Link href="/" className="flex shrink-0 items-center">
      <Image src={LogoImg} alt="Logo Image" className="w-25" />
      <Image
        src={LogoTextImg}
        alt="Logo Text Image"
        className="hidden w-26 pl-3 lg:block"
      />
    </Link>
  )
}
