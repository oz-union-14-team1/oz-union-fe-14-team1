import { Badge } from '@/components/common'

import type { GameDetail } from '@/types/api-response/game-response'

type GameInfoProps = {
  gameDetail: GameDetail
}

export const GameInfo = ({ gameDetail: data }: GameInfoProps) => {
  const labelStyle = 'text-sm text-gray-500'

  return (
    <div className="w-full rounded-xl border border-gray-700 bg-surface-elevated p-6 shadow-lg">
      <h2 className="mb-4 text-xl font-bold text-white">게임 정보</h2>
      <div className="grid-cols grid gap-y-4 border-t border-gray-800 pt-4">
        <div className="flex flex-col gap-1">
          <span className={labelStyle}>플랫폼</span>
          <div className="flex flex-wrap gap-2">
            {data.platforms?.map((platform) => (
              <Badge
                key={platform}
                variant={'purple'}
                size={'md'}
                className="font-bold text-white"
              >
                {platform}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className={labelStyle}>개발사</span>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={'purple'}
              size={'md'}
              className="font-bold text-white"
            >
              {data.developer}
            </Badge>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className={labelStyle}>퍼블리셔</span>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={'purple'}
              size={'md'}
              className="font-bold text-white"
            >
              {data.publisher}
            </Badge>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className={labelStyle}>장르</span>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={'purple'}
              size={'md'}
              className="font-bold text-white"
            >
              {data.genres}
            </Badge>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className={labelStyle}>출시일</span>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={'purple'}
              size={'md'}
              className="font-bold text-white"
            >
              {new Date(data.releasedAt).toDateString()}
            </Badge>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-1">
          <span className={labelStyle}>Intro</span>
          <div>{data.intro}</div>
        </div>
      </div>
    </div>
  )
}
