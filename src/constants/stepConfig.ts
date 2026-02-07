import { ROUTES_PATHS } from './routesPaths'

export const STEP_CONFIG = {
  tag: {
    prev: null,
    next: {
      path: ROUTES_PATHS.RECOMMEND.GENRE,
      label: '다음 단계로 이동',
      mobileLabel: '다음',
    },
  },
  genre: {
    prev: {
      path: ROUTES_PATHS.RECOMMEND.TAG,
      label: '이전 단계로 돌아가기',
      mobileLabel: '이전',
    },
    next: {
      path: ROUTES_PATHS.RECOMMEND.RESULT,
      label: '다음 단계로 이동',
      mobileLabel: '다음',
    },
  },
  result: {
    prev: {
      path: ROUTES_PATHS.RECOMMEND.GENRE,
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
