import { GenreSlug } from '@/types'

export const GENRE_ASSETS: Record<
  GenreSlug,
  {
    vertical: string
    horizontal: string
    position: string
  }
> = {
  adventure: {
    vertical: '/images/genres/vertical/adventure.png',
    horizontal: '/images/genres/horizontal/adventure.png',
    position: 'center',
  },
  action: {
    vertical: '/images/genres/vertical/action.png',
    horizontal: '/images/genres/horizontal/action.png',
    position: 'top',
  },
  shooting: {
    vertical: '/images/genres/vertical/shooting.png',
    horizontal: '/images/genres/horizontal/shooting.png',
    position: 'top',
  },
  rpg: {
    vertical: '/images/genres/vertical/rpg.png',
    horizontal: '/images/genres/horizontal/rpg2.png',
    position: 'center',
  },
  simulation: {
    vertical: '/images/genres/vertical/simulation.png',
    horizontal: '/images/genres/horizontal/simulation.png',
    position: 'center',
  },
  roguelike: {
    vertical: '/images/genres/vertical/roguelike.png',
    horizontal: '/images/genres/horizontal/roguelike.png',
    position: 'center',
  },
  puzzle: {
    vertical: '/images/genres/vertical/puzzle.png',
    horizontal: '/images/genres/horizontal/puzzle.png',
    position: 'center',
  },
  survival: {
    vertical: '/images/genres/vertical/survival.png',
    horizontal: '/images/genres/horizontal/survival.png',
    position: 'center',
  },
  horror: {
    vertical: '/images/genres/vertical/horror.png',
    horizontal: '/images/genres/horizontal/horror2.png',
    position: 'center',
  },

  racing: {
    vertical: '/images/genres/vertical/racing.png',
    horizontal: '/images/genres/horizontal/racing.png',
    position: 'center',
  },
  arcade: {
    vertical: '/images/genres/vertical/arcade.png',
    horizontal: '/images/genres/horizontal/arcade.png',
    position: 'center',
  },
  sports: {
    vertical: '/images/genres/vertical/sports.png',
    horizontal: '/images/genres/horizontal/sports.png',
    position: 'center',
  },
}
