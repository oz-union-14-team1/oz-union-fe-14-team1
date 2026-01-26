export const getDayDiffFromNow = (createdAt: string | Date) => {
  const now = new Date()
  const createdDate = new Date(createdAt)

  // 밀리초 → 일(day) 단위 변환
  const diffTime = now.getTime() - createdDate.getTime()
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

  return diffDays
}
