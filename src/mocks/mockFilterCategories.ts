const MOCK_FILTER_CATEGORIES = [
  {
    id: 1,
    name: '장르',
    list: [
      '액션',
      '어드벤처',
      'RPG',
      '전략',
      '시뮬레이션',
      '스포츠',
      '레이싱',
      '퍼즐',
      '슈팅',
      '공포',
      '격투',
      '음악',
      '카드',
      '보드',
      '캐주얼',
      '인디',
    ],
  },
  {
    id: 2,
    name: '플랫폼',
    list: [
      'PC',
      'PlayStation',
      'Xbox',
      'Nintendo Switch',
      'Mobile',
      'VR',
      'Cloud',
    ],
  },
  {
    id: 3,
    name: '플레이어',
    list: [
      '싱글플레이',
      '멀티플레이',
      '협동',
      'MMO',
      '로컬 멀티',
      '온라인 PvP',
    ],
  },
  {
    id: 4,
    name: '가격',
    list: ['무료', '유료', '할인 중', '1만원 이하', '3만원 이하', '5만원 이상'],
  },
  {
    id: 5,
    name: '분위기',
    list: [
      '어두운',
      '밝은',
      '유머러스한',
      '감동적인',
      '공상과학',
      '판타지',
      '현실적인',
    ],
  },
] as const

export default MOCK_FILTER_CATEGORIES
