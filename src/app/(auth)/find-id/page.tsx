import Image from 'next/image'

import { compoundLogoColumn } from '@/assets'
import { FindAccountContainer } from '@/components'

export default function FindIdPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col">
        <Image
          src={compoundLogoColumn}
          alt="PlayTypeLogo"
          priority
          className="mb-4 w-30 md:w-40"
        />
      </div>
      <FindAccountContainer mode="id" />
    </div>
  )
}
