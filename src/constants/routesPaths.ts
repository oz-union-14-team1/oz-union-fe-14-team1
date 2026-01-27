export const ROUTES_PATHS = {
  MAIN_PAGE: '/',
  SEARCH_PAGE: '/search',
  MYPAGE_PAGE: '/mypage',
  SIGNUP_PAGE: '/signup',
  LOGIN_PAGE: '/login',
  FIDN_ID_PAGE: '/find-id',
  FIND_PASSWORD_PAGE: '/find-password',
  FIDN_ID_RESULT_PAGE: '/find-id/result',
  FIND_PASSWORD_RESULT_PAGE: '/find-password/result',
  USER_DELETE_PAGE: '/mypage/user-info/user-delete',
  USER_DELETE_RESULT_PAGE: '/mypage/user-info/user-delete/result',
  COMMUNITY_PAGE: '/community',

  GENRE_BASE: '/genre',
  GENRE_DETAIL: (slug: string) => `/genre/${slug}`,
  MY_PAGE: '/mypage',
  USER_PW_CHECK_PAGE: '/mypage/user-info/pw-check',
  USER_INFO_UPDATE_PAGE: '/mypage/user-info/pw-check/userinfo-update',
}

export const RECOMMEND_PATHS = {
  BASE: '/recommendation',
  TAG: '/recommendation/tag',
  GENRE: '/recommendation/genre',
  RESULT: '/recommendation/result',
}
