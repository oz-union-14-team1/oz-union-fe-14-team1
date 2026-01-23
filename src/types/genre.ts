export type Genre = {
  id: number
  name: string
  slug: GenreSlug
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
