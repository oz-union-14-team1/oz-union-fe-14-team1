import { ROUTES_PATHS } from './routesPaths'

export const STEP_CONFIG = {
  tag: {
    prev: null,
    next: {
      path: '/recommendation/genre',
      label: '다음 단계로 이동',
      mobileLabel: '다음',
    },
  },
  genre: {
    prev: {
      path: '/recommendation/tag',
      label: '이전 단계로 돌아가기',
      mobileLabel: '이전',
    },
    next: {
      path: '/recommendation/result',
      label: '다음 단계로 이동',
      mobileLabel: '다음',
    },
  },
  result: {
    prev: {
      path: '/recommendation/genre',
      label: '이전 단계로 돌아가기',
      mobileLabel: '이전',
    },
    next: {
      path: ROUTES_PATHS.MAIN_PAGE,
      label: '🎮 추천게임 보러가기',
      mobileLabel: '추천게임 보기',
    },
  },
}
