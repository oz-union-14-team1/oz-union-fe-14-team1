export const STEP_CONFIG = {
  tag: {
    prev: null,
    next: { path: '/recommendation/genre', label: '다음 단계로 이동' },
  },
  genre: {
    prev: { path: '/recommendation/tag', label: '이전 단계로 돌아가기' },
    next: { path: '/recommendation/result', label: '다음 단계로 이동' },
  },
  result: {
    prev: { path: '/recommendation/genre', label: '이전 단계로 돌아가기' },
    next: { path: '/', label: '🎮 추천게임 보러가기' },
  },
}
