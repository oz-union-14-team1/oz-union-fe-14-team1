import { Genre } from './api-response/onboarding-response'

export type GenreWithMeta = Genre & {
  description: string
  backgroundImage: string
}
export type GenreAsset = {
  vertical: string
  horizontal: string
  position: 'center' | 'top' | 'bottom'
}
export type GenreSlug =
  | 'adventure'
  | 'action'
  | 'shooter'
  | 'role-playing-games-rpg'
  | 'simulation'
  | 'strategy'
  | 'puzzle'
  | 'platformer'
  | 'fighting'
  | 'racing'
  | 'arcade'
  | 'sports'
  | 'massively-multiplayer'
  | 'indie'
  | 'casual'
