/**
 * 문자열을 스네이크 케이스에서 카멜 케이스로 변환.
 */
const toCamelCase = (str: string): string =>
  str.replace(/([-_][a-zA-Z])/gi, (match: string) =>
    match.toUpperCase().replace('-', '').replace('_', '')
  )

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' &&
  value !== null &&
  Object.prototype.toString.call(value) === '[object Object]'

/**
 * 객체 또는 배열의 모든 키를 재귀적으로 카멜 케이스로 변환.
 */
export const convertToCamelCase = <T>(data: T): T => {
  if (Array.isArray(data)) {
    return data.map((item) => convertToCamelCase(item)) as T
  }

  if (isPlainObject(data)) {
    if (
      data instanceof Date ||
      data instanceof File ||
      data instanceof FormData ||
      data instanceof Map ||
      data instanceof Set
    ) {
      return data
    }
    const result: Record<string, unknown> = {}

    for (const key of Object.keys(data)) {
      const camelKey = toCamelCase(key)
      const value = (data as Record<string, unknown>)[key]

      result[camelKey] = convertToCamelCase(value)
    }

    return result as T
  }

  return data
}
