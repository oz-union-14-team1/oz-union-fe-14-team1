export function shuffle<T>(array: T[]) {
  const result = [...array]

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }

  return result
}

/**
 * 배열에서 N개추출
 */
export function getRandomItems<T>(array: T[], count: number): T[] {
  return shuffle(array).slice(0, count)
}
