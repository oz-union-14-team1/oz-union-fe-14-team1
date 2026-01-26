export const ROUTES_PATHS = {
  MAIN_PAGE: '/',
  SIGNUP_PAGE: '/signup',
  LOGIN_PAGE: '/login',
  FIDN_ID_PAGE: '/find-id',
  FIND_PASSWORD_PAGE: '/find-password',
  FIDN_ID_RESULT_PAGE: '/find-id/result',
  FIND_PASSWORD_RESULT_PAGE: '/find-password/result',
  USER_DELETE_PAGE: '/mypage/user-info/user-delete',
  USER_DELETE_RESULT_PAGE: '/mypage/user-info/user-delete/result',

  GENRE_BASE: '/genre',
  GENRE_DETAIL: (slug: string) => `/genre/${slug}`,
}

export const RECOMMEND_PATHS = {
  BASE: '/recommendation',
  TAG: '/recommendation/tag',
  GENRE: '/recommendation/genre',
  RESULT: '/recommendation/result',
}
