import Link from 'next/link'
import Image from 'next/image'
import { LogoIcon, LogoTextIcon } from '@/assets'

export default function LogoUi() {
  return (
    <Link href="/" className="flex shrink-0 items-center">
      <Image
        src={LogoIcon}
        alt="Logo Icon"
        className="w-[100px]"
        width={100}
        priority
      />
      <Image
        src={LogoTextIcon}
        alt="Logo Text Icon"
        className="hidden pl-3 lg:block"
        width={105}
        priority
      />
    </Link>
  )
}
