import {
  DEFAULT_GENRE_IMAGE,
  GENRE_ASSETS,
} from '@/assets/genre-assets/genreData'
import { GENRE_NAMES_KR } from '@/assets/genre-assets/genreName'
import { Genre } from '@/types/api-response/onboarding-response'
import { GenreSlug } from '@/types/genre'

export function getGenreAsset(genre: string) {
  return GENRE_ASSETS[genre as GenreSlug] || DEFAULT_GENRE_IMAGE
}

export function getGenreImage(
  genre: string,
  type: 'vertical' | 'horizontal' = 'vertical'
): string {
  return GENRE_ASSETS[genre as GenreSlug]?.[type] || DEFAULT_GENRE_IMAGE[type]
}

export function filterAndMapGenres(apiGenres: Genre[]) {
  return apiGenres
    .filter((genre) => genre.slug in GENRE_ASSETS)
    .map((genre) => ({
      ...genre,
      koreanName: GENRE_NAMES_KR[genre.slug as GenreSlug] || genre.genre,
    }))
}
