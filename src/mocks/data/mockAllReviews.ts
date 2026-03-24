import { CommunityReviewList } from '@/types/api-response/review-response'

export const MOCK_COMMUNITY_REVIEWS: CommunityReviewList = {
  count: 8,
  next: null,
  previous: null,
  results: [
    {
      id: 1,
      gameName: 'Cyberpunk 2077',
      gameTitle: 'Cyberpunk 2077',
      gameGenres: ['액션', 'RPG'],
      author: { id: 1, nickname: '제시', profileImgUrl: null },
      content:
        '스토리와 그래픽이 정말 훌륭합니다. 초반 버그가 많았지만 패치 이후 많이 개선되었어요. 나이트 시티의 방대한 오픈월드는 정말 압도적이었고, 사이드 퀘스트들의 퀄리티도 메인 스토리 못지않게 훌륭했습니다.',
      rating: 4.5,
      likeCount: 24,
      createdAt: '2024-01-15T00:00:00Z',
    },
    {
      id: 2,
      gameName: 'The Witcher 3',
      gameTitle: 'The Witcher 3: Wild Hunt',
      gameGenres: ['RPG', '어드벤처'],
      author: { id: 2, nickname: '아서', profileImgUrl: null },
      content:
        '역대 최고의 RPG 중 하나입니다. 방대한 오픈 월드와 깊이 있는 스토리, 매력적인 캐릭터들까지 모든 것이 완벽했습니다. DLC까지 모두 플레이했는데 정말 만족스러웠어요.',
      rating: 5,
      likeCount: 42,
      createdAt: '2024-01-10T00:00:00Z',
    },
    {
      id: 3,
      gameName: 'Elden Ring',
      gameTitle: 'Elden Ring',
      gameGenres: ['액션', 'RPG'],
      author: { id: 3, nickname: '거럴트', profileImgUrl: null },
      content:
        '난이도가 상당히 높지만 그만큼 성취감도 큽니다. 오픈 월드 탐험의 재미와 보스전의 긴장감이 일품이에요. 시간 가는 줄 모르고 플레이했습니다.',
      rating: 4,
      likeCount: 18,
      createdAt: '2024-01-05T00:00:00Z',
    },
    {
      id: 4,
      gameName: "Baldur's Gate 3",
      gameTitle: "Baldur's Gate 3",
      gameGenres: ['RPG', '전략'],
      author: { id: 4, nickname: '엘리트마법사', profileImgUrl: null },
      content:
        'CRPG의 정수를 보여주는 게임입니다. 선택의 자유도가 정말 높고 각 캐릭터들의 스토리도 매력적이에요. 친구들과 협동 플레이도 정말 재미있습니다.',
      rating: 5,
      likeCount: 37,
      createdAt: '2023-12-20T00:00:00Z',
    },
    {
      id: 5,
      gameName: 'Red Dead Redemption 2',
      gameTitle: 'Red Dead Redemption 2',
      gameGenres: ['액션', '어드벤처'],
      author: { id: 5, nickname: '카우보이', profileImgUrl: null },
      content:
        '영화 같은 스토리텔링과 생동감 넘치는 오픈 월드. 디테일이 정말 놀랍습니다. 초반 페이스가 느린 편이지만 스토리에 빠져들면 손을 놓을 수가 없어요.',
      rating: 4.5,
      likeCount: 29,
      createdAt: '2023-12-15T00:00:00Z',
    },
    {
      id: 6,
      gameName: 'Hades',
      gameTitle: 'Hades',
      gameGenres: ['액션', '로그라이크'],
      author: { id: 6, nickname: '자그레우스', profileImgUrl: null },
      content:
        '로그라이크 장르의 새로운 기준을 세운 게임입니다. 죽을 때마다 스토리가 진행되는 구조가 정말 독특하고, 전투도 빠르고 짜릿해요. 인디 게임이라고 무시하면 안 됩니다.',
      rating: 5,
      likeCount: 55,
      createdAt: '2023-12-10T00:00:00Z',
    },
    {
      id: 7,
      gameName: 'Valorant',
      gameTitle: 'Valorant',
      gameGenres: ['액션', 'FPS'],
      author: { id: 7, nickname: '헤드샷장인', profileImgUrl: null },
      content:
        '전략적인 FPS를 좋아한다면 추천합니다. 캐릭터마다 고유한 스킬이 있어서 팀 플레이가 중요해요. 경쟁전이 치열해서 초보자에게는 다소 어려울 수 있습니다.',
      rating: 2.5,
      likeCount: 11,
      createdAt: '2023-12-05T00:00:00Z',
    },
    {
      id: 8,
      gameName: 'Stardew Valley',
      gameTitle: 'Stardew Valley',
      gameGenres: ['시뮬레이션', 'RPG'],
      author: { id: 8, nickname: '힐링농부', profileImgUrl: null },
      content:
        '지친 일상에서 도피하고 싶을 때 딱 맞는 게임입니다. 농사, 낚시, 마을 사람들과의 관계까지 소소한 재미가 가득해요. 느긋하게 즐기기에 최고입니다.',
      rating: 4.5,
      likeCount: 33,
      createdAt: '2023-11-28T00:00:00Z',
    },
  ],
}
