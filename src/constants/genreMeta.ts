import { GenreSlug } from '@/assets/genre-assets/genreData'

/**
 * 장르별 메타 정보
 * - API에 없는 프론트 전용 데이터 (description 등)
 * - 장르 상세 페이지 헤더에서 사용
 */
export const GENRE_META: Partial<
  Record<
    GenreSlug,
    {
      description: string
      bgPosition: 'top' | 'center' | 'bottom'
    }
  >
> = {
  adventure: {
    description: '당신의 플레이가 모험을 만듭니다.',
    bgPosition: 'center',
  },
  action: {
    description: '긴장감 넘치는 전투를 경험하세요.',
    bgPosition: 'top',
  },
  shooter: { description: '정밀한 조준, 짜릿한 승리.', bgPosition: 'top' },
  'role-playing-games-rpg': {
    description: '나만의 캐릭터로 새로운 세계를 탐험하세요.',
    bgPosition: 'center',
  },
  simulation: {
    description: '현실을 넘어선 경험을 시작하세요.',
    bgPosition: 'top',
  },
  puzzle: {
    description: '두뇌를 자극하는 도전이 기다립니다.',
    bgPosition: 'center',
  },
  strategy: {
    description: '매번 다른 도전, 끝없는 재미.',
    bgPosition: 'center',
  },
  fighting: { description: '생존 본능을 깨워라.', bgPosition: 'center' },
  arcade: {
    description: '클래식한 재미, 언제나 즐거움.',
    bgPosition: 'top',
  },
  racing: { description: '속도의 짜릿함을 느껴보세요.', bgPosition: 'center' },
  platformer: {
    description: '공포 속으로 빠져들 준비 되셨나요?',
    bgPosition: 'top',
  },
  sports: { description: '경기장의 열기를 느껴보세요.', bgPosition: 'center' },
  'massively-multiplayer': {
    description: '전 세계 플레이어와 함께하는 대규모 모험.',
    bgPosition: 'center',
  },
  indie: {
    description: '독창적인 아이디어로 만든 특별한 게임.',
    bgPosition: 'center',
  },
  casual: {
    description: '누구나 쉽게 즐길 수 있는 게임.',
    bgPosition: 'center',
  },
}

export const BG_POSITION_MAP = {
  top: 'bg-top',
  center: 'bg-center',
  bottom: 'bg-bottom',
} as const
