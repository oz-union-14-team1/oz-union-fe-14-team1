import Image from 'next/image'

import { compoundLogoColumn } from '@/assets'
import FindAccountForm from '@/components/feature/auth/find-account/FindAccountForm'

export default function FindIdPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-1 flex flex-col">
        <Image src={compoundLogoColumn} alt="PlayTypeLogo" priority />
      </div>
      <FindAccountForm mode="id" />
    </div>
  )
}
