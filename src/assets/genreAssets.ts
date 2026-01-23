import { GenreSlug } from '@/types'

export const GENRE_ASSETS: Record<
  GenreSlug,
  {
    vertical: string
  }
> = {
  adventure: {
    vertical: '/images/genres/vertical/adventure.png',
  },
  action: {
    vertical: '/images/genres/vertical/action.png',
  },
  shooting: {
    vertical: '/images/genres/vertical/shooting.png',
  },
  rpg: {
    vertical: '/images/genres/vertical/rpg.png',
  },
  simulation: {
    vertical: '/images/genres/vertical/simulation.png',
  },
  roguelike: {
    vertical: '/images/genres/vertical/roguelike.png',
  },
  puzzle: {
    vertical: '/images/genres/vertical/puzzle.png',
  },
  survival: {
    vertical: '/images/genres/vertical/survival.png',
  },
  arcade: {
    vertical: '/images/genres/vertical/arcade.png',
  },
  racing: {
    vertical: '/images/genres/vertical/racing.png',
  },
  horror: {
    vertical: '/images/genres/vertical/horror.png',
  },
  sports: {
    vertical: '/images/genres/vertical/sports.png',
  },
}
