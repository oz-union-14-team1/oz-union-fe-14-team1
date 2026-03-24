import { Banner } from '@/types/banner'

export const MOCK_BANNERS: Banner[] = [
  {
    id: 1,
    imgUrl: '/images/banners/banner1.png',
    title: '전설의 시작, 지금 새로운 모험이 펼쳐진다!',
    genre: ['액션'],
    tag: ['#싱글플레이', '#스파이', '#스토리'],
    description: '제임스 본드의 새로운 미션',
  },
  {
    id: 2,
    imgUrl: '/images/banners/banner2.png',
    title: '스포츠게임, 새로운 스포츠의 세계를 경험하라!',
    genre: ['액션', '어드벤처', '캐주얼', '인디'],
    tag: ['#싱글플레이', '#멀티플레이', '#오픈월드', '#판타지'],
    description: '괴물 사냥꾼 게롤트의 마지막 여정',
  },
  {
    id: 3,
    imgUrl: '/images/banners/banner3.png',
    title: '',
    genre: ['RPG', '액션'],
    tag: ['#싱글플레이', '#스토리', '#판타지', '#탐험'],
    description:
      '꿈틀거리고 출렁이는 새로운 슬라임들이 가득한 신비로운 땅, 레인보우 아일랜드로 떠나는 모험을 계속하세요.',
  },
]
