import { ReactNode } from 'react'

import GameIcon from '@/assets/icons/GameIcon'

type CommunityOptionsProp = {
  label: ReactNode
  value: string
}

export const COMMUNITY_OPTIONS: CommunityOptionsProp[] = [
  {
    label: (
      <span className="flex items-center gap-2">
        <GameIcon className="size-5" />
        전체
      </span>
    ),
    value: 'all',
  },
  {
    label: '액션',
    value: 'action',
  },
  {
    label: '레이싱',
    value: 'racing',
  },
  {
    label: '스포츠',
    value: 'sports',
  },
]
