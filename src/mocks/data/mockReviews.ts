import game1 from '@/assets/images/games/game1.png'
import game2 from '@/assets/images/games/game2.png'
import game3 from '@/assets/images/games/game3.jpg'
import game4 from '@/assets/images/games/game4.jpg'
import game5 from '@/assets/images/games/game5.jpg'

const MOCK_REVIEWS = [
  {
    category: 'RPG',
    id: '1',
    gameId: '1',
    gameName: 'Cyberpunk 2077',
    gameImgUrl: game1,
    rating: 4.5,
    content:
      '스토리와 그래픽이 정말 훌륭합니다. 초반 버그가 많았지만 패치 이후 많이 개선되었어요. 사이버펑크 세계관을 좋아한다면 강력 추천합니다! 나이트 시티의 방대한 오픈월드는 정말 압도적이었고, 곳곳에 숨어있는 사이드 퀘스트들의 퀄리티도 메인 스토리 못지않게 훌륭했습니다. 특히 케어렉터들의 개성이 뚜렷하고 선택에 따라 스토리가 변화하는 부분이 인상적이었어요. 전투 시스템도 다양한 플레이스타일을 지원해서 리플레이 가치가 높습니다. 해킹, 스텔스, 정면 돌파 등 원하는 방식으로 미션을 클리어할 수 있어요. 그래픽은 RTX 온 상태에서 정말 차세대 수준이고, 음악과 사운드 디자인도 몰입감을 극대화시켜줍니다. 다만 최적화가 아직 완벽하지 않아서 고사양 PC가 필요하고, 일부 버그가 남아있긴 합니다. 하지만 전반적으로 사이버펑크 장르를 좋아한다면 꼭 해볼만한 게임입니다! 스토리와 그래픽이 정말 훌륭합니다. 초반 버그가 많았지만 패치 이후 많이 개선되었어요. 사이버펑크 세계관을 좋아한다면 강력 추천합니다! 스토리와 그래픽이 정말 훌륭합니다. 초반 버그가 많았지만 패치 이후 많이 개선되었어요. 사이버펑크 세계관을 좋아한다면 강력 추천합니다!',
    createdAt: '2024-01-15',
  },
  {
    category: 'RPG',
    id: '2',
    gameId: '2',
    gameName: 'The Witcher 3',
    gameImgUrl: game2,
    rating: 5,
    content:
      '역대 최고의 RPG 중 하나입니다. 방대한 오픈 월드와 깊이 있는 스토리, 매력적인 캐릭터들... 모든 것이 완벽했습니다. DLC까지 모두 플레이했는데 정말 만족스러웠어요.',
    createdAt: '2024-01-10',
  },
  {
    category: 'RPG',
    id: '3',
    gameId: '3',
    gameName: 'Elden Ring',
    gameImgUrl: game3,
    rating: 4,
    content:
      '난이도가 상당히 높지만, 그만큼 성취감도 큽니다. 오픈 월드 탐험의 재미와 보스전의 긴장감이 일품입니다. 시간 가는 줄 모르고 플레이했네요.',
    createdAt: '2024-01-05',
  },
  {
    category: 'RPG',
    id: '4',
    gameId: '4',
    gameName: "Baldur's Gate 3",
    gameImgUrl: game4,
    rating: 5,
    content:
      'CRPG의 정수를 보여주는 게임입니다. 선택의 자유도가 정말 높고, 각 캐릭터들의 스토리도 매력적입니다. 친구들과 함께 협동 플레이도 재미있어요!',
    createdAt: '2023-12-20',
  },
  {
    category: 'RPG',
    id: '5',
    gameId: '5',
    gameName: 'Red Dead Redemption 2',
    gameImgUrl: game5,
    rating: 4.5,
    content:
      '영화 같은 스토리텔링과 생동감 넘치는 오픈 월드. 디테일이 정말 놀랍습니다. 다만 초반 페이스가 느린 편이니 참고하세요.',
    createdAt: '2023-12-15',
  },
  {
    category: 'RPG',
    id: '6',
    gameId: '6',
    gameName: 'Minecraft',
    gameImgUrl: game2,
    rating: 5,
    content:
      '무한한 창의성을 발휘할 수 있는 게임입니다. 친구들과 함께 서버를 만들어서 놀면 정말 재미있어요. 건축하는 재미가 쏠쏠합니다.',
    createdAt: '2023-12-10',
  },
  {
    category: 'FPS',
    id: '7',
    gameId: '7',
    gameName: 'Valorant',
    gameImgUrl: game3,
    rating: 2.5,
    content:
      '전략적인 FPS를 좋아한다면 추천합니다. 캐릭터마다 고유한 스킬이 있어서 팀 플레이가 중요해요. 경쟁전이 상당히 치열합니다만, 초보자에게는 다소 어려울 수 있습니다.',
    createdAt: '2023-12-05',
  },
  {
    category: 'Simulation',
    id: '8',
    gameId: '8',
    gameName: 'Stardew Valley',
    gameImgUrl: game2,
    rating: 1.5,
    content:
      '힐링 게임이라고 하는데 제 취향은 아니었습니다. 반복적인 작업이 지루하게 느껴졌어요. 농사, 낚시 등이 단조롭고 시간이 너무 오래 걸립니다.',
    createdAt: '2023-11-28',
  },
]

export default MOCK_REVIEWS
