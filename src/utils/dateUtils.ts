import { Game } from '@/types/api-response/game-response'

export const getDayDiffFromNow = (createdAt: string | Date) => {
  const now = new Date()
  const createdDate = new Date(createdAt)

  // 밀리초 → 일(day) 단위 변환
  const diffTime = now.getTime() - createdDate.getTime()
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

  return diffDays
}

export const getLatestGames = (games: Game[]) =>
  [...games]
    .sort(
      (a, b) =>
        new Date(b.releasedAt).getTime() - new Date(a.releasedAt).getTime()
    )
    .slice(0, 6)
