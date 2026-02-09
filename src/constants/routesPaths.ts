export const ROUTES_PATHS = {
  MAIN_PAGE: '/',
  SEARCH_PAGE: '/search',
  SIGNUP_PAGE: '/signup',
  LOGIN_PAGE: '/login',
  FIDN_ID_PAGE: '/find-id',
  FIND_PASSWORD_PAGE: '/find-password',
  FIDN_ID_RESULT_PAGE: '/find-id/result',
  FIND_PASSWORD_RESULT_PAGE: '/find-password/result',
  COMMUNITY_PAGE: '/community',

  GENRE_BASE: '/genre',
  GENRE_DETAIL: (slug: string) => `/genre/${slug}`,

  GAME_DETAIL: (id: number | string) => `/review/${id}`,

  MY_PAGE: '/mypage',
  USER_DELETE_PAGE: '/mypage/user-delete',
  USER_DELETE_RESULT_PAGE: '/mypage/user-delete/result',
  USER_PW_CHECK_PAGE: '/mypage/pw-check',
  USER_INFO_UPDATE_PAGE: '/mypage/userinfo-update',

  RECOMMEND: {
    BASE: '/recommendation',
    TAG: '/recommendation/tag',
    GENRE: '/recommendation/genre',
    RESULT: '/recommendation/result',
  },
} as const
