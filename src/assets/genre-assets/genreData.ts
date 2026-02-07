import {
  FALLBACK_IMG_HORIZONTAL,
  FALLBACK_IMG_VERTICAL,
} from '@/constants/fallback'

export const GENRE_ASSETS = {
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
  shooter: {
    vertical: '/images/genres/vertical/shooting.png',
    horizontal: '/images/genres/horizontal/shooting.png',
    position: 'top',
  },
  'role-playing-games-rpg': {
    vertical: '/images/genres/vertical/rpg.png',
    horizontal: '/images/genres/horizontal/rpg2.png',
    position: 'center',
  },
  simulation: {
    vertical: '/images/genres/vertical/simulation.png',
    horizontal: '/images/genres/horizontal/simulation.png',
    position: 'center',
  },
  strategy: {
    vertical: '/images/genres/vertical/strategy.png',
    horizontal: '/images/genres/horizontal/strategy.png',
    position: 'center',
  },
  puzzle: {
    vertical: '/images/genres/vertical/puzzle.png',
    horizontal: '/images/genres/horizontal/puzzle.png',
    position: 'center',
  },
  platformer: {
    vertical: '/images/genres/vertical/platformer.png',
    horizontal: '/images/genres/horizontal/platform.png',
    position: 'center',
  },
  fighting: {
    vertical: '/images/genres/vertical/fighting.png',
    horizontal: '/images/genres/horizontal/fighting.png',
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
  'massively-multiplayer': {
    vertical: '/images/genres/vertical/mmo.png',
    horizontal: 'images/genres/vertical/mmo.png',
    position: 'center',
  },
  indie: {
    vertical: '/images/genres/vertical/indie.png',
    horizontal: '/images/genres/vertical/indie.png',
    position: 'center',
  },
  casual: {
    vertical: '/images/genres/vertical/casual.png',
    horizontal: '/images/genres/horizontal/casual.png',
    position: 'center',
  },
} as const

export type GenreSlug = keyof typeof GENRE_ASSETS

export const DEFAULT_GENRE_IMAGE = {
  vertical: FALLBACK_IMG_VERTICAL,
  horizontal: FALLBACK_IMG_HORIZONTAL,
  position: 'center',
}

export const EXCLUDED_SLUGS = ['indie', 'casual', 'strategy'] as const
