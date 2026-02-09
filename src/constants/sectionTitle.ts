import { ROUTES_PATHS } from './routesPaths'

export const COMMON_SECTION_TITLES = {
  NEW_RELEASE: {
    title: '🔎 새로 나온 게임',
  },
} as const

// 비회원 전용 섹션
export const GUEST_SECTION_TITLES = {
  RECOMMEND_LOGIN_CTA: {
    title: '✨ 로그인하고 취향 추천 받기',
    href: ROUTES_PATHS.LOGIN_PAGE,
  },
  POPULAR: {
    title: '🕹️ 지금 인기 게임',
  },
  INTRODUCE: {
    title: '🚀 이런 게임은 어떠세요',
  },
} as const

// 회원 전용 섹션
export const USER_SECTION_TITLE = {
  PREFERENCE: {
    // aiTendency로 불러올 예정
    getTitle: (tendency: string) => `${tendency}님을 위한 추천`,
  },
  WHISHLIST: {
    title: '❤️ 찜한 게임 기반 추천',
  },
} as const
