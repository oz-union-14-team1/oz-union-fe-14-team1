export const MSW_BASE_URL = 'https://msw/api/v1'

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? ''

export const API_PATH = {
  REVIEW_PATCH_DELETE_API_PATH: (review_id: string) =>
    `/community/reviews/${review_id}`,
  REVIEW_DETAIL_API_PATH: (review_id: string) =>
    `/community/reviews/${review_id}/comments`,
  GAMES: '/games',
  GAME_DETAIL: (gameId: number) => `/game/${gameId}`,
  LOGIN_API_PATH: '/user/login',
  SIGNUP_API_PATH: '/user/signup',
  /**
   * TODO: 리프레쉬 refresh api 추가 예정
   */
  LOGIN_REFRESH_API_PATH: '/',
  USER_INFO_GET_API_PATH: '/user/me',
  MAIN_PAGE: '/',
  FIND_ID_API_PATH: '/user/find-account',
} as const
