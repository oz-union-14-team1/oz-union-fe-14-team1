export const MSW_BASE_URL = 'https://msw/api/v1'

export const API_PATH = {
  REVIEW_DETAIL_API_PATH: (review_id: string) =>
    `/community/reviews/${review_id}/comments`,

  GAMES: '/games',
  GAME_DETAIL: (gameId: number) => `/games/${gameId}`,
  GAME_BY_GENRE: (genreId: number) => `/games?/genre_id=${genreId}`, // 백엔드 api명세서 업데이트 확인 후 수정 예정
} as const
