export const MSW_BASE_URL = 'https://msw/api/v1'

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? ''

export const API_PATH = {
  REVIEW_DETAIL_API_PATH: (review_id: string) =>
    `/community/reviews/${review_id}/comments`,
  GAMES: '/games',
  GAME_DETAIL: (gameId: number) => `/games/${gameId}`,
  LOGIN_API_PATH: '/user/login/',
} as const
