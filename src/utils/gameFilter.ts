import { Game } from '@/types/api-response/game-response'

// 최신순
export const getLatestGames = (games: Game[]) =>
  [...games]
    .sort(
      (a, b) =>
        new Date(b.releasedAt).getTime() - new Date(a.releasedAt).getTime()
    )
    .slice(0, 6)
