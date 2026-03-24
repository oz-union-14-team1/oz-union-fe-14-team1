import { Game } from '@/types/api-response/game-response'

export const getDayDiffFromNow = (createdAt: string | Date) => {
  const now = new Date()
  const createdDate = new Date(createdAt)

  // 밀리초 → 일(day) 단위 변환
  const diffTime = now.getTime() - createdDate.getTime()
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

  return diffDays
}

export const formatDate = (dateStr: string) => {
  return new Date(dateStr).toISOString().slice(0, 10)
}

// 연도로 비교 후 최신게임 6개 추출
export const getLatestGames = (games: Game[]) =>
  [...games]
    .sort(
      (a, b) =>
        new Date(b.releasedAt).getTime() - new Date(a.releasedAt).getTime()
    )
    .slice(0, 6)

// releasedAt에서 연도 추출 후 중복제거
export const getUniqueYears = (games: Game[]) => {
  const years = games.map((game) => Number(game.releasedAt.slice(0, 4)))
  return [...new Set(years)].sort((a, b) => b - a)
}
