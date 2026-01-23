const variants = [
  'lightcyan',
  'cyan',
  'purple',
  'darksky',
  'lightpurple',
] as const

export const getTagVariant = (index: number) => {
  return variants[index % variants.length]
}
