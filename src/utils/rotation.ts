export function rotateNext<T>(arr: T[]): T[] {
  if (arr.length === 0) {
    return arr
  }
  const [first, ...rest] = arr
  return [...rest, first]
}

export function rotatePrev<T>(arr: T[]): T[] {
  if (arr.length === 0) {
    return arr
  }
  const last = arr[arr.length - 1]
  return [last, ...arr.slice(0, -1)]
}

export function rotateToIndex<T>(arr: T[], index: number): T[] {
  if (index < 0 || index >= arr.length) {
    return arr
  }
  return [...arr.slice(index), ...arr.slice(0, index)]
}

export function rotateToId<T extends { id: number | string }>(
  arr: T[],
  id: number | string
): T[] {
  const index = arr.findIndex((item) => item.id === id)
  if (index === -1) {
    return arr
  }
  return rotateToIndex(arr, index)
}
