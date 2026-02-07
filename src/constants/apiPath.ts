export const MSW_BASE_URL = 'https://msw/api/v1'

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? ''
export const BACK_API_URL = process.env.NEXT_PUBLIC_BACK_API_URL ?? ''
export const GOOGLE_CLIENT_ID_URL =
  process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? ''

export const API_PATH = {
  REVIEW_PATCH_DELETE_API_PATH: (review_id: string) =>
    `/community/reviews/${review_id}`,
  REVIEW_DETAIL_API_PATH: (review_id: string) =>
    `/community/reviews/${review_id}/comments`,
  GET_MY_REVIEWS_API_PATH: '/community/reviews/me',
  GAMES: '/games',
  GAME_DETAIL: (gameId: number) => `/game/${gameId}`,
  GAMES_RECOMMEND_PREFERENCE: `/game/recommend/preference`,
  GAMES_RECOMMEND_WISHLIST: '/game/recommend/wishlist',
  LOGIN_API_PATH: '/user/login',
  SIGNUP_API_PATH: '/user/signup',
  LOGIN_REFRESH_API_PATH: '/user/token/refresh',
  USER_ME_API_PATH: '/user/me',
  MAIN_PAGE: '/',
  FIND_ID_API_PATH: '/user/find-account',
  USER_DELETE_API_PATH: '/user/me/delete',
  USER_LOGOUT_API_PATH: '/user/logout',
  GET_WISHLIST_API_PATH: '/game/wishlist',
  POST_WISHLIST_API_PATH: '/game/wishlist',
  DELETE_WISHLIST_API_PATH: (wishlistId: number) =>
    `/game/wishlist/${wishlistId}`,
  GET_PROFILE_IMAGE_API_PATH: '/user/me/image',
  POST_PROFILE_IMAGE_API_PATH: '/user/me/image',
  CHECK_EMAIL_API_PATH: '/user/check-email',
  CHECK_NICKNAME_API_PATH: '/user/check-nickname',
  DELETE_PROFILE_IMAGE_API_PATH: '/user/me/image',
  GOOGLE_LOGIN_API_PATH: '/user/google/login',
} as const
