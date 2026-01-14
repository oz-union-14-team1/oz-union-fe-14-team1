import Image from 'next/image'
import Link from 'next/link'

import { logo, logoText } from '@/assets'

export default function LogoUi() {
  return (
    <Link href="/" className="flex shrink-0 items-center">
      <Image src={logo} alt="Logo Image" className="w-25" />
      <Image
        src={logoText}
        alt="Logo Text Image"
        className="hidden w-26 pl-3 lg:block"
      />
    </Link>
  )
}
