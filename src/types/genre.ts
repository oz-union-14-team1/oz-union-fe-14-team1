export type Genre = {
  id: number
  name: string
  slug: GenreSlug
}

export type GenreWithMeta = Genre & {
  description: string
  backgroundImage: string
}

export type GenreSlug =
  | 'adventure'
  | 'action'
  | 'shooting'
  | 'rpg'
  | 'simulation'
  | 'puzzle'
  | 'roguelike'
  | 'survival'
  | 'arcade'
  | 'racing'
  | 'horror'
  | 'sports'
